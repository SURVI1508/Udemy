import styles from '../../styles/allStyle/classTour.module.css'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa';

const ClassTour = () => {
    return (
        <>
            <div className={styles.crack__main__div}>
                <div className={styles.crack__main__div__container}>
                    <div className={styles.crack__main__div__classes__image}>
                        <Image
                            className={styles.class__image}
                            src="/images/clss3.webp"
                            alt=""
                            height={558.29}
                            width={1136}
                        />
                        <div className={styles.crack__main__div__classes__vdo__tour}>
                            <FaPlay style={{fontSize:"17px"}}/> <span>Video tour</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ClassTour