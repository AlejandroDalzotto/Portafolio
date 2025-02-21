import { create } from "zustand"

type State = {
  isTransitioning: boolean
  title: string | null
}

type Action = {
  startTransition: VoidFunction
  completeTransition: VoidFunction
  setTitle: (path: string) => void
  setTitleToNull: VoidFunction
}

const useTransitionStore = create<State & Action>()((set) => ({
  isTransitioning: false,
  title: null,
  setTitle: (value: string) => set({ title: value }),
  setTitleToNull: () => set({ title: null }),
  startTransition: () => set({ isTransitioning: true }),
  completeTransition: () => set({ isTransitioning: false }),
}))

export default useTransitionStore;