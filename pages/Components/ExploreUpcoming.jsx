import styles from '../../styles/allStyle/explore.module.css'
import { MdVerified } from 'react-icons/md';

import Image from 'next/image';
import MostEngaging from './MostEngaging';
const ExploreUpcoming = () => {
    return (
        <>
            <div className={styles.crack__main__div}>
                <div className={styles.crack__main__div__container}>
                    <div className={styles.freeTest__text}>
                        <h3>Explore subject-wise courses</h3>
                        <div className={styles.freeTest__text__time} class="d-flex gap-3 align-item-center">
                            <span> <MdVerified style={{ color: "green", marginRight: "0.4rem" }} />Chat live with educators</span> <br />
                            <span> <MdVerified style={{ color: "green", marginRight: "0.4rem" }} />Attempt interactive polls</span>
                        </div>
                    </div>

                </div>
            </div>
            <MostEngaging />
        </>
    )
}

export default ExploreUpcoming