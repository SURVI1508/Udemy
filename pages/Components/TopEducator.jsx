import styles from '../../styles/allStyle/topEducator.module.css'
import { MdVerified } from 'react-icons/md';
import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { SiBitcoinsv } from 'react-icons/si';

import topEducator from '../api/topEducator'
import Image from 'next/image';
import Referal from './Referal';
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
                                        <div className={styles.educator__card} key={i}>
                                            <div className={styles.educator__card__image}>
                                                <Image
                                                    src={val.img}
                                                    alt={val.name}
                                                    height={170}
                                                    width={130}
                                                />

                                                <div className={styles.educator__card__sktiker}>
                                                    <SiBitcoinsv style={{ fontSize: "15px" }} /><span>LEGEND</span>
                                                </div>

                                            </div>
                                            <div className={styles.educator__card__info}>
                                                <span>{val.name}</span>
                                                <p>{val.des}</p>
                                                <div class="d-flex gap-3">
                                                    <div><span>{val.mints}</span><br /><p>Watch mins</p></div>
                                                    <div><span>{val.followers}</span><br /><p>Followers</p></div>
                                                </div>
                                                <div style={{ fontSize: "14px", fontWeight: "600", marginBottom: "0.5rem" }} className={styles.educator__View__Profile}>View Profile <IoIosArrowForward className={styles.View__Profile__aro} style={{ fontSize: "20px" }} /></div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }


                    </div>
                    <button>Veiw all educator</button>
                {/* <Referal/> */}

                </div>
            </div>
        </>
    )
}

export default TopEducator