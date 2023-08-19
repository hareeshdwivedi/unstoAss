import styles from './style.module.css';

const NavItem = ({ item = {}, setNavigation, navigation, setModalOpen }) =>{

    const changeNavigation = () => {
        setNavigation(item.name)
        setModalOpen(false)
    }

    return (
        <>
            {item.hasBreak && <div className={styles.dottedLine} />}
            <div 
             className={`${styles.flexColumn} ${navigation===item.name && styles.active}`} 
             onClick={changeNavigation}>
                {item.icon}
                <div className={styles.title}>{item.title}</div>
                {item.badge && <div className={styles.badge} > {item.badge} </div>}
            </div>
        </>
    )
}

export default NavItem