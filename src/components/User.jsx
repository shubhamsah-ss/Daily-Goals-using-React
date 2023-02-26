import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const User = () => {
    const param = useParams();
    const navigation = useNavigate();
    return (
        <div className='user'>User: {param.id}
            <br />
            <button onClick={()=> navigation("/about")}>Click me</button>
        </div>
    )
}

export default User