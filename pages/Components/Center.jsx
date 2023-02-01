import styles from '../../styles/allStyle/center.module.css'
import { MdVerified } from 'react-icons/md';

import Image from 'next/image';
import MostEngaging from './MostEngaging';
const Center = () => {
    return (
        <>
            <div className={styles.crack__main__div}>
                <div className={styles.crack__main__div__container}>
                    <div className={styles.freeTest__text}>
                        <h3>Explore Unacademy Centres</h3>
                        <span>Learn from top educators in your own city</span>
                        <div className={styles.freeTest__text__time} class="d-flex gap-3 align-item-center mt-3">
                            <span> <MdVerified style={{ color: "#086FFF", marginRight: "0.4rem" }} />Chat live with educators</span>
                            <span> <MdVerified style={{ color: "#086FFF", marginRight: "0.4rem" }} />Attempt interactive polls</span>
                        </div><br />
                        <h4>Our Centres are now open across India</h4>
                    </div>
                    <div className={styles.crack__main__div__centers___container}>
                        <div className={styles.our__centers}>
                            <Image
                                src="/images/I2.png"
                                alt=""
                                height={36}
                                width={36}
                            />
                            <div className={styles.our__centers__location}>
                                <span style={{ color: "#3C4852", fontWeight: "600", fontSize: "14px" }}>Bhuwneswar</span>
                                <span style={{ color: "#7A8B94", fontWeight: "400", fontSize: "12px" }}>Odisha</span>
                            </div>
                        </div>

                        <div className={styles.our__centers}>
                            <Image
                                src="/images/I1.png"
                                alt=""
                                height={36}
                                width={36}
                            />
                            <div className={styles.our__centers__location}>
                                <span style={{ color: "#3C4852", fontWeight: "600", fontSize: "14px" }}>Jammu</span>
                                <span style={{ color: "#7A8B94", fontWeight: "400", fontSize: "12px" }}>Kashmir</span>
                            </div>
                        </div>

                        <div className={styles.our__centers}>
                            <Image
                                src="/images/I3.png"
                                alt=""
                                height={36}
                                width={36}
                            />
                            <div className={styles.our__centers__location}>
                                <span style={{ color: "#3C4852", fontWeight: "600", fontSize: "14px" }}>Varanasi</span>
                                <span style={{ color: "#7A8B94", fontWeight: "400", fontSize: "12px" }}>UP</span>
                            </div>
                        </div>

                        <div className={styles.our__centers}>
                            <Image
                                src="/images/I4.png"
                                alt=""
                                height={36}
                                width={36}
                            />
                            <div className={styles.our__centers__location}>
                                <span style={{ color: "#3C4852", fontWeight: "600", fontSize: "14px" }}>Mujjaferpur</span>
                                <span style={{ color: "#7A8B94", fontWeight: "400", fontSize: "12px" }}>Bihar</span>
                            </div>
                        </div>

                        <div className={styles.our__centers}>
                            <Image
                                src="/images/I5.png"
                                alt=""
                                height={36}
                                width={36}
                            />
                            <div className={styles.our__centers__location}>
                                <span style={{ color: "#3C4852", fontWeight: "600", fontSize: "14px" }}>Gurugram</span>
                                <span style={{ color: "#7A8B94", fontWeight: "400", fontSize: "12px" }}>Haryana</span>
                            </div>
                        </div>

                        <div className={styles.our__centers}>
                            <Image
                                src="/images/viewAll.svg"
                                alt=""
                                height={36}
                                width={36}
                            />
                            <div className={styles.our__centers__location}>
                                <span style={{ color: "#3C4852", fontWeight: "600", fontSize: "14px" }}>View all</span>
                                {/* <span style={{ color: "#7A8B94", fontWeight: "400", fontSize: "12px" }}>Odisha</span> */}
                            </div>
                        </div>
                    </div>
                    <button>Know more about Centers</button>
                </div>
            </div>
        </>
    )
}

export default Center