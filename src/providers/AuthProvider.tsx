import React, { createContext, useMemo, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { User, onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

import { auth, db, login, register, logout } from '../firebase';

interface IContext {
    user: User | null;
    isLoading: boolean;
    register: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoadingInitial, setIsLoadingInitial] = useState<boolean>(true);

    const registerHandler = async (email: string, password: string) => {
        setIsLoading(true);

        try {
            const { user } = await register(email, password);

            await addDoc(collection(db, 'users'), {
                _id: user.uid,
                displayName: user.displayName || 'No name'
            });
        } catch (error) {
            console.log({error});
            // Alert.alert('Error reg:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const loginHandler = async (email: string, password: string) => {
        setIsLoading(true);

        try {
            await login(email, password);
        } catch (error) {
            Alert.alert('Error login:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const logoutHandler = async () => {
        setIsLoading(true);

        try {
            await logout();
        } catch (error) {
            Alert.alert('Error logout:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => onAuthStateChanged(auth, (user) => {
        setUser(user || null);
        setIsLoadingInitial(false);
    }), []);

    const value = useMemo(() => ({
        user,
        isLoading,
        register: registerHandler,
        logout: logoutHandler,
        login: loginHandler
    }), [user, isLoading]);

    return (
        <AuthContext.Provider value={value}>
            {!isLoadingInitial && children}
        </AuthContext.Provider>
    );
}