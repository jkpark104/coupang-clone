import { useMutation } from 'react-query'
import { AuthService as AuthServiceParams } from './types'
import { AuthService } from '../services'

const getMutationFunction = (params: AuthServiceParams) => {
  const { mutationKey } = params

  switch (mutationKey) {
    case 'refresh':
      return () => AuthService.refresh()

    case 'signup':
      return () => AuthService.signup(params.userInfo)

    case 'login':
      return () => AuthService.login(params.loginInfo)
  }
}

export const useRequestPost = (params: AuthServiceParams) => {
  const { mutationKey } = params

  const mutationFunction = getMutationFunction(params)

  const { data, isError, isLoading } = useMutation(
    mutationKey,
    mutationFunction
  )

  return { data, isError, isLoading }
}
