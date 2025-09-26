"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import Modal from "./Modal";

type State = { open: false } | { open: true; title?: string; content: ReactNode };

const Ctx = createContext<{
  openModal: (opts: { title?: string; content: ReactNode }) => void;
  closeModal: () => void;
} | null>(null);

export function useModal() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>({ open: false });
  const openModal = (opts: { title?: string; content: ReactNode }) => setState({ open: true, ...opts });
  const closeModal = () => setState({ open: false });

  return (
    <Ctx.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal open={state.open} title={state.open ? state.title : undefined} onClose={closeModal}>
        {state.open ? state.content : null}
      </Modal>
    </Ctx.Provider>
  );
}
