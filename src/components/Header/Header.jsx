import React from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
   <>
   <header className={s.header}>
    <div className="container">
        <nav className={s.nav}>
           <Link to={'/'} className={s.logo}>SHOP.CO</Link>
           <div className={s.menu}>
            <Link to={'/'}>Shop</Link>
            <Link to={'/'}>On Sale</Link>
            <Link to={'/'}>New Arrivals</Link>
            <Link to={'/'}></Link>

           </div>
           <input className={s.search} type="text" />

           <div className={s.box}>

            
           </div>
        </nav>
    </div>
   </header>
   </>
  )
}

export default Header