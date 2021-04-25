import React, { ReactElement, useState } from 'react';
import DPM1 from '../../assets/images/dpm1.png'
import DPM2 from '../../assets/images/dpm2.png'
import DPM3 from '../../assets/images/dpm3.png'
import TIS1 from '../../assets/images/1stCheckpoint.png'
import TIS2 from '../../assets/images/2ndCheckpoint.png'
import './styles/standings.scss'

interface StatsProps {
    selectedStats: any
}

const totalStats = {
    baertaffy: {totalDeaths: '1481', dpm1: '3.26', dpm2: '2.876', dpm3: '3.179', tis1: '03:43:30', tis2: '02:32:37', tis3: '01:38:28', totalTime: '07:54:44'},
    northernlion: {totalDeaths: '1526', dpm1: '2.984', dpm2: '2.832', dpm3: '3.637', tis1: '03:20:03', tis2: '03:34:42', tis3: '01:28:16', totalTime: '08:23:01'},
    mathasgames: {totalDeaths: '1688', dpm1: '3.279', dpm2: '3.085', dpm3: '3.434', tis1: '05:17:11', tis2: '03:06:44', tis3: '00:20:58', totalTime: '08:44:53'},
    hcjustin: {totalDeaths: '1730', dpm1: '3.465', dpm2: '2.495', dpm3: '4.319', tis1: '04:37:20', tis2: '03:34:37', tis3: '00:31:43', totalTime: '08:43:40'},
    jaaski: {totalDeaths: '1829', dpm1: '3.361', dpm2: '3.325', dpm3: '6.63', tis1: '06:19:23', tis2: '02:34:35', tis3: '00:06:02', totalTime: '09:00:00'},
    dangheesling: {totalDeaths: '1905', dpm1: '3.515', dpm2: '3.696', dpm3: 'N/A', tis1: '08:21:51', tis2: '00:38:09', tis3: '00:00:00', totalTime: '09:00:00'},
}

const firstStats = {totalDeaths: 'baertaffy', dpm1: 'northernlion', dpm2: 'northernlion', dpm3: 'baertaffy', totalTime: 'baertaffy'}
const secondStats = {totalDeaths: 'northernlion', dpm1: 'baertaffy', dpm2: 'baertaffy', dpm3: 'mathasgames', totalTime: 'northernlion'}
const thirdStats = {totalDeaths: 'mathasgames', dpm1: 'mathasgames', dpm2: 'hcjustin', dpm3: 'northernlion', totalTime: 'hcjustin'}

const Stats = (props: StatsProps): ReactElement => {

    return (
        <div className='standingsStats'>
                <div className='totalStatsHeader'>{props.selectedStats} Overall Stats*</div>
                <div className='statItem'>
                    <div className='statLabel'>Total Deaths <i style={{color: 'white'}} className="fas fa-skull skull"></i></div>
                    <div className='statValue'>{totalStats[props.selectedStats].totalDeaths || ''}</div>
                    {/* {firstStats.totalDeaths === props.selectedStats && <div className='firstBadge'>1</div>}
                    {secondStats.totalDeaths === props.selectedStats && <div className='secondBadge'>2</div>}
                    {thirdStats.totalDeaths === props.selectedStats && <div className='thirdBadge'>3</div>} */}
                </div>
                <div className='statItem'>
                    <div className='statLabel'>DPM <img src={DPM1} height={40}/></div>
                    <div className='statValue'>{totalStats[props.selectedStats].dpm1 || ''}</div>
                    {/* {firstStats.dpm1 === props.selectedStats && <div className='firstBadge'>1</div>}
                    {secondStats.dpm1 === props.selectedStats && <div className='secondBadge'>2</div>}
                    {thirdStats.dpm1 === props.selectedStats && <div className='thirdBadge'>3</div>} */}
                </div>
                <div className='statItem'>
                    <div className='statLabel'>DPM <img src={DPM2} height={40}/></div>
                    <div className='statValue'>{totalStats[props.selectedStats].dpm2 || ''}</div>
                    {/* {firstStats.dpm2 === props.selectedStats && <div className='firstBadge'>1</div>}
                    {secondStats.dpm2 === props.selectedStats && <div className='secondBadge'>2</div>}
                    {thirdStats.dpm2 === props.selectedStats && <div className='thirdBadge'>3</div>} */}
                </div>
                <div className='statItem'>
                    <div className='statLabel'>DPM <img src={DPM3} height={40}/></div>
                    <div className='statValue'>{totalStats[props.selectedStats].dpm3 || ''}</div>
                    {/* {firstStats.dpm3 === props.selectedStats && <div className='firstBadge'>1</div>}
                    {secondStats.dpm3 === props.selectedStats && <div className='secondBadge'>2</div>}
                    {thirdStats.dpm3 === props.selectedStats && <div className='thirdBadge'>3</div>} */}
                </div>
                <div className='horizontalRuleStats'/>
                <div className='statItem'>
                    <div className='statLabel'>Time in section <img src={TIS1} height={40}/></div>
                    <div className='statValue'>{totalStats[props.selectedStats].tis1 || ''}</div>
                </div>
                <div className='statItem'>
                    <div className='statLabel'>Time in section <img src={TIS2} height={40}/></div>
                    <div className='statValue'>{totalStats[props.selectedStats].tis2 || ''}</div>
                </div>
                <div className='statItem'>
                    <div className='statLabel'>Time in section <img src={TIS2} height={40}/></div>
                    <div className='statValue'>{totalStats[props.selectedStats].tis3 || ''}</div>
                </div>
                <div className='statItem'>
                    <div className='statLabel'>Total Time <i style={{color: 'white'}} className="fas fa-stopwatch"></i></div>
                    <div className='statValue'>{totalStats[props.selectedStats].totalTime || ''}</div>
                    {/* {firstStats.totalTime === props.selectedStats && <div className='firstBadge'>1</div>}
                    {secondStats.totalTime === props.selectedStats && <div className='secondBadge'>2</div>}
                    {thirdStats.totalTime === props.selectedStats && <div className='thirdBadge'>3</div>} */}
                </div>
            </div>
    )
}

export default Stats