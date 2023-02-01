import styles from '../../styles/allStyle/topEducator.module.css'
import { MdVerified } from 'react-icons/md';
import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { SiBitcoinsv } from 'react-icons/si';

import topEducator from '../api/topEducator'
import Image from 'next/image';
const TopEducator = () => {
    const [educator, settopEducator] = useState(topEducator);

    return (
        <>
            <div className={styles.crack__main__div}>
                <div className={styles.crack__main__div__container}>
                    <div className={styles.freeTest__text}>
                        <h3>Indias top educators <br /> to learn from</h3>
                        <div className={styles.freeTest__text__time} class="d-flex gap-2 align-item-center">
                            <span> <MdVerified style={{ color: "green", marginRight: "0.4rem" }} />Proven history of delivering results</span><br />
                            <span> <MdVerified style={{ color: "green", marginRight: "0.4rem" }} />Mentored past rankers</span><br />
                            <span> <MdVerified style={{ color: "green", marginRight: "0.4rem" }} />Unique style of teaching</span>
                        </div>
                    </div>

                    <div className={styles.crack__main__div__Educator_container}>



                        {
                            educator.map((val, i) => {
                                return (
                                    <>
                                        <div className={styles.educator__card}>
                                            <div className={styles.educator__card__image}>
                                                <Image
                                                    src="/images/E1.webp"
                                                    alt=""
                                                    height={170}
                                                    width={130}
                                                />

                                                <div className={styles.educator__card__sktiker}>
                                                    <SiBitcoinsv style={{ fontSize: "15px" }} /><span>LEGEND</span>
                                                </div>

                                            </div>
                                            <div className={styles.educator__card__info}>
                                                <span>Piyush Maheswari</span>
                                                <p>A mentor to AIR 1, four 100 percentilers in JEE Mains and a guiding light to 10k+ IITians.</p>
                                                <div class="d-flex gap-3">
                                                    <div><span>142M</span><br /><p>Watch mins</p></div>
                                                    <div><span>75K</span><br /><p>Followers</p></div>
                                                </div>
                                                <div style={{ fontSize: "14px", fontWeight: "600",marginBottom:"0.5rem"}} className={styles.educator__View__Profile}>View Profile <IoIosArrowForward className={styles.View__Profile__aro} style={{ fontSize: "20px" }} /></div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }


                    </div>

                </div>
            </div>
        </>
    )
}

export default TopEducator