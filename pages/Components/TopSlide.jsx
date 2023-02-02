import styles from '../../styles/allStyle/topSlide.module.css'

import Image from 'next/image'
const TopSlide = () => {
    return (
        <>
            <div className={styles.crack__main__div}>
                <div className={styles.crack__main__div__container}>
                    <div className={styles.slide__img__container}>
                        <Image
                            className={styles.slide__img__Image}
                            src="/images/B2.webp"
                            alt=""
                            height={340}
                            width={1200}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopSlide