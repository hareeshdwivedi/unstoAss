import Header from './Header'
import AssessmentBody from './AssessmentBody'
import styles from './style.module.css'

const Main = ( {unsetDesktop}) => {
    return (
        <div className={styles.cotainer}>
            <Header unsetDesktop={unsetDesktop}/>
            <AssessmentBody />
        </div>
    )
}

export default Main;