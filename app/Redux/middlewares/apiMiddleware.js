import axios from 'axios';
import CONFIG from '../../Config'; // Vérifiez que `CONFIG.API_BASE_URL` est défini correctement

const apiMiddleware = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== 'API_CALL') return next(action); // Vérifie si l'action est de type `API_CALL`

  const { endpoint, method, data, onSuccess, onError } = action.payload;

  try {
    const response = await axios({
      url: `${CONFIG.API_BASE_URL}${endpoint}`,
      method,
      data,
    });
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data }); // Action en cas de succès
  } catch (error) {
    if (onError) dispatch({ type: onError, payload: error.response?.data || error.message }); // Action en cas d'erreur
  }
};

export default apiMiddleware;
