import React from 'react'
import Navbar from '../components/Navbar'
import Cards from './Cards'
import rx from '../assets/rx.jpg';
import iic from '../assets/iiclogo.png';
import gfg from '../assets/gfg.png';
import IDEATE from '../assets/IDEATE.png';
import MLSC from '../assets/MLSC.png';
import CODECHEF from '../assets/CODECHEF.png';
import GDSC from '../assets/GDSC.png';
import Video from '../assets/video.mp4';





const Clubs = () =>  {
  return (
    <div>
     
    <div style={{margin:"0px",position:'fixed', top: 0, width: '100%', zIndex: 1000 }}><Navbar/></div>
    <div className='container' style={{display:'flex',flexWrap: 'wrap',justifyContent:'center',margin:'20px'}}>
       
    <div className="content" style={{justifyContent:'center',display:'flex'}} >
    <div>
      <video  autoPlay loop  muted style={{width:'100%',height:'700px',position:'relative',marginTop:'80px'}}>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
    <div className="banner">
                    <h1> KNOW THE CLUBS  </h1>
                </div>
        <Cards image = {iic} 
               link ="https://iicmitadt.com/"
               />
               <Cards image = {gfg}
                link ="https://www.geeksforgeeks.org/colleges/mit-art-design-and-technology-university-mitadt-pune/"
               />
               <Cards  image = {MLSC}
                link ="https://mlscmitadt.tech/"
               />
               <Cards image = {IDEATE}
                link ="https://www.instagram.com/ideateclub/"
               />
               <Cards image = {CODECHEF} 
                link ="https://www.instagram.com/codechef_mitsoc/"
               />
               <Cards image = {GDSC} 
                link ="https://gdsc.community.dev/mit-adt-university-pune-india/"
               />

 
    </div>
    </div>
  )
}

export default Clubs