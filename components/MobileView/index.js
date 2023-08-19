import Main from './Main'
import style from './style.module.css'

const MobileView = ({ setIsDesktop = () => {}}) => {
    const setDesktop = () => {
        setIsDesktop(true)
    }

    return (
        <div className={style.cotainer}>
            <Main setDesktop={setDesktop}/>
        </div>
    );
}

export default MobileView