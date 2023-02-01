import styles from '../../styles/allStyle/referal.module.css'
import { MdVerified } from 'react-icons/md';
import Image from 'next/image';
const Referal = () => {
    return (
        <>

            <div className={styles.crack__main__div}>
                <div className={styles.crack__main__div__container}>
                    <div className={styles.freeTest__text}>
                        <h3>Refer friends to win Amazon vouchers and Plus Subscription</h3>

                        <div className={styles.freeTest__text__time} class="d-flex gap-3 align-item-center">
                            <span>For every successful referral win up to ₹2,500. Also, get 1 month plus subscription once</span>
                        </div>
                        <button>Refer a freind</button>
                    </div>
                    <div className={styles.freeTest__image}>
                        <Image
                            className={styles.freeTest__image__img}
                            src="/images/card.png"
                            alt=""
                            height={200}
                            width={360}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Referal