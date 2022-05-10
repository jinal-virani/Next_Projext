const ContextProvider = ({ children }) => {
  return <>{children}</>; //children will be wrapped with all other context providers
};
export default ContextProvider;
