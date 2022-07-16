import { LoginInfo, UserInfo } from '../../services/types'

interface UserServiceMe {
  queryKey: 'me'
}

interface UserServiceRead {
  queryKey: 'read'
  id: number
}

export type UserService = UserServiceMe | UserServiceRead

interface AuthServiceRefresh {
  mutationKey: 'refresh'
}

interface AuthServiceSignup {
  mutationKey: 'signup'
  userInfo: UserInfo
}

interface AuthServiceLogin {
  mutationKey: 'login'
  loginInfo: LoginInfo
}

export type AuthService =
  | AuthServiceRefresh
  | AuthServiceSignup
  | AuthServiceLogin
