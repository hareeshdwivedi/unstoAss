import Select from 'react-select'
import style from './style.module.css'

const MapControl = ({control}) => {
    const controls = { select: <Select {...control}></Select>}

    return controls[control.type] || <input {...control}  className={style.control}/>
}

export default MapControl;
