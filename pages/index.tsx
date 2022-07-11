import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import Menu from "../Component/Menu";

import LogoDiscord from '../sorce/img/discordLogo.jpg'
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Menu />
            <div className={styles.divDiscord}>
                <label className={styles.titleDiscord}>
                    Venha fazer parte da nossa incrível comunidade!!!
                </label>
                <div className={styles.logoDiscord}>
                    <Image
                        className={styles.discord}
                        src={LogoDiscord}
                        alt="logo do Discord"
                        width={600}
                        height={200}
                        layout="intrinsic"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
