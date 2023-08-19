import { useState } from 'react'
import style from './style.module.css'
import PlusIcon from '@unstop/assets/icons/plus.svg'
import Modal from './Modal'
import {useAppState} from '@unstop/context'

const NewAssessment = () => {
    const { isDesktop } = useAppState()
    const [modalOpen, setModalOpen] = useState(false)
    const openModal = () => { setModalOpen (true) }

    return (
        <div className={`${style.container} ${!isDesktop && style.isMobile }`} onClick={openModal}>
            <PlusIcon />
            <div className={style.title}>New Assessment</div> 
            <div className={style.description}>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</div>
            {modalOpen && <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>}
        </div>
    )
}

export default NewAssessment;