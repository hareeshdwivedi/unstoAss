import styles from './style.module.css'
import Summary from './Summary'
import Assessments from './Assessments'

const AssessmentBody = () => {
    return (
        <div className={styles.cotainer}>
            <Summary />
            <Assessments />
        </div>
    )
}

export default AssessmentBody;