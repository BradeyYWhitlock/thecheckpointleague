import React, { ReactElement, useEffect, useState } from 'react';
import TCLLogo from '../../assets/images/tclLogo.png'
import moment from 'moment'
import './styles/home.scss'
import {isTclLive} from '../../services/TwitchService'

const Home = (): ReactElement => {
    const isMobile = window.innerWidth <= 500
    const streamDay = moment().day(5).hour(13).minutes(30);
    const now = new Date()
    const [duration, setDuration] = useState(moment.duration(streamDay.diff(now)))
    const [tclLive, setTclLive] = useState(false)

    useEffect(() => {
        isTclLive().then(res => {setTclLive(res)})
        setInterval(() => {
            const now = new Date()
            const streamDay = moment().day(5).hour(13).minutes(30).utcOffset(-6);
            var duration = moment.duration(streamDay.diff(now));
            setDuration(duration)
            isTclLive().then(res => {setTclLive(res)})
        }, 20000)
    }, [])

    return (
        <div className='home'>
            <div className='homeLogo'>
                <img src={TCLLogo} width={515} height={217}/>
            </div>
            {!tclLive ?
            <div className='nextStream'>Next Stream: {duration.days()} Days • {duration.hours()} Hours • {duration.minutes()} Mins</div>
            : <a target='_blank' href='https://www.twitch.tv/dumbdog' className='liveButton'>Currently Live!</a>}
            <iframe className='trailerVideo' width={isMobile ? "360" : "1120"} height={isMobile ? "200" : "630"} src='https://www.youtube.com/embed/CChwLKLT-dA' ></iframe>
        </div>
    )
}

export default Home