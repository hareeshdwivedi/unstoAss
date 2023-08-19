import styles from './style.module.css';

const NavItem = ({ item = {}, setNavigation, navigation }) =>{

    const changeNavigation = () => {
        setNavigation(item.name)
    }

    return (
        <>
            {item.hasBreak && <div className={styles.dottedLine} />}
            {item.badge && <div className={styles.badge} > {item.badge} </div>}
            <div 
             className={`${styles.flexColumn} ${navigation===item.title && styles.active}`} 
             onClick={changeNavigation}>
                {item.icon}
                <div className={styles.title}>{item.title}</div>
            </div>
        </>
    )
}

export default NavItem