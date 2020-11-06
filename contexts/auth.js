import React, { createContext, useState, useContext, useEffect } from 'react'
import cookie from 'js-cookie'

import api from '../pages/api/api'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = cookie.get('token')
            if (token) {
                console.log("Got a token in the cookies, let's see if it is valid")
                api.defaults.headers.Authorization = `Bearer ${token}`
                const { data: user } = await api.get('user/viewer')
                if (user) setUser(user);
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const login = async (username, password) => {
        const { data: token } = await api.post('login', { username, password })
        if (token) {
            console.log("Got token")
            cookie.set('token', token, { expires: 60 })
            api.defaults.headers.Authorization = `Bearer ${token.token}`
            const { data: user } = await api.get('user')
            setUser(user)
            console.log("Got user", user)
        }
    }
    const signUp = async (username, password) => {
        const { data: token } = await api.post('login', { email, username, password })
        if (token) {
            console.log("Got token")
            cookie.set('token', token, { expires: 60 })
            api.defaults.headers.Authorization = `Bearer ${token.token}`
            const { data: user } = await api.get('user/viewer')
            setUser(user)
            console.log("Got user signup", user)
        }
    }

    const logout = (username, password) => {
        cookie.remove('token')
        setUser(null)
        delete api.defaults.headers.Authorization
        window.location.pathname = '/sign-in'
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);

// export const ProtectRoute = ({ children }) => {
//   const { isAuthenticated, isLoading } = useAuth();
//   if (
//     isLoading ||
//     (!isAuthenticated && window.location.pathname !== "/sign-in")
//   ) {
//     return <div>Loading</div>
//   }
//   return children;
// };