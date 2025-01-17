import { create } from "zustand";

export type ModalDetails = {
  iconColor?: "yellow" | "red";
  label?: string;
  description?: string;
  imageURL?: string;
  reversedButton?: boolean;
}

type Store = ModalDetails & {
  opened: boolean;
  open: () => void;
  openWithDetails: (details: ModalDetails) => void;
  close: () => void;
};

export const useModal = create<Store>()((set) => ({
  opened: false,
  iconColor: "yellow",
  label: "Warning",
  description: "Are you sure you want to do this?",
  reversedButton: false,
  open: () => set((state) => ({ ...state, opened: true })),
  openWithDetails: (details) => set((state) => ({ ...state, ...details, opened: true })),
  close: () => set((state) => ({ ...state, opened: false })),
}));

// function Counter() {
//   const { count, inc } = useStore();
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   );
// }
