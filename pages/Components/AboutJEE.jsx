import styles from '../../styles/allStyle/aboutJEE.module.css'
import Image from 'next/image'
const AboutJEE = () => {
    return (
        <>
            <div className={styles.crack__main__div}>
                <div className={styles.crack__main__div__container}>
                    <div>
                        <div className={styles.freeTest__text}>
                            <h3>All about JEE (Mains and Advanced) Exam</h3>
                            <span>Prepare for the Highly Competitive Entrance Exam with Unacademy</span>
                        </div>
                        <div className={styles.JEE__question__container}>

                            <div className={styles.JEE__question}>
                                <span>What is IIT-JEE?</span>
                                <span>IIT-JEE Syllabus & Study Plan</span>
                            </div>

                            <div className={styles.JEE__question}>
                                <span>IIT-JEE Eligibility Criteria</span>
                                <span>Frequently Asked Questions</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/images/exam.svg"
                            alt=""
                            height={120}
                            width={120}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutJEE