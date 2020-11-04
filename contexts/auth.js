import React, { createContext, useState, useContext, useEffect } from 'react'
import cookie from 'js-cookie'
import Router, { useRouter } from 'next/router'

import api from '../pages/api/api'

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadUserFromCookies() {
        const token = cookie.get('token')
        if (token) {
            console.log("Got a token in the cookies, let's see if it is valid")
            api.defaults.headers.Authorization = `Bearer ${token}`
            const { data: user } = await api.get('users')
            if (user) setUser(user);
        }
        setLoading(false)
    }
    loadUserFromCookies()
}, [])
}