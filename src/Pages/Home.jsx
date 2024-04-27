import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import Event from './Event';
import rx from '../assets/rx.jpg';
import Team from './Team';

const Home = () => {
    const events = [
        { link: 'https://registration-link-1.com', backgroundImage: rx },
        { link: 'https://registration-link-2.com', backgroundImage: 'url(event2.jpg)' },
        { link: 'https://registration-link-3.com', backgroundImage: 'url(event3.jpg)' },
        { link: 'https://registration-link-3.com', backgroundImage: 'url(event3.jpg)' },
        { link: 'https://registration-link-3.com', backgroundImage: 'url(event3.jpg)' },
        { link: 'https://registration-link-3.com', backgroundImage: 'url(event3.jpg)' }
        
    ];

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className="banner">
                    <h1> 🥳UPCOMING EVENTS!!</h1>
                </div>
                <div className="cards">
                    {events.map((event, index) => (
                        <Event key={index} {...event} />
                    ))}
                </div>
                <div className="banner_p">
                    <h1>WHAT IS RecruitX !!🤔</h1>
                </div>
                    <div className="hero" >
                    <div className="content">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cupiditate beatae vitae blanditiis laboriosam earum mollitia voluptas, unde nemo laborum asperiores nobis natus sed nihil sequi, dolor officia molestiae soluta!</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere distinctio aut, fuga eaque, alias sunt nemo, in illum quas aspernatur libero facilis quae tenetur inventore veniam obcaecati molestias consectetur? Qui?</p>
            </div>
            <div className="hero-image"  style={{marginLeft:'30px'}}>
                <img src={rx} alt="Hero" style={{height:'500px',width:'700px'}}/>
            </div>
                    </div>
                    <div className="service" style={{marginTop : '80px'}}>
                    <h1 style={{fontWeight:'30000000',fontStyle:'italic'}}>One platform, For all you club needs</h1>
                   
                    <div className="e-area flex">
                <div className="e-card"style={{ backgroundImage: `url(${rx})`, backgroundSize: 'cover' }}>
                    <h3>
                        <div className="e-txt">DON'T KNOW ABOUT CLUBS IN COLLEGE DW WE GOT YOU COVERED</div>
                    </h3>
                </div>
                <div className="e-card" style={{ backgroundImage: `url(${rx})`, backgroundSize: 'cover' }}>
                    <h3>
                        <div className="e-txt">LIVING UNDER ROCK ? GET UPDATED ON CLUB MEMBERSHIP !</div>
                    </h3>
                </div>
                <div className="e-card" style={{ backgroundImage: `url(${rx})`, backgroundSize: 'cover' }}>
                    <h3>
                        <div className="e-txt">STAY ON TOES WITH EVENT UPDATES !</div>
                    </h3>
                </div>
                <div className="e-card" style={{ backgroundImage: `url(${rx})`, backgroundSize: 'cover' }}>
                    <h3>
                        <div className="e-txt">DON'T HAVE A IDEA OF INTEVIEWS ? WE GOT YOU!</div>
                    </h3>
                </div>
            </div>
            <br />
                    </div>
                    <div className="end">
                      <h1 >Team behind RecruitX</h1>
                      <div style={{marginTop:'30px'}}>
                      <Team/>
                      </div>
                    </div>
            </div>
        </div>
    );
};

export default Home;
