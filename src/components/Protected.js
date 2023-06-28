import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from './hooks/useAuth';

export default function Protected({ children }) {
    const { user } = useAuth();
    if (!user) {
        return <Navigate to='/' />
    }
    return children;
}
