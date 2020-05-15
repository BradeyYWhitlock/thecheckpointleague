import React, { ReactElement, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as AppActions from '../../state/actions/app';
import { getIsMobile } from '../../state/selectors/app';
import '../styles/main.scss'
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';

const Header = (): ReactElement => {
    const dispatch = useDispatch()
    const isMobile = useSelector(getIsMobile)

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
    }, [])

    const navClicked = (page: string) => {
        setSideMenu(false)
        setPage(page)
    }

    return (
        <div className='header'>
            <div className='slideOverButton' onClick={() => setSideMenu(true)}><i className="fas fa-bars"></i></div>
            <Drawer open={sideMenu} onClose={() => setSideMenu(false)}>
                <div className='sideMenu'>
                    <div className='seasonItem'>Season 1</div>
                    {isMobile &&
                        <>
                            <NavLink onClick={() => navClicked('home')} className={`mobileNavItem ${page === 'home' && 'mobileSelected'}`} to='/'>HOME</NavLink>
                            <NavLink onClick={() => navClicked('schedule')} className={`mobileNavItem ${page === 'schedule' && 'mobileSelected'}`} to='/schedule'>SCHEDULE</NavLink>
                            <NavLink onClick={() => navClicked('archive')} className={`mobileNavItem ${page === 'archive' && 'mobileSelected'}`} to='/archive'>ARCHIVE</NavLink>
                            <NavLink onClick={() => navClicked('standings')} className={`mobileNavItem ${page === 'standings' && 'mobileSelected'}`} to='/standings'>STANDINGS</NavLink>
                            <NavLink onClick={() => navClicked('levels')} className={`mobileNavItem ${page === 'levels' && 'mobileSelected'}`} to='/levels'>Levels</NavLink>
                            <NavLink onClick={() => navClicked('playoffs')} className={`mobileNavItem ${page === 'playoffs' && 'mobileSelected'}`} to='/playoffs'>Playoffs</NavLink>
                        </>
                    }
                </div>
                <a target="_blank" href='https://github.com/BradeyYWhitlock/thecheckpointleague' className='githubLink'>
                    <i className="fab fa-github"></i>
                </a>
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