import { useState } from 'react'
import style from './style.module.css'
import MenuIcon from '@unstop/assets/icons/ham.svg'
import LaptopIcon from '@unstop/assets/icons/laptop.svg'
import Navigation from './Navigation'

const Header = ({setDesktop}) => {
    const [showNavigation, setNavigation] = useState(false)
    return (
        <div className={style.container}>
            <Navigation modalOpen={showNavigation} setModalOpen={setNavigation}/>
            <div className={style.title_section}>
                <MenuIcon className={style.menu} onClick={()=> setNavigation(true)}/>
                <div className={style.title}>Assessment</div>
            </div>
            <LaptopIcon className={style.toggle} onClick={setDesktop}/>
        </div>
    )
}

export default Header