import { useQuery } from 'react-query'
import { UserService } from '../services'
import { UserService as UserServiceParams } from './types'

const getQueryFunction = (params: UserServiceParams) => {
  const { queryKey } = params

  switch (queryKey) {
    case 'me':
      return () => UserService.me()

    case 'read':
      return () => UserService.read(params.id)
  }
}

export const useRequestGet = (params: UserServiceParams) => {
  const { queryKey } = params

  const queryFunction = getQueryFunction(params)

  const { data, isError, isLoading } = useQuery(queryKey, queryFunction, {
    refetchInterval: 500,
  })

  return { data, isError, isLoading }
}
