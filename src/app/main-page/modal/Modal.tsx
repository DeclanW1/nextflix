"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-2"
      onClick={onClose}>
      <div
        className="relative w-[90vw] h-[90vh] bg-neutral-900 border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-2 right-2 rounded bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">
          ✕
        </button>

        <div className="w-full h-full">{children}</div>
      </div>
    </div>,
    document.body
  );
}
