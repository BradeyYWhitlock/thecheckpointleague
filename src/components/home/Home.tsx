import React, { ReactElement } from 'react';
import TCLLogo from '../../assets/images/tclLogo.png'
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
            <iframe className='trailerVideo' width={isMobile ? "360" : "1120"} height={isMobile ? "200" : "630"} src='https://www.youtube.com/embed/CChwLKLT-dA' ></iframe>
        </div>
    )
}

export default Home