import React, {useEffect} from 'react'
import video2 from "../../Assests/video2.mp4"
import { FiSend } from "react-icons/fi";
import scss from "./footer.scss"
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import Aos from "aos"
import "aos/dist/aos.css"








const Footer = () => {
  useEffect(()=> {
    Aos.init({duration: 2000})
    }, [] )

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4" ></video>
      </div>

      <div className="secContent container ">
        <div className="contactDiv flex ">
          <div data-aos = "fade-up" className="text">
            <small>Keep in touch</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex ">
            <input data-aos = "fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos = "fade-up" className="btn flex" type='submit' >
               Send <FiSend className='icon' />
            </button> 
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex ">
            <div className="logoDiv">
              <a href="#" className='logo flex' >
              <MdOutlineTravelExplore className="icon"/> Travel.
              </a>
            </div>
            <div data-aos = "fade-up" className="footerParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo aut esse ea commodi error aperiam.

            </div>
            <div data-aos = "fade-up" className="footerSocials flex ">
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaInstagram className='icon' />
            <FaTripadvisor />


            </div>
          </div>
          
          <div className="footerLinks grid ">
            {/* {Group one} */}
            <div data-aos = "fade-up" data-aos-duration = "3000" className="linkGroup">
              <span className="groupTittle">
                Our agency
              </span>
              <li className="footerList flex">
              <FaChevronRight className='icon' /> Services
              </li>
              <li className="footerList flex">
              <FaChevronRight className='icon' /> Insurance
              </li>
              <li className="footerList flex">
              <FaChevronRight className='icon' /> Agency
              </li>
              <li className="footerList flex">
              <FaChevronRight className='icon' /> Tourism
              </li>
              <li className="footerList flex">
              <FaChevronRight className='icon' /> Payment
              </li>
            </div>
            {/* {Group two} */}
            <div data-aos = "fade-up" data-aos-duration = "4000" className="linkGroup">
              <span className="groupTittle">
                Partners
              </span>
              <li className="footerList flex">
              <FaChevronRight className='icon' /> Services
              </li>
              <li className="footerList flex">
              <FaChevronRight className='icon' /> Insurance
              </li>
              <li className="footerList flex">
              <FaChevronRight className='icon' /> Agency
              </li>
              <li className="footerList flex">
              <FaChevronRight className='icon' /> Tourism
              </li>
              <li className="footerList flex">
              <FaChevronRight className='icon' /> Payment
              </li>
            </div>
            {/* {Group three} */}
            <div data-aos = "fade-up" data-aos-duration = "5000" className="linkGroup">
              <span className="groupTittle">
                Our agency
              </span>
              <li className="footerList flex">
              <FaChevronRight className='icon' /> Services
              </li>
              <li className="footerList flex">
              <FaChevronRight className='icon' /> Insurance
              </li>
              <li className="footerList flex">
              <FaChevronRight className='icon' /> Agency
              </li>
              <li className="footerList flex">
              <FaChevronRight className='icon' /> Tourism
              </li>
              <li className="footerList flex">
              <FaChevronRight className='icon' /> Payment
              </li>
            </div>

          
          </div>
          <div className="footerDiv flex ">
              <small>Best Travel Website Theme</small>
              <small>Copyrights Reserved - Hlibov 2024 </small>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
