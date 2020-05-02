import React, { ReactElement } from 'react';
import TCLLogo from '../../assets/images/tclLogo.png'
import Competitor from './Competitor';
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

    const isMobile = window.innerWidth <= 500

    return (
        <div className='standings'>
            {!isMobile && <div className='tclLogoStandings'>
                <img src={TCLLogo}/>
            </div>}
            <div className='tclStandings'>
                {competitors.map(competitor => {
                    return <Competitor link={competitor.link} record={competitor.record} name={competitor.name}/>
                })}
            </div>
        </div>
    )
}

export default Standings