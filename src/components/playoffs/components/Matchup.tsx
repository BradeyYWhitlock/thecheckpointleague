import React, { ReactElement } from 'react';

import VSFlag from '../../../assets/images/vsFlag.png'
import '../styles/matchup.scss';

interface Matchup {
    round: string;
    match: string;
    player1: string;
    player2: string;
    levels: any[];
    bans: any[];
    standings: string[];
    winner: string;
}

interface MatchupProps {
    matchup: Matchup;
    setMatchup: Function;
}

const Matchup = (props: MatchupProps): ReactElement => {

    // const isWinner = () => {
    //     props.matchup.player1 === props.matchup.winner ?
    // }


    return (
        <div className='matchupPage'>
            <div onClick={() => props.setMatchup(-1)} className='backToPlayoffs'><i style={{ marginRight: '10px' }} className="fas fa-chevron-left"></i> Back To Playoffs</div>
            {props.matchup.round !== 'finalround' ? <div className='roundAndMatch'>Round {props.matchup.round} Match {props.matchup.match}</div> : <div className='roundAndMatch'>Final Round</div>}
            {props.matchup.player1 !== '' ? <><div className='playerVsPlayer'>
                <div className={`matchupPlayerCard`}>{props.matchup.player1}</div>
                <img style={{ padding: '20px 0px' }} src={VSFlag} />
                <div className='matchupPlayerCard'>{props.matchup.player2}</div>
            </div>
                <div className='mapsForMatchup'>
                    {props.matchup.levels.map((level, index) => (
                        <div className='imageAndLevelNumber'>
                            <img className='levelImage' src={level} />
                            {props.matchup.standings[index] !== '' && <div className={`${props.matchup.standings[index] === 'N/A' ? 'notNeeded' : 'victory'}`}>{props.matchup.standings[index]}</div>}
                            <div className='levelNumber'>{index + 1}</div>
                        </div>
                    ))}
                </div>
                <div className='bansHeader'>Bans</div>
                <div className='bansForMatchup'>
                    {props.matchup.bans.map(level => (
                        <div className='banBorder'>
                            <img className='banImage' src={level} />
                        </div>
                    ))}
                </div></> : <div className='comingSoon'>Matchup Coming Soon</div>
            }
        </div >
    )
}

export default Matchup