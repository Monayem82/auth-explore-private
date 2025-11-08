import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    
    const createUser=(username,email,password)=>{
        // const [userInfo,setUserInfo]=useState({
        //     username,
        //     email,
        //     password,
        // })
    }
    

    return (
        <AuthContext value={createUser}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;