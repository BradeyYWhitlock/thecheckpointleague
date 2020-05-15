import React, { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsMobile } from '../../state/selectors/app';
import './styles/playoffs.scss'

import Matchup from './components/Matchup';

import Level_3_2 from '../../assets/images/level5.png'
import Level_3_3 from '../../assets/images/level6.png'
import Level_3_5 from '../../assets/images/level1.png'
import Level_3_6 from '../../assets/images/level7.png'
import Level_3_8 from '../../assets/images/level2.png'
import Level_3_9 from '../../assets/images/level8.png'
import Level_3_10 from '../../assets/images/level10.png'

import VSFlag from '../../assets/images/vsFlag.png'
import Reward from '../../assets/images/reward.png'

const matchups = [
    { round: '1', match: '1', player1: 'hcjustin', player2: 'dangheesling', levels: [Level_3_6, Level_3_2, Level_3_3], bans: [Level_3_5, Level_3_8] },
    { round: '1', match: '2', player1: 'mathasgames', player2: 'jaaski', levels: [Level_3_6, Level_3_8, Level_3_10], bans: [Level_3_2, Level_3_9] },
    { round: '2', match: '1', player1: '', player2: '', levels: [], bans: [] },
    { round: '2', match: '2', player1: '', player2: '', levels: [], bans: [] },
    { round: 'finalround', match: '', player1: '', player2: '', levels: [], bans: [] },
]

const Playoffs = (): ReactElement => {
    const isMobile = useSelector(getIsMobile)

    const [round, setRound] = useState(1)
    const [matchup, setMatchup] = useState(-1)


    return (
        <>
            {matchup !== -1 ? <div>
                <Matchup matchup={matchups[matchup]} setMatchup={setMatchup} />
            </div> :
                <div className='playoffs'>
                    {isMobile && <div onClick={() => (round < 4) && setRound(round + 1)} className='nextRound'>Next</div>}
                    {isMobile && <div onClick={() => (round > 1) && setRound(round - 1)} className='previousRound'>Previous</div>}
                    {((isMobile && round === 1) || !isMobile) && <div className='round roundOne'>
                        <div className='roundHeader'>
                            <div className='roundName'>Round 1</div>
                            <div className='bestOf'>Best of 3</div>
                        </div>
                        <div onClick={() => setMatchup(0)} className='playoffsMatchup'>
                            <div className='playoffsPlayerCard'>
                                <div className='ranking'>3</div>
                                <div>HCJUSTIN</div>
                            </div>
                            <img style={{ padding: '20px 0px' }} src={VSFlag} />
                            <div className='playoffsPlayerCard'>
                                <div className='ranking'>6</div>
                                <div>Dangheesling</div>
                            </div>
                        </div>
                        <div onClick={() => setMatchup(1)} className='playoffsMatchup'>
                            <div className='playoffsPlayerCard'>
                                <div className='ranking'>4</div>
                                <div>mathasgames</div>
                            </div>
                            <img style={{ padding: '20px 0px' }} src={VSFlag} />
                            <div className='playoffsPlayerCard'>
                                <div className='ranking'>5</div>
                                <div>jaaski</div>
                            </div>
                        </div>
                    </div>}
                    {((isMobile && round === 2) || !isMobile) && <div className='round roundTwo'>
                        <div className='roundHeader'>
                            <div className='roundName'>Round 2</div>
                            <div className='bestOf'>Best of 3</div>
                        </div>
                        <div onClick={() => setMatchup(2)} className='playoffsMatchup'>
                            <div className='playoffsPlayerCard rankingSeed'>
                                <div>lowest remaining seed</div>
                            </div>
                            <img style={{ padding: '20px 0px' }} src={VSFlag} />
                            <div className='playoffsPlayerCard'>
                                <div className='ranking'>1</div>
                                <div>baertaffy</div>
                            </div>
                        </div>
                        <div onClick={() => setMatchup(3)} className='playoffsMatchup'>
                            <div className='playoffsPlayerCard'>
                                <div className='ranking'>2</div>
                                <div>northernlion</div>
                            </div>
                            <img style={{ padding: '20px 0px' }} src={VSFlag} />
                            <div className='playoffsPlayerCard rankingSeed'>
                                <div>highest remaining seed</div>
                            </div>
                        </div>
                    </div>}
                    {((isMobile && round === 3) || !isMobile) && <div className='round roundThree'>
                        <div className='roundHeader'>
                            <div className='roundName'>Final Round</div>
                            <div className='bestOf'>Best of 5</div>
                        </div>
                        <div onClick={() => setMatchup(4)} className='playoffsMatchup lastRound'>
                            <div className='playoffsPlayerCard rankingSeed'>
                                <div>Winner from round 2</div>
                            </div>
                            <img style={{ padding: '20px 0px' }} src={VSFlag} />
                            <div className='playoffsPlayerCard rankingSeed'>
                                <div>Winner from round 2</div>
                            </div>
                        </div>
                    </div>}
                    {((isMobile && round === 4) || !isMobile) &&
                        <div className='round roundThree'>
                            <img className='rewardTrophy' src={Reward} />
                            <div className='champion'>Champion</div>
                            <div className='playoffsPlayerCard rankingSeed'>Overall Winner</div>
                        </div>}
                </div>}
        </>
    )
}

export default Playoffs