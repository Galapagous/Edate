import { createContext, useState } from "react"

export const AppContext = createContext(null)

export function AppProvider({children}){
    const [userInfo, setUserInfo] = useState({})
    const [isLoggedIn, setIsloggedIn] = useState(false)

    return (
        <AppContext.Provider
        value={{
            userInfo,
            isLoggedIn,
            setUserInfo,
            setIsloggedIn
        }}>
            {children}
        </AppContext.Provider>
    )
}