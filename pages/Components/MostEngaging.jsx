import styles from '../../styles/allStyle/mostEngaging.module.css'
import { useState } from 'react'
import { BiWifi2 } from 'react-icons/bi';
import { FaPlay } from 'react-icons/fa';

import {playList} from './playListJson'
import Image from 'next/image';
const MostEngaging = () => {
    const [play, setPlay] = useState(playList);
    // console.log(play)
    return (
        <div className={styles.crack__main__div}>
            <div className={styles.crack__main__div__container}>
                <div className={styles.freeTest__text}>
                    <h3>Watch free online classes</h3>
                    <button>See all</button>
                </div>


                <div className={styles.crack__main__div__vdo_container}>

                    {
                        play.slice(0, 4).map((val, i) => {
                            return (
                                <>
                                    <div className={styles.crack__main__div__vdo__playList} key={i}>
                                        <div className={styles.crack__main__div__vdo__play}>
                                            <Image
                                                className={styles.crack__main__div__vdo__play__image}
                                                src={val.img}
                                                alt={val.tName}
                                                width={272}
                                                height={156}
                                            />
                                            <div className={styles.crack__main__div__vdo__play__view}>
                                                <BiWifi2 /><span>{val.view}</span>
                                            </div>
                                            <div className={styles.crack__main__div__vdo__play__btn}>
                                                <FaPlay />
                                            </div>
                                        </div>
                                        <div className={styles.crack__main__div__vdo__info}>

                                            <div className={styles.crack__main__div__vdo__lang}>
                                                <span style={{ background: "white", fontWeight: "bold", borderRadius: "0.2rem", fontSize: "10px", padding: "0.2rem 0.3rem", border: "1px solid lightgray" }}>{val.lang}</span>
                                                <span style={{ color: "#8873FF", fontWeight: "700", fontSize: "12px", marginLeft: "0.4rem" }}>{val.sub}</span>
                                            </div>

                                            <div className={styles.crack__main__div__vdo__chapter__name}>
                                                <h5>{val.des}</h5>
                                                <span style={{ color: "#7A8B94", fontWeight: "500", fontSize: "14px" }}>{val.tName}</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default MostEngaging