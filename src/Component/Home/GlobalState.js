import React, { createContext, useState } from 'react'


export const RecentContext = createContext();

export const GlobalState = ({children}) => {
  const [viewItems, setViews] = useState([])
  return (
    <RecentContext.Provider value={{me: "lucia", viewItems, setViews}}>
      {children}
    </RecentContext.Provider>
  )
}




