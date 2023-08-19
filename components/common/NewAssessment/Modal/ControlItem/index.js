import style from './style.module.css'
import MapControl from '@unstop/Helper/MapControl';

const ControlItem = ( {item} ) => {
    return (
        <div className={style.container}>
            <div className={style.label}>
            {item.label}
            </div>
            <MapControl
             control={item}
             />
        </div>
    )
}

export default ControlItem