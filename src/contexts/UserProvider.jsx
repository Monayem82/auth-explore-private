import React, { useState } from 'react';
import { UserContext } from './AuthContext';



const UserProvider = ({ children }) => {
    const [userInfoData, setuserInfoData] = useState({
        name: '',
        email: '',
        password: '',
    })
    return (

        <UserContext value={{ userInfoData, setuserInfoData }}>
            {children}
        </UserContext>
    );
};

export default UserProvider;