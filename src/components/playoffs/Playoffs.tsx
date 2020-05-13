import React, { ReactElement, useState } from 'react';
import './styles/playoffs.scss'

import VSFlag from '../../assets/images/vsFlag.png'
import Reward from '../../assets/images/reward.png'


const Playoffs = (): ReactElement => {
    const isMobile = window.innerWidth <= 500

    const [round, setRound] = useState(1)


    return (
        <div className='playoffs'>
            {isMobile && <div onClick={() => (round < 4) && setRound(round + 1)} className='nextRound'>Next</div>}
            {isMobile && <div onClick={() => (round > 1) && setRound(round - 1)} className='previousRound'>Previous</div>}
            {((isMobile && round === 1) || !isMobile) && <div className='round roundOne'>
                <div className='roundHeader'>
                    <div className='roundName'>Round 1</div>
                    <div className='bestOf'>Best of 3</div>
                </div>
                <div className='playoffsMatchup'>
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
                <div className='playoffsMatchup'>
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
                <div className='playoffsMatchup'>
                    <div className='playoffsPlayerCard rankingSeed'>
                        <div>lowest remaining seed</div>
                    </div>
                    <img style={{ padding: '20px 0px' }} src={VSFlag} />
                    <div className='playoffsPlayerCard'>
                        <div className='ranking'>1</div>
                        <div>baertaffy</div>
                    </div>
                </div>
                <div className='playoffsMatchup'>
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
                <div className='playoffsMatchup lastRound'>
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
        </div>
    )
}

export default Playoffs