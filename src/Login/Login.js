import React, {useState} from 'react'
import {  useDispatch } from 'react-redux'
import './Login.css'

import { auth } from '../components/Firebase/Firebase'
import { login } from './userSlice'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();


    const LoginToApp = (e) => {
        e.preventDefault();


        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth =>{
            dispatch(Login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profileUrl:userAuth.user.photoURL,

            }))
        }).catch(error => alert(error));

    };

    const Register = () => {
        if(!name) {
            return alert("please enter a full name")
        }

        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
                userAuth.user.updateProfile({
                    displayName:name,
                    photoURL:profilePic,
                })
                .then(() => {
                    dispatch(
                        login({
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:name,
                        photoURL:profilePic,
                    }));
                });
            }).catch(error => alert(error));
    };
    return (
        <div className = 'login'>
            <img src="https://cdn.worldvectorlogo.com/logos/linkedin.svg" alt=""/>
            <form action="">
                <input type="text" value = {name} placeholder = 'Full name (required if registering)'  onChange = {(e) => setName(e.target.value)} />

                <input placeholder = 'Profile pic URL (optional)'  type="text" value = {profilePic} onChange = {(e) => setProfilePic(e.target.value)} />

                <input placeholder = 'Email' type = 'email' value = {email}  onChange = {(e) => setEmail(e.target.value)}/> 

                <input placeholder = 'Password' type = 'password' value = {password} onChange = {(e) => setPassword(e.target.value)}  /> 

                <button type = 'submit' onClick = {LoginToApp}>Sign In</button>


            </form>

            <p>Not a member? 

                <span className = 'login__register'  onClick = {Register}>Register Now</span>
            </p>
        </div>
    )
}

