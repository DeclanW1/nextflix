"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const f = dialogRef.current?.querySelectorAll<HTMLElement>(
          'a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])'
        );
        if (!f || f.length === 0) return;
        const first = f[0], last = f[f.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && active === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      lastFocused.current = document.activeElement as HTMLElement | null;
      setTimeout(() => dialogRef.current?.focus(), 0);
    } else {
      lastFocused.current?.focus?.();
    }
  }, [open]);

  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      onMouseDown={(e) => { if (e.target === overlayRef.current) onClose(); }}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className="w-full max-w-3xl rounded-2xl border border-white/10 bg-neutral-900 p-5 shadow-2xl outline-none">
        <div className="mb-3 flex items-start justify-between gap-6">
          {title ? <h2 className="text-xl font-semibold">{title}</h2> : <span className="sr-only">Modal</span>}
          <button className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="max-h-[70vh] overflow-auto pr-1">{children}</div>
      </div>
    </div>,
    document.body
  );
}
