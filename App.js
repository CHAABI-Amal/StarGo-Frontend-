import React from 'react';
import { Provider } from 'react-redux';
import store from './app/Redux/store'; // Import du store configuré
import AppNavigator from './app/AppNavigator'; // Chemin correct vers votre navigation

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
