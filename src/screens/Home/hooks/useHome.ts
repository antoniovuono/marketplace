import { useQuery } from '@tanstack/react-query'
import { get } from '@services/http'
import { AppError } from 'src/helpers/errors'
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
      if (error instanceof AppError) {
        throw error
      }
      throw error
    }
  }

  const {
    data: user,
    isError: isUserDataError,
    error: userDataError,
    isLoading: isUserDataLoading,
  } = useQuery<UserProps, Error>({
    queryKey: ['user'],
    queryFn: fetchUserData,
  })

  return {
    user,
    isUserDataError,
    userDataError,
    isUserDataLoading,
  }
}
