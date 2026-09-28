
import "./team.css"
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';



function Team() {
    return (
        <>
        <div className="team" id="team">
        <div className="Team-heading">
            <h1>MEET THE TEAMS</h1>
            <p>This is Photoshop's version of Lorem Ipsum. Proin gravida</p>

            </div>

  <Swiper
        slidesPerView={4}
        spaceBetween={30}
        
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="team-img">
            <img src="/team1.jpg" alt="" />
            <div className="Team-name">
              <h2>Owen Meller</h2>
              <p>developer</p>
            </div>

          <div className="team-icons">
            <FaFacebook  fontSize={"20px"}/>
            <FaInstagram  fontSize={"20px"}/>
            <FaTwitter fontSize={"20px"}/>
            <FaTiktok fontSize={"20px"}/>
            
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide> 
  <div className="team-img">
            <img src="/team2.jpg" alt="" />
            <div className="Team-name">
              <h2>Owen Meller</h2>
              <p>developer</p>
            </div>

          <div className="team-icons">
            <FaFacebook  fontSize={"20px"}/>
            <FaInstagram  fontSize={"20px"}/>
            <FaTwitter fontSize={"20px"}/>
            <FaTiktok fontSize={"20px"}/>
            
          </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
           <div className="team-img">
            <img src="/team3.jpg" alt="" />
            <div className="Team-name">
              <h2>Owen Meller</h2>
              <p>developer</p>
            </div>

          <div className="team-icons">
            <FaFacebook  fontSize={"20px"}/>
            <FaInstagram  fontSize={"20px"}/>
            <FaTwitter fontSize={"20px"}/>
            <FaTiktok fontSize={"20px"}/>
            
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className="team-img">
            <img src="/team4.jpg" alt="" />
            <div className="Team-name">
              <h2>Owen Meller</h2>
              <p>developer</p>
            </div>

          <div className="team-icons">
            <FaFacebook  fontSize={"20px"}/>
            <FaInstagram  fontSize={"20px"}/>
            <FaTwitter fontSize={"20px"}/>
            <FaTiktok fontSize={"20px"}/>
            
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
      </Swiper>
        </div>
        </>
    )
}

export default Team