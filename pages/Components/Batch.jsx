import styles from '../../styles/allStyle/batch.module.css'
import { MdVerified } from 'react-icons/md';
import { BiFullscreen, BiUser } from 'react-icons/bi';
import { AiOutlineBook } from 'react-icons/ai';
import { FiPlayCircle } from 'react-icons/fi';

import Image from 'next/image';
const Batch = () => {
    return (
        <>
            <div className={styles.crack__main__div}>
                <div className={styles.crack__main__div__container}>
                    <div className={styles.freeTest__text}>
                        <h3>Watch free online classes</h3>
                        <div className={styles.freeTest__text__time} class="d-flex gap-2 align-item-center">
                            <span> <MdVerified style={{ color: "green", marginRight: "0.4rem" }} />Chat live with educators</span>
                            <span> <MdVerified style={{ color: "green", marginRight: "0.4rem" }} />Attempt interactive polls</span>
                            <span> <MdVerified style={{ color: "green", marginRight: "0.4rem" }} />Get your doubts cleared</span>
                        </div>
                    </div>
                    <div className={styles.freeTest__image} >
                        <div className={styles.freeTest__image__avtart}>
                            <Image
                                className={styles.crack__main__div__vdo__play__image}
                                src="/images/M2.webp"
                                alt=""
                                width={55}
                                height={55}
                            />
                        </div>
                        <h5>116.5K learners</h5>
                        <p>watched a class today</p>
                    </div>
                </div>


                <div className={styles.crack__main__div__vdo_container}>
                    <div className={styles.crack__main__div__vdo__play}>

                        <div className={styles.crack__main__div__vdo__play__caption}>
                            <span>Hinglish</span>
                            <span>FULL SYLLABUS COMPLETION</span>
                        </div>

                        <Image
                            className={styles.crack__main__div__vdo__play__image}
                            src="/images/team.webp"
                            alt=""
                            width={561}
                            height={316}
                        />
                        <div className={styles.crack__main__div__vdo__play__preview}>
                            <FiPlayCircle style={{fontSize:"17px"}}/>
                            <span>Watch Preview</span>
                        </div>
                    </div>

                    <div className={styles.crack__main__div__vdo__info}>

                        <div className={styles.crack__main__div__vdo__lang}>
                            <span style={{ background: "#9875FF", color: "white", letterSpacing: "0.2px", fontWeight: "bold", borderRadius: "4px", fontSize: "10px", padding: "6px" }}>Recommended</span><br />
                            <span style={{ color: "#8873FF", fontWeight: "700", fontSize: "12px", marginLeft: "0.4rem" }}>Top rated • Exceptional educators</span>
                        </div>

                        <div className={styles.crack__main__div__vdo__chapter__name}>
                            <h3>Booster Batch for JEE Main, 2023</h3>
                            <p style={{ color: "#3C4852", fontWeight: "400", fontSize: "14px" }}><BiFullscreen style={{ fontSize: "18px", marginRight: "0.5rem" }} />Full IIT JEE syllabus completion</p>
                            <p style={{ color: "#3C4852", fontWeight: "400", fontSize: "14px" }}><AiOutlineBook style={{ fontSize: "18px", marginRight: "0.5rem" }} />77+ topic-wise full syllabus notes</p>
                            <p style={{ color: "#3C4852", fontWeight: "400", fontSize: "14px" }}><BiUser style={{ fontSize: "18px", marginRight: "0.5rem" }} />Prashant Jain, Ashwani Tyagi, Nishant Vora and 1 more</p>

                        </div>

                        <div className={styles.crack__main__next__btn} class="d-flex gap-2">
                            <button>View batch detail</button>
                            <span>Start in</span>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Batch