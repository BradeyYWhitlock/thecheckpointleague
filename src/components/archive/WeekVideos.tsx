import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { getIsMobile } from '../../state/selectors/app';
import './styles/archive.scss';

interface HeaderProps {
    videos: any[]
}

const Header = (props: HeaderProps): ReactElement => {
    const isMobile = useSelector(getIsMobile)

    return (
        <div className='weekVideos'>
            {props.videos.map(matchup =>
                <div className='matchupSection'>
                    <div className='matchup'>{matchup.matchup}</div>
                    <iframe width={isMobile ? "360" : "1120"} height={isMobile ? "200" : "630"} src={matchup.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            )}
        </div>
    )
}

export default Header