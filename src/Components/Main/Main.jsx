import React, { useEffect } from 'react'
import "./main.css"
import "./main.scss"
import img from "../../Assests/Bora Bora.jpg"
import img2 from "../../Assests/Peru.jpg"
import img3 from "../../Assests/Great Barrier Reef.jpg"
import img4 from "../../Assests/Georgia.jpg"
import img5 from "../../Assests/Peru.jpg"
import { FaLocationDot } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa6";

import Aos from "aos"
import "aos/dist/aos.css"




const Data = [
 {
  id: 1,
  imgSrc: img,
  destTitle: "Bora Bora",
  location: "New Zealand",
  grade: "Cultural  relax",
  fees: "$799",
  desc: "New Zealand is a land of great contrasts and diversity. Active volcanoes, spectacular caves, deep glacier lakes, verdant valleys, dazzling fjords, long sandy beaches, and the spectacular snowcapped peaks of the Southern Alps/Kā Tiritiri o te Moana on the South Island—all contribute to New Zealand's scenic beauty.",
  
 },
 {
  id: 2,
  imgSrc: img2,
  destTitle: "Machu Picchu",
  location: "Peru",
  grade: "Cultural  relax",
  fees: "$500",
  desc: "New Zealand is a land of great contrasts and diversity. Active volcanoes, spectacular caves, deep glacier lakes, verdant valleys, dazzling fjords, long sandy beaches, and the spectacular snowcapped peaks of the Southern Alps/Kā Tiritiri o te Moana on the South Island—all contribute to New Zealand's scenic beauty.",
  
 },
 {
  id: 1,
  imgSrc: img3,
  destTitle: "Great Barrier Reef",
  location: "Australia",
  grade: "Cultural  relax",
  fees: "$799",
  desc: "New Zealand is a land of great contrasts and diversity. Active volcanoes, spectacular caves, deep glacier lakes, verdant valleys, dazzling fjords, long sandy beaches, and the spectacular snowcapped peaks of the Southern Alps/Kā Tiritiri o te Moana on the South Island—all contribute to New Zealand's scenic beauty.",
  
 },
 {
  id: 1,
  imgSrc: img4,
  destTitle: "Borjomi",
  location: "Georgia",
  grade: "Cultural  relax",
  fees: "$799",
  desc: "New Zealand is a land of great contrasts and diversity. Active volcanoes, spectacular caves, deep glacier lakes, verdant valleys, dazzling fjords, long sandy beaches, and the spectacular snowcapped peaks of the Southern Alps/Kā Tiritiri o te Moana on the South Island—all contribute to New Zealand's scenic beauty.",
  
 },
]


const Main = () => {

  useEffect(()=> {
    Aos.init({duration: 2000})
    }, [] )

  return (
    <section className="main container section  ">
      <div className="secTitle">
        <h3  data-aos = "fade-right"  className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid ">
       {
        Data.map(({id, imgSrc, destTitle, location, grade, fees, desc })=>{
         return(
          <div key={id} data-aos = "fade-up" className="singleDestination">
           <div className="imageDiv">
            <img src={imgSrc} alt={''} />
           </div>
           <div className="cardInfo">
            <h4 className="destTitle">{destTitle}</h4>
            <span className="content flex ">
            <FaLocationDot className='icon'  />
            <span className="name">{location}</span>
            </span>

            <div className="fees flex">
              <div className="grade">
                <span>{grade}<small>+1</small></span>
              </div>
              <div className="price">
                <h5>{fees}</h5>
              </div>
            </div>
            <div className="desc">
              <p>{desc}</p>
            </div>
            <button className='btn flex' >
              Details <FaClipboardCheck className='icon' />
            </button>
           </div>
          </div>
         )
        })
       }
      </div>
    </section>
  )
}

export default Main
