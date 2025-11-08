import React, { useContext } from 'react';
import { UserContext } from '../../contexts/AuthContext';

const Home = () => {
    const { userInfoData }=useContext(UserContext)
    return (
        <div>
            {
                userInfoData.name && <div>
                    <h1>Hello bro {userInfoData.name}</h1>
                </div>
            }
        </div>
    );
};

export default Home;