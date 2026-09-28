import "./About.css";
import { FaFlask } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";



function About() {
  return (
    <>
      <div className="about" id="about">
        <div className="about-boxes">
          <h1>Company Biography</h1>
          <p>Short story about us</p>
          <p1>
           <p> This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit Duis sed odio sit amet nibh vulputate cursus
             a sit</p>
           <p> amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
            tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat
            auctor eu in elit.
             Class aptent taciti sociosqu ad litora torquent</p>
           <p> per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
            Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed
            non</p>
          </p1>
        </div>
        <div className="about-boxes">
            <h1>Our Clients</h1>
            <p>We love our clients</p>
            <div className="about-grid">
                <div className="grid-box"><img src="/client-logo1.png" alt="" /></div>
                <div className="grid-box"><img src="/client-logo2.png" alt="" /></div>
                <div className="grid-box"><img src="/client-logo3.png" alt="" /></div>
                <div className="grid-box"><img src="/client-logo4.png" alt="" /></div>
            </div>
        </div>
      </div>
      <div className="company">
        <h2>Company States</h2>
        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
        <div className="company-grid">
            <div className="company-box">
                  <FaFlask  fontSize={"60px"}/>
                  <p>345676</p>
                  <p>Line Of The Code Writen</p>
            </div>
            <div className="company-box">
            <GiCoffeeCup fontSize={"60px"}/>
            <p>765423</p>
            <p>Coffe Drinked</p>

            </div>
            <div className="company-box">
<FaUserGroup fontSize={"60px"}/>
<p>654</p>
<p>Happy Client</p>
            </div>
            <div className="company-box">
              <FaShoppingBag  fontSize={"60px"}/>
              <p>34543</p>
              <p>Project Done</p>

            </div>
        </div>
      </div>

     
    </>
  );
}

export default About;