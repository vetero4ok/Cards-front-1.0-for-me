import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import s from './Navbar.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../Store/Store';
import {isLogoutTC} from '../../Store/Reducers/LoginReducer';

const NavBar = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const dispatch = useDispatch()
   // const history = useHistory()
   //const {token} = useParams<{ token: string }>()


    const logoutHandler = () => {
        dispatch(isLogoutTC(false))
    }
    /** token undefined
     * Должен прийти email там линка з токеном*/
    // if ((isLoggedIn) && (<Route path={`/set-new-password/${token}`}/>)) {
    //     return <Redirect to={`/set-new-password/${token}`}/>
    // }
    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }
    /** Из за этого редиректа летит востановление пароля, нужно придумать как обойти это
     * теряется токен после редиректа логика выше не помогла*/

    return (
        <div>
            <div className={s.nav}>
                <div className={s.item + ' ' + s.setting}><NavLink activeClassName={s.active}
                                                                   to={'/profile'}>Profile</NavLink></div>
                <div className={s.item}><NavLink activeClassName={s.active} to={'/test'}>test</NavLink></div>
                <div className={s.item + ' ' + s.setting}><NavLink activeClassName={s.active}
                                                                   to={'/registration'}>Registration</NavLink></div>
                <div className={s.item + ' ' + s.setting}><NavLink activeClassName={s.active}
                                                                   to={'/login'}>Login</NavLink></div>
                <div className={s.item + ' ' + s.setting}><NavLink activeClassName={s.active}
                                                                   to={'/recoverypassword'}>
                    Password Recovery</NavLink></div>
                <div className={`${s.item}`}><NavLink activeClassName={s.active} to={'/set-new-password'}>Entry New
                    Password</NavLink></div>
                {isLoggedIn && <button onClick={logoutHandler}>LOGOUT</button>}
            </div>
        </div>
    );
};

export default NavBar;