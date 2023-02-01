import styles from '../../styles/allStyle/classes.module.css'
import { useState } from 'react'
import { BiWifi2 } from 'react-icons/bi';
import { FaPlay } from 'react-icons/fa';
import playList from './playListJson'
import Image from 'next/image';
const Classes = () => {
    const [play, setPlay] = useState(playList);
    console.log(play)
    return (
        <div className={styles.crack__main__div}>
            <div className={styles.crack__main__div__container}>
                <div className={styles.freeTest__text}>
                    <h3>Classes by IIT JEE subjects</h3>

                    <div className={styles.freeTest__sub__btns}>
                        <div className={styles.freeTest__sub__btn}>
                            <div className={styles.freeTest__sub__sub}>
                                <span>P</span>
                            </div>
                            <span>Physics</span>
                        </div>

                        <div className={styles.freeTest__sub__btn}>
                            <div className={styles.freeTest__sub__sub}>
                                <span>C</span>
                            </div>
                            <span>Chemistry</span>
                        </div>

                        <div className={styles.freeTest__sub__btn}>
                            <div className={styles.freeTest__sub__sub}>
                                <span>M</span>
                            </div>
                            <span>Mathematics</span>
                        </div>

                        <div className={styles.freeTest__sub__btn}>
                            <div className={styles.freeTest__sub__sub}>
                                <span>E</span>
                            </div>
                            <span>English</span>
                        </div>

                        <div className={styles.freeTest__sub__btn}>
                            <div className={styles.freeTest__sub__sub}>
                                <span>B</span>
                            </div>
                            <span>Biology</span>
                        </div>
                    </div>

                </div>


                <div className={styles.crack__main__div__vdo_container}>

                    {
                        play.slice(0, 8).map((val, i) => {
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
                <button>See more in chemistry</button>
            </div>
        </div>
    )
}

export default Classes