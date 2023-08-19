import { useState } from 'react'
import navgiationMappings from '@unstop/configs/navigation'
import NavItem from './NavItem'
import style from './style.module.css'

const Navigation = () => {
    const [navigation, setNavigation] = useState('Assessment')

    return (
        <div className={style.cotainerFlex}>
            {navgiationMappings.map((item)=> <NavItem key={item} item={item} navigation={navigation} setNavigation={setNavigation} />)}
        </div>
    );
}

export default Navigation