export default {
  meEndpoint: '/auth/me',
  loginEndpoint: '/api/login',
  signupEndpoint: '/api/signup',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}