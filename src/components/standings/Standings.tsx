import React, { ReactElement, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getIsMobile, getSeason } from '../../state/selectors/app';

import { NavLink } from 'react-router-dom'
import Competitor from './Competitor';
import Stats from './Stats';
import './styles/standings.scss'

const competitors = [
    { name: 'baertaffy', record: '8-2', link: 'https://twitter.com/BaerTaffy', bye: true },
    { name: 'northernlion', record: '8-2', link: 'https://twitter.com/NorthernlionLP', bye: true },
    { name: 'hcjustin', record: '6-4', link: 'https://twitter.com/HCJustinn', bye: false },
    { name: 'mathasgames', record: '4-6', link: 'https://twitter.com/MathasGames', bye: false },
    { name: 'jaaski', record: '4-6', link: 'https://twitter.com/jaaski_', bye: false },
    { name: 'dangheesling', record: '0-10', link: 'https://twitter.com/DanGheesling', bye: false },
]

const Standings = (): ReactElement => {

    const [selectedStats, setSelectedStats] = useState('baertaffy')

    const isMobile = useSelector(getIsMobile)
    const season = useSelector(getSeason)

    useEffect(() => {
        isMobile && setSelectedStats('')
    }, [])

    return (
        <>
        {season !== 1 ? <div className='comingSoon'>COMING SOON</div> :
            <>
            {!isMobile && <div className='playoffButton'>
                <NavLink to='playoffs' className='liveButton'>See Playoffs here</NavLink>
            </div>}
            <div className='standings'>
                {!isMobile ?
                    <>
                        <div className='tclStandings'>
                            <div className='playoffRanks'><div>X = Clinch Bye</div></div>
                            {competitors.map(competitor => {
                                return <Competitor selectedStats={selectedStats} onClick={() => setSelectedStats(competitor.name)} bye={competitor.bye} link={competitor.link} record={competitor.record} name={competitor.name} />
                            })}
                        </div>
                        <Stats selectedStats={selectedStats} />
                    </> :
                    <>
                        {selectedStats === '' ?
                            <div className='tclStandings'>
                                <div className='playoffRanks'><div>X = Clinch Bye</div></div>
                                {competitors.map(competitor => {
                                    return <Competitor selectedStats={selectedStats} bye={competitor.bye} onClick={() => setSelectedStats(competitor.name)} link={competitor.link} record={competitor.record} name={competitor.name} />
                                })}
                            </div> :
                            <>
                                <div onClick={() => setSelectedStats('')} className='backToOverallStats'><i style={{ marginRight: '10px' }} className="fas fa-chevron-left"></i>Back To Standings</div>
                                <Stats selectedStats={selectedStats} />
                            </>
                        }
                    </>
                }
            </div>
            {(!isMobile || (isMobile && selectedStats !== '')) && <div style={{position: 'absolute', right: 0, bottom: 0, margin: '10px', fontSize: '20px'}}>* Full stats not shown</div>}
            </>}
        </>
    )
}

export default Standings