import {useState} from 'react'
import style from './style.module.css'
import Summary from './Summary'
import BarChartIcon from '@unstop/assets/icons/bar-chart.svg'
import SearchIcon from '@unstop/assets/icons/search.svg'
import FilterIcon from '@unstop/assets/icons/filter.svg'
import NewAssessment from '@unstop/components/common/NewAssessment'
import ListAssessment from '@unstop/components/common/ListAssessment'

const AssessmentBody = () => {
    const [showSummary, setShowSummary] = useState(false);
    return (
        <div className={style.container}>
            {showSummary && <Summary />}
            <div className={style.title_container}>
                <div className={style.title}>
                    Assessment
                </div>
                <div className={style.actions}>
                    <div className={style.icon_container}>
                    <SearchIcon className={style.pointer}/>
                    </div>
                    <div className={style.icon_container}>
                    <FilterIcon className={style.pointer}/>
                    </div>
                    <div className={style.icon_container}>
                    <BarChartIcon onClick={()=> setShowSummary(!showSummary)}/>
                    </div>
                </div>
            </div>
            <NewAssessment />
            <ListAssessment />
        </div>
    )
}

export default AssessmentBody