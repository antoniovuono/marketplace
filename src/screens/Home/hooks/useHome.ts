import { useQuery } from '@tanstack/react-query'
import { get } from '@services/http'
import { useUserStore } from '@store/useUserStore'
import { UserProps } from './interfaces'

export function useHome() {
  const authToken = useUserStore((state) => state.authToken)

  async function fetchUserData(): Promise<UserProps> {
    try {
      const response = await get('/users/me', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      return response.data.user
    } catch (error) {
      throw error
    }
  }

  const {
    data: user,
    isLoading: isUserDataLoading,
    isError: isUserError,
    error: fetchUserDataError,
  } = useQuery<UserProps, Error>({
    queryKey: ['user'],
    queryFn: fetchUserData,
  })

  return {
    user,
    isUserError,
    isUserDataLoading,
    fetchUserDataError,
  }
}
