import React, { ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsMobile } from '../../state/selectors/app';
import TCLLogo from '../../assets/images/tclLogo.png'
import moment from 'moment'
import './styles/home.scss'
import { isTclLive } from '../../services/TwitchService'

const Home = (): ReactElement => {
    var friday = 5;
    const now = new Date()

    if (now.getDay() >= 5) {
        friday = 5 + 7
        if (now.getDay() === 5 && now.getHours() < 14) {
            friday = 5
        }
    }
    const isMobile = useSelector(getIsMobile)

    const streamDay = moment().day(friday).hour(13).minutes(30);
    const [duration, setDuration] = useState(moment.duration(streamDay.diff(now)))
    const [tclLive, setTclLive] = useState(false)

    useEffect(() => {
        isTclLive().then(res => { setTclLive(res) })
        setInterval(() => {
            const now = new Date()
            const streamDay = moment().day(friday).hour(13).minutes(30).utcOffset(-6);
            var duration = moment.duration(streamDay.diff(now));
            setDuration(duration)
            isTclLive().then(res => { setTclLive(res) })
        }, 20000)
    }, [])

    return (
        <div className='home'>
            <div className='homeLogo'>
                <img src={TCLLogo} width={515} height={217} />
            </div>
            {!tclLive ?
                <div className='nextStream'>Next Stream: {duration.days()} Days • {duration.hours()} Hours • {duration.minutes()} Mins</div>
                : <a target='_blank' href='https://www.twitch.tv/dumbdog' className='liveButton'>Currently Live!</a>}
            <iframe className='trailerVideo' width={isMobile ? "360" : "1120"} height={isMobile ? "200" : "630"} src='https://www.youtube.com/embed/CChwLKLT-dA' ></iframe>
        </div>
    )
}

export default Home