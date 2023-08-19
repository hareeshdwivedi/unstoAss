import { Button, Modal } from "reactstrap";
import style from './style.module.css'
import CloseIcon from '@unstop/assets/icons/cut.svg'
import controls from '@unstop/configs/assessment_controls';
import ControlItem from './ControlItem'
import {useAppState} from '@unstop/context'

const NewAssessment = ({ modalOpen, setModalOpen }) => {
    const { isDesktop } = useAppState()

    return (
        <>
            <Modal
                isOpen={modalOpen}
                toggle={() => setModalOpen(false)}
          >
            <div className={`${style.modal_content} ${!isDesktop && style.isMobile }`}>
                <div className={style.modal_header}>
                    <h6 className={style.modal_title}>
                        Create New Assessment
                    </h6>
                    <CloseIcon className={style.cursor} onClick={()=> setModalOpen(false)}/>
                </div>
                <div className={`${style.modal_body} ${!isDesktop && style.isMobile }`}>
                 {controls.map((item) => <ControlItem key={item} item={item} />)}
                </div>
                <div className={style.modal_footer}>
                <Button className={style.save_btn} onClick={()=> setModalOpen(false)}>
                    Save changes
                </Button>
                </div>
            </div>
          </Modal>
        </>
    )
}

export default NewAssessment