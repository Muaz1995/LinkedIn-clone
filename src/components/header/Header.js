import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from '../Firebase/Firebase';
import { logout, selectUser } from '../../Login/userSlice';


function Header() {

    const dispatch = useDispatch();

    const user = useSelector(selectUser);

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    };


    return (
        <div className = "header">

            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder = 'Search' type="text"/>
                </div>

            </div>
            <div className="header__right">
                <HeaderOptions Icon = {HomeIcon} title = "Home"/> 
                <HeaderOptions Icon = {SupervisorAccountIcon} title = "My Network"/> 
                <HeaderOptions Icon = {BusinessCenterIcon} title = "Jobs"/> 
                <HeaderOptions Icon = {ChatIcon} title = "Messages"/> 
                <HeaderOptions Icon = {NotificationsIcon} title = "Notifications"/> 
                <HeaderOptions
                avatar = {true} 
                title = {user?.displayName}
                onClick = {logoutOfApp}
                />

            </div>  
        </div>
    )
}

export default Header
