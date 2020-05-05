import React, { ReactElement, useState, useEffect } from 'react';
import Competitor from './Competitor';
import Stats from './Stats';
import './styles/standings.scss'

const competitors = [
    {name: 'northernlion', record: '8-1', link:'https://twitter.com/NorthernlionLP'},
    {name: 'baertaffy', record: '7-2', link:'https://twitter.com/BaerTaffy'},
    {name: 'hcjustin', record: '6-3', link:'https://twitter.com/HCJustinn'},
    {name: 'mathasgames', record: '3-6', link:'https://twitter.com/MathasGames'},
    {name: 'jaaski', record: '3-6', link:'https://twitter.com/jaaski_'},
    {name: 'dangheesling', record: '0-9', link:'https://twitter.com/DanGheesling'},
]

const Standings = (): ReactElement => {

    const [selectedStats, setSelectedStats] = useState('northernlion')

    const isMobile = window.innerWidth <= 500

    useEffect(() => {
        isMobile && setSelectedStats('')
    }, [])

    return (
        <div className='standings'>
            {!isMobile ?
            <>
                <div className='tclStandings'>
                    {competitors.map(competitor => {
                        return <Competitor selectedStats={selectedStats} onClick={() => setSelectedStats(competitor.name)}link={competitor.link} record={competitor.record} name={competitor.name}/>
                    })}
                </div>
                <Stats selectedStats={selectedStats}/>
            </> :
            <>
            {selectedStats === '' ?
                <div className='tclStandings'>
                    {competitors.map(competitor => {
                        return <Competitor selectedStats={selectedStats} onClick={() => setSelectedStats(competitor.name)}link={competitor.link} record={competitor.record} name={competitor.name}/>
                    })}
                </div> :
                <>
                    <div onClick={() => setSelectedStats('')}className='backToOverallStats'><i style={{marginRight: '10px'}} className="fas fa-chevron-left"></i>Back To Standings</div>
                    <Stats selectedStats={selectedStats}/>
                </>
            }
            </>
            }
        </div>
    )
}

export default Standings