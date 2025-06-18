"use client"

import { createContext, useContext, useState, ReactNode } from 'react'
interface ContatsContextType {
    visible: boolean
    toggleVisible: () => void
}

const ContatsContext = createContext<ContatsContextType | undefined>(undefined)

export const ContatsProvider = ({ children }: { children: ReactNode }) => {
    const [visible, setVisible] = useState(true)

    const toggleVisible = () => {
        setVisible(prev => !prev)
    }

    return (
        <ContatsContext.Provider value={{ visible, toggleVisible }}>
            {children}
        </ContatsContext.Provider>
    )
}

export const useContats = () => {
    const context = useContext(ContatsContext)
    if (context === undefined) {
        throw new Error('useContats must be used within a ContatsProvider')
    }
    return context
} 