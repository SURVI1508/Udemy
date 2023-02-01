import styles from '../../styles/allStyle/crack.module.css'
import { BsFillBookmarkCheckFill } from 'react-icons/bs';

const Crack = () => {
    return (
        <div className={styles.crack__main__div}>
            <div className={styles.crack__main__div__container}>
                <div className={styles.crack__main__div__container__heading}>
                    <h1>Crack IIT JEE with <br /> Unacademy</h1>
                    <p>Over <span style={{color:"#08BD80"}}>8,00,000</span> learners trust us for online and offline coaching</p>
                </div>

                <div className={styles.crack__main__div__container__feature}>

                    <div className={styles.crack__main__div__container__feature__card}>
                        <div className={styles.crack__main__div__container__feature__icon}>
                            <h3><BsFillBookmarkCheckFill /></h3>
                        </div>
                        <h4 style={{ color: "#3C4852", fontWeight: "700" }}>Indias top <br /> educators</h4>
                        <p>Learn with the best educators for <br /> online IIT JEE preparation</p>
                    </div>


                    <div className={styles.crack__main__div__container__feature__card}>
                        <div className={styles.crack__main__div__container__feature__icon}>
                            <h3><BsFillBookmarkCheckFill /></h3>
                        </div>
                        <h4 style={{ color: "#3C4852", fontWeight: "700" }}>Full syllabus <br /> coverage</h4>
                        <p>Learn with the best educators for <br /> online IIT JEE preparation</p>
                    </div>


                    <div className={styles.crack__main__div__container__feature__card}>
                        <div className={styles.crack__main__div__container__feature__icon}>
                            <h3><BsFillBookmarkCheckFill /></h3>
                        </div>
                        <h4 style={{ color: "#3C4852", fontWeight: "700" }}>Best-in-class <br /> learning experience</h4>
                        <p>Learn with the best educators for <br /> online IIT JEE preparation</p>
                    </div>


                    <div className={styles.crack__main__div__container__feature__card}>
                        <div className={styles.crack__main__div__container__feature__icon}>
                            <h3><BsFillBookmarkCheckFill /></h3>
                        </div>
                        <h4 style={{ color: "#3C4852", fontWeight: "700" }}>1:1 Live mentorship <br /> & more</h4>
                        <p>Learn with the best educators for <br /> online IIT JEE preparation</p>
                    </div>

                </div>
                <div className={styles.crack__feature__btns}>
                    <button>View subscription plans</button>
                    <button style={{color:"black",border:"1px solid black",background:"none"}}>Try learning for free</button>
                </div>
            </div>
        </div>
    )
}

export default Crack