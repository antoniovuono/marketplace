import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type UserStoreProps = {
  authToken: string | null
  setToken: (token: string) => void
  removeToken: () => void
}

export const useUserStore = create<UserStoreProps>()(
  persist(
    (set) => ({
      authToken: null,
      setToken: (token: string) => set({ authToken: token }),
      removeToken: () => set({ authToken: null }),
    }),
    {
      name: 'marketplace:user-token',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
