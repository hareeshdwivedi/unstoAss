import NewAssessment from '@unstop/components/common/NewAssessment'
import ListAssessment from '@unstop/components/common/ListAssessment'
// import List from './List'
import style from './style.module.css'

const `Assessment = () => {
    return (
        <div className={style.cotainer}>
            <div className={style.title}>My Assessments</div>
            <div className={style.flex}>
                <NewAssessment /> 
                <ListAssessment />
            </div>
        </div>
    )
}
export default Assessment