import AssessmentBody from './AssessmentBody'
import Header from './Header'
import style from './style.module.css'

const Main = ({ setDesktop }) => {
    return (
        <div className={style.container}>
            <Header setDesktop={setDesktop}/>
            <AssessmentBody />
        </div>
    )
}

export default Main