import { createContext, useState } from 'react';

const MenuContext = createContext(null);


const MenuProvider = ({children}) => {
  const [isActive, setIsActive] = useState();

  const contextData = {
    active: {
      value: isActive, 
      set: setIsActive,
    },
    
  }

  return (
    <MenuContext.Provider value={contextData}>
      {children}
    </MenuContext.Provider>
  );
};

export {MenuContext, MenuProvider};