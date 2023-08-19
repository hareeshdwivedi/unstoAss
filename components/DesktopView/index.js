import Navigation from './Navigation'
import Main from './Main'
import style from './style.module.css'

const DesktopView = ({ setIsDesktop = () => {}}) => {
    const unsetDesktop = () => {
        setIsDesktop(false)
    }

    return (
        <div className={style.cotainer}>
            <Navigation />
            <Main unsetDesktop={unsetDesktop}/>
        </div>
    );
}

export default DesktopView`