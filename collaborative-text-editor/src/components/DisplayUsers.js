import React,{useState} from 'react';
import './styles/DisplayUsers.css'
import User from './User';
import {socket} from '../subscribetoserver';

function DisplayUsers(props) {
    socket.on('activeusers',function(allusers) {
        updateUserList(allusers);
    })
    const [userList,updateUserList] = useState([]);
    return (
        <div className='userArea'>
            <h1 className='heading'>Active Users</h1>
            <div className="userList">
                {
                    userList.map(user => {
                       return <User 
                        name={user.username} 
                        presenting={user.isPresenting}
                        />
                    })
                }
            </div>
        </div>
    );
}

export default DisplayUsers;