import './contact.css'
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";
import { TfiGoogle } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";





function Contact() {
    return(
        <>
<div className="contact" id='contact'>
<div className="contact-heading">
    <h2>Get in touch!</h2>
<p>This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
</div>

<div className="contact-container">
    <div className="contact-box1">
      <div className="contact-info">
          <h3>Contact info</h3>
        <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.</p>
        <p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperd iet nisi. Proin condimentum</p>

      </div>
        <div className='contact-icon'>
<FaHome/><p>lorem ipsum street</p>
<FaPhoneAlt /><p>+91 9876543334</p>
<IoMail /><p>Onepager@gmil.com</p>

        </div>

    </div>
    <div className="contact-box2">
       <div className="box2">
         <label htmlFor="Name">Name</label>
        <input type="text" placeholder='name' />

        <label htmlFor="emial">Email</label>
        <input type="emai"  placeholder='Email'/>

        <label htmlFor="website">Website</label>
        <input type="text" name="" placeholder='website' />
       </div>
       <div className="box2">
        <textarea name="" id="">
            Message
        </textarea>
        <button>Send Message</button>
       </div>
    </div>
</div>
</div>
<div className="footer">

    <p>© 2014 OnePager, All Rights Reserved</p>
    <div className='footer-icons'>
<FaFacebookF />
<FaTwitter />
<FaInstagram />
<FaWifi />
<TfiGoogle />
<FaLinkedinIn />
<FaPinterestP />
    </div>
</div>
        </>
    )
}

export default Contact;