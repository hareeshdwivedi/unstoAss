import SuitCase from '@unstop/assets/icons/suit-case.svg'
import CalendarIcon from '@unstop/assets/icons/calendar.svg'
import LinkIcon from '@unstop/assets/icons/copy-link.svg'
import MenuIcon from '@unstop/assets/icons/dot-menu.svg'
import style from './style.module.css'
import {useAppState} from '@unstop/context'

const AssessmentCard = ( { item } ) =>{
  const { isDesktop } = useAppState()

  const colors = ['#6548EE', '#3079E1', '#E9407A']

    return (
        <div className={`${style.containerFlex} ${!isDesktop && style.isMobile }`}>
            <div className={`${style.body} ${!isDesktop && style.isMobile }`}>
                <SuitCase />
                <div className={style.flex_column}>
                    <div className={style.title}>Math Assessment</div>
                    <div className={style.flex}>
                        <div className={style.description}> Job </div>
                        <div className={style.vr_sm} />
                        <CalendarIcon />
                        <div className={style.date}> 20 Apr 2023 </div>
                    </div>
                </div>
                <MenuIcon className={style.menu}/>
            </div>
            <div className={style.footer} >
                <div className={style.flex} >
                    <div>
                        <div className={style.info} >
                            00
                        </div>
                        <div className={style.info_description} >
                            Duration
                        </div>
                    </div>
                    <div className={style.pl_10}>
                        <div className={style.info} >
                            00
                        </div>
                        <div className={style.info_description} >
                            Questions
                        </div>
                    </div>
                </div>
                <div className={style.flex} >
                    <div className={style.share_link}>
                        <LinkIcon/> Share
                    </div>
                    <div className={style.avatar_section}>
                        {[...Array(item).fill('LP')].map((name, i) => (
                            <div key={name} className={style.avatar_container}> 
                                <div className={style.avatar}
                                    style={{backgroundColor: colors[i]}}
                                >{name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssessmentCard