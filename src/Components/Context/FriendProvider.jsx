import React, { useState } from 'react';
import { FriendCallContext } from './FriendContext';

const FriendProvider = ({children}) => {

    const [friendCall, setCallFriend] = useState([]);

    const data = {
        friendCall,
        setCallFriend,
    };
    return (
        <FriendCallContext.Provider value={data} >
            {children}
        </FriendCallContext.Provider>
    );
};

export default FriendProvider;