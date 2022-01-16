import React from 'react'
import sprite from '../../images/svg/symbol-defs.svg'
import s from './Header.module.scss'

export const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.headerWrapper}>
                    <a href="./" className={s.headerLink}>
                        <svg width='90px' height='31px' className={s.logo}>
                            <use  href={`${sprite}#logo`}></use>
                        </svg>
                    </a>
                    <div className={s.userMenu}>
                        <div className={s.userAvatar}>
                            <p className={s.avatarText}>U</p>
                        </div>
                        <p className={s.userName}>{'User Name'}</p>
                        <button type='button' className={s.btn}>
                            <svg width='16px' height='16px' className={s.logoutIcon}>
                                <use  href={`${sprite}#logout`}></use>
                            </svg> 
                            <p className={s.logoutText}>Выйти</p>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
