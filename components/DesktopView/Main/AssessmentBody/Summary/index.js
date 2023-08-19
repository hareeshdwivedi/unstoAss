import styles from './style.module.css'
import TotalPointIcon from '@unstop/assets/icons/horizontal-bars.svg'
import PeopleIcon from '@unstop/assets/icons/people.svg'
import BrowserIcon from '@unstop/assets/icons/cursor-browser.svg'
import LinkIcon from '@unstop/assets/icons/link.svg'

const Summary = () => {
    return (
        <div className={styles.cotainer}>
            <div className={styles.header}>
                Assessment Overview
            </div>
            <div className={styles.card}>
                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        Total Assessment
                    </div>
                    <div className={styles.itemSection}>
                        <div className={styles.itemIcon}>
                            <TotalPointIcon/>
                        </div>
                        <div className={styles.itemPoints}>
                            34
                        </div>
                    </div>
                </div>
                <div className={styles.vr}></div>

                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        Candidates
                    </div>
                    <div className={styles.section}>
                        <div className={styles.itemSection}>
                            <div className={styles.itemIcon}>
                                <PeopleIcon/>
                            </div>
                            <div className={styles.itemDescription}>
                                <div className={styles.itemPoints}>
                                    11,145
                                    <div className={styles.increment}>
                                        +89
                                    </div>
                                </div>
                                <div className={styles.pointsDescription}>
                                    Total Candidates
                                </div>
                            </div>
                            <div className={styles.vr_sm}></div>
                        </div>

                        <div className={styles.itemSection}>
                            <div className={styles.itemDescription}>
                                <div className={styles.itemPoints}>
                                    114
                                    <div className={styles.increment}>
                                        +89
                                    </div>
                                </div>
                                <div className={styles.pointsDescription}>
                                    Who attempted
                                </div>
                            </div>
                        </div>
                        <div className={styles.p_35}></div>
                    </div>
                </div>
                <div className={styles.vr}></div>

                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        Candidates Source
                    </div>
                    <div className={styles.section}>
                        <div className={styles.itemSection}>
                            <div className={styles.itemIcon}>
                                <BrowserIcon/>
                            </div>
                            <div className={styles.itemDescription}>
                                <div className={styles.itemPoints}>
                                    11,000
                                    <div className={styles.increment}>
                                        +89
                                    </div>
                                </div>
                                <div className={styles.pointsDescription}>
                                    E-mail
                                </div>
                            </div>
                            <div className={styles.vr_sm}></div>
                        </div>

                        <div className={styles.itemSection}>
                            <div className={styles.itemDescription}>
                                <div className={styles.itemPoints}>
                                    145
                                    <div className={styles.increment}>
                                        +89
                                    </div>
                                </div>
                                <div className={styles.pointsDescription}>
                                    Social Share
                                </div>
                            </div>
                            <div className={styles.vr_sm}></div>
                        </div>

                        <div className={styles.itemSection}>
                            <div className={styles.itemDescription}>
                                <div className={styles.itemPoints}>
                                    145
                                    <div className={styles.increment}>
                                        +89
                                    </div>
                                </div>
                                <div className={styles.pointsDescription}>
                                    Unique Links
                                </div>
                            </div>
                        </div>
                        <div className={styles.p_35}></div>
                    </div>
                </div>
                <div className={styles.vr}></div>

                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        Total Purpose
                    </div>
                    <div className={styles.itemSection}>
                        <div className={styles.itemIcon}>
                            <LinkIcon/>
                        </div>
                        <div className={styles.itemPoints}>
                            11
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;