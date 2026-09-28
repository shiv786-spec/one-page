import './services.css'
import { BiSolidPlaneAlt } from "react-icons/bi";
import { HiSpeakerphone } from "react-icons/hi";
import { LuFiles } from "react-icons/lu";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegImage } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";



function Service(params) {
    return (
        <>
            <div className="service-sec" id='services'>
                <div className="headings">
                    <h1>OUR SERVICES</h1>
                    <p>This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
                </div>
                <div className="service-grid-sec">
                    <div className="sec">
                        <HiSpeakerphone fontSize={"50px"} />
                        <div className="content">
                            <h2>Web Design</h2>
                            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
                        </div>
                    </div>
                    <div className="sec">
                        <BiSolidPlaneAlt fontSize={"50px"} />
                        <div className="content">
                            <h2>Photography</h2>
                            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
                        </div>
                    </div>
                    <div className="sec">
                        <LuFiles fontSize={"50px"} />

                        <div className="content">
                            <h2>HTML5</h2>
                            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
                        </div>
                    </div>
                    <div className="sec">
                        <AiOutlineLike fontSize={"50px"} />

                        <div className="content">
                            <h2>Jquery</h2>
                            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
                        </div>
                    </div>
                    <div className="sec">
                        <FaRegImage fontSize={"50px"} />

                        <div className="content">
                            <h2>Seo</h2>
                            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
                        </div>
                    </div>
                    <div className="sec">
                        <FaCss3  fontSize={"50px"}/>

                        <div className="content">
                            <h2>Css3</h2>
                            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
                        </div>
                    </div>
                </div>
                <div className="service-image">
                    <img src="/image.png" alt="" />
                </div>
            </div>
        </>
    )
}
export default Service;