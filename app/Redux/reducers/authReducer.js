const initialState = {
  user: null,
  token: null,
  error: null,
  loading: false,
  registered: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return { ...state, registered: true, error: null, loading: false };
    case 'REGISTER_FAILURE':
      return { ...state, error: action.payload, loading: false };
    case 'LOGIN_SUCCESS':
      return { ...state, token: action.payload.access_token, user: action.payload.user, loading: false };
    case 'LOGIN_FAILURE':
      return { ...state, error: action.payload, loading: false };
    case 'LOGIN_REQUEST':
    case 'REGISTER_REQUEST':
      return { ...state, loading: true, error: null };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
