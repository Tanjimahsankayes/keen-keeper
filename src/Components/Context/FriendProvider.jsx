import React, { useState } from 'react';
import { FriendCallContext } from './FriendContext';

const FriendProvider = ({children}) => {

    const [friendCall, setCallFriend] = useState([
      { name: "Call", value: 0 },
      { name: "Text", value: 0 },
      { name: "VideoCall", value: 0 },
    ]);

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