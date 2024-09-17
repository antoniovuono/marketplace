import { create } from 'zustand'

type UserStoreProps = {
  authToken: string | null
  setToken: (token: string) => void
  removeToken: () => void
}

export const useUserStore = create<UserStoreProps>((set) => ({
  authToken: null,
  setToken: (token) => set(() => ({ authToken: token })),
  removeToken: () => set(() => ({ authToken: null })),
}))
