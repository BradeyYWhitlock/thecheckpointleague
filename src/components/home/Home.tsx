import React, { ReactElement } from 'react';
import TCLLogo from '../../assets/images/tclLogo.png'
import Trailer from '../../assets/trailer.mp4'
import './styles/home.scss'

const Home = (): ReactElement => {
    const isMobile = window.innerWidth <= 500

    return (
        <div className='home'>
            <div className='homeLogo'>
                <img src={TCLLogo} width={515} height={217}/>
            </div>
            {/* <div className='homeDescription'>
                Small description about the checkpoint league.
            </div> */}
            <video className='trailerVideo' width={isMobile ? "360" : "1120"} height={isMobile ? "200" : "630"} controls>
                <source src={Trailer} type="video/mp4"/>
                Your browser does not support HTML video.
            </video>
        </div>
    )
}

export default Home