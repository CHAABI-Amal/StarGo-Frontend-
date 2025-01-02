const logger = (store) => (next) => (action) => {
    console.log('Dispatching:', action);
    const result = next(action);
    console.log('Next State:', store.getState());
    return result;
  };
  
  export default logger;
  