import styles from './style.module.css'
import MobileIcon from '@unstop/assets/icons/mobile.svg'
const Header = ({ unsetDesktop }) => {
    return (
        <div className={styles.cotainer}>
            <div className={styles.title}>Assessment</div>
            <div className={styles.navTitle}>My Assessments</div>
            <div className={styles.toggle} onClick={unsetDesktop}>
                <MobileIcon />
            </div>
        </div>
    )
}

export default Header;