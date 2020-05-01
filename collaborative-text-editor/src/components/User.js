import React from 'react';
import './styles/User.css';

function User(props) {
    return (
        <div className='user'>
            <h2 className={props.presenting?'presenting':'normal'}>
                {
                    props.presenting ?
                    props.name + ' (presenting)':
                    props.name
                }

            </h2>
        </div>
    );
}

export default User;