export const register = (email, username, password) => ({
  type: 'API_CALL',
  payload: {
    endpoint: '/user/register',
    method: 'POST',
    data: { email, username, password },
    onSuccess: 'REGISTER_SUCCESS',
    onError: 'REGISTER_FAILURE',
  },
});

export const login = (username, password) => ({
  type: 'API_CALL',
  payload: {
    endpoint: '/auth/login',
    method: 'POST',
    data: { username, password },
    onSuccess: 'LOGIN_SUCCESS',
    onError: 'LOGIN_FAILURE',
  },
});
