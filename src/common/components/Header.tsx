import React, { ReactElement, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as AppActions from '../../state/actions/app';
import { getIsMobile, getSeason } from '../../state/selectors/app';
import Select from 'react-select';
import Konami from 'konami'
import '../styles/main.scss'
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
var NewTech = require('../../assets/sounds/newTech.mp3')

import {seasonStyle} from '../util';

const Header = (): ReactElement => {
    const dispatch = useDispatch()
    const isMobile = useSelector(getIsMobile)
    const season = useSelector(getSeason)
    var NewTechAudio: HTMLAudioElement = null

    var location = window.location.pathname.substring(1)
    location = location === '' ? 'home' : location
    const [page, setPage] = useState(location)
    const [sideMenu, setSideMenu] = useState(false)

    const windowResized = () => {
        var isMobileCheck = window.innerWidth <= 500
        dispatch(AppActions.setIsMobile(isMobileCheck))
    }

    useEffect(() => {
        window.addEventListener("resize", windowResized);
        NewTechAudio = new Audio(NewTech);
    }, [])

    const easterEgg = new Konami(() => {
        NewTechAudio.play()
    })

    const navClicked = (page: string) => {
        setSideMenu(false)
        setPage(page)
    }

    const selectSeason = (season: number): any => {
        dispatch(AppActions.setSeason(season))
    }

    return (
        <div style={isMobile ? {backgroundColor: '#0B0D19'} : seasonStyle(season)} className='header'>
            <div className='slideOverButton' onClick={() => setSideMenu(true)}><i className="fas fa-bars"></i></div>
            {!isMobile && <NavLink onClick={() => navClicked('faq')} className={`faqHeaderButton ${page === 'faq' && 'selected'}`} to='/faq'><i className="far fa-question-circle"></i></NavLink>}
            <Drawer open={sideMenu} onClose={() => setSideMenu(false)}>
                <div style={seasonStyle(season)} className='sideMenu'>
                    <Select
                        className='seasonSelect'
                        value={{ value: season, label: `Season ${season}` }}
                        onChange={selectedOption => selectSeason(selectedOption.value)}
                        options={[{ value: 1, label: 'Season 1' }, { value: 2, label: 'Season 2' }]}
                    />
                    {/* <div onClick={() => selectSeason(1)} className='seasonItem'>Season 1</div>
                    <div onClick={() => selectSeason(2)} className='seasonItem'>Season 2</div> */}
                    {isMobile &&
                        <>
                            <NavLink onClick={() => navClicked('home')} className={`mobileNavItem ${page === 'home' && 'mobileSelected'}`} to='/'>HOME</NavLink>
                            <NavLink onClick={() => navClicked('schedule')} className={`mobileNavItem ${page === 'schedule' && 'mobileSelected'}`} to='/schedule'>SCHEDULE</NavLink>
                            <NavLink onClick={() => navClicked('archive')} className={`mobileNavItem ${page === 'archive' && 'mobileSelected'}`} to='/archive'>ARCHIVE</NavLink>
                            <NavLink onClick={() => navClicked('standings')} className={`mobileNavItem ${page === 'standings' && 'mobileSelected'}`} to='/standings'>STANDINGS</NavLink>
                            <NavLink onClick={() => navClicked('levels')} className={`mobileNavItem ${page === 'levels' && 'mobileSelected'}`} to='/levels'>Levels</NavLink>
                            <NavLink onClick={() => navClicked('playoffs')} className={`mobileNavItem ${page === 'playoffs' && 'mobileSelected'}`} to='/playoffs'>Playoffs</NavLink>
                            <NavLink onClick={() => navClicked('faq')} className={`mobileNavItem ${page === 'faq' && 'mobileSelected'}`} to='/faq'>Faq</NavLink>
                        </>
                    }
                </div>
                <div style={seasonStyle(season)} className='contactCreator'>
                    <div>Contact creator</div>
                    <a style={seasonStyle(season)} className='githubLink' target="_blank" href='https://twitter.com/Bradeyyw'>
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
                <div style={seasonStyle(season)} className='sourceCode'>
                    <div>Source Code at</div>
                    <a style={seasonStyle(season)} target="_blank" href='https://github.com/BradeyYWhitlock/thecheckpointleague' className='githubLink'>
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </Drawer>
            {!isMobile &&
                <>
                    <NavLink onClick={() => navClicked('home')} className={`navItem ${page === 'home' && 'selected'}`} to='/'>HOME</NavLink>
                    <NavLink onClick={() => navClicked('schedule')} className={`navItem ${page === 'schedule' && 'selected'}`} to='/schedule'>SCHEDULE</NavLink>
                    <NavLink onClick={() => navClicked('archive')} className={`navItem ${page === 'archive' && 'selected'}`} to='/archive'>ARCHIVE</NavLink>
                    <NavLink onClick={() => navClicked('standings')} className={`navItem ${page === 'standings' && 'selected'}`} to='/standings'>STANDINGS</NavLink>
                    <NavLink onClick={() => navClicked('levels')} className={`navItem ${page === 'levels' && 'selected'}`} to='/levels'>Levels</NavLink>
                </>}
        </div>
    )
}

export default Header