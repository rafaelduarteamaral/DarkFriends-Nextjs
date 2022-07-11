import type {NextPage} from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Logo from '../sorce/img/logoTK.png'

const Menu: NextPage = () => {
    return (
        <>
            <div className={styles.menu}>
                <div className={styles.logoMenu}>
                    <Image src={Logo}
                           alt="Logo img"
                           width={400}
                           height={220}
                    />
                </div>
            </div>
            <div className={styles.menuSelect}>

            </div>
        </>
    )
}

export default Menu
