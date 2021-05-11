import React from 'react';
import { useSelector } from 'react-redux'
import './HeaderOptions.css';
import {Avatar} from '@material-ui/core';
import { selectUser } from '../../Login/userSlice';

function HeaderOptions({avatar,Icon, title, onClick}) {

    const user = useSelector(selectUser);
    return (
        <div onClick = {onClick} className = "headerOptions">
            {Icon && < Icon className='headerOption__icon' /> }
            {avatar && (
                <Avatar className = 'headerOption__icon'>{user?.email[0]}</Avatar>
            )}
            <h3 className = "headerOptions__title">{title}</h3>
        </div>
    )
}

export default HeaderOptions
