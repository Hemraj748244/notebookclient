import { useContext } from 'react';
import AuthContext from './AuthContext';
const AuthState = (props) => {
  const examplevalue = 'value';
  return (
    <AuthContext.Provider value={examplevalue}>
      {props.children}
    </AuthContext.Provider>
  );
};
