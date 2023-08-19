import { Fade } from "reactstrap";
import style from './style.module.css'
import CloseIcon from '@unstop/assets/icons/cut.svg'
import NavItem from './NavItem'
import navgiationMappings from '@unstop/configs/navigation'
import { useState } from "react";

const Navigation = ({ modalOpen, setModalOpen }) => {
    const [ navigation, setNavigation ] = useState('assessment')

    return (
        <>
            <Fade
                in={modalOpen}
                toggle={() => setModalOpen(false)}>
            <div className={style.modal_content}>
                <div className={style.modal_header}>
                    <h6 className={style.modal_title}>
                        Menu
                    </h6>
                    <CloseIcon className={style.cursor} onClick={()=> setModalOpen(false)}/>
                </div>
                <div className={style.modal_body}>
                    {navgiationMappings.map((item)=> 
                    <NavItem 
                        key={item} 
                        item={item} 
                        navigation={navigation}
                        setNavigation={setNavigation}
                        setModalOpen={setModalOpen} />
                    )}

                </div>
            </div>
          </Fade>
        </>
    )
}

export default Navigation