import React, { ReactElement, useState } from 'react';
import Select from 'react-select';
import WeekVideos from './WeekVideos';
import {useSelector} from 'react-redux';
import { getSeason } from '../../state/selectors/app';
import './styles/archive.scss'

const weekOptions = [
    { value: 'week1', label: 'Week 1' },
    { value: 'week2', label: 'Week 2' },
    { value: 'week3', label: 'Week 3' },
    { value: 'week4', label: 'Week 4' },
    { value: 'week5', label: 'Week 5' }
  ];

const weekVideos = {
    week1: [
        {matchup: 'DanGheesling vs HCJustin', video: 'https://www.youtube.com/embed/Fasyuwb1DNI'},
        {matchup: 'jaaski vs. Baertaffy', video: 'https://www.youtube.com/embed/-QTrS60F-kQ'},
        {matchup: 'Northernlion vs MathasGames', video: 'https://www.youtube.com/embed/2AMZR-4rlqE'},
    ],
    week2: [
        {matchup: 'MathasGames vs Baertaffy', video: 'https://www.youtube.com/embed/zKOsmtjTiSU'},
        {matchup: 'HCJustin vs. jaaski', video: 'https://www.youtube.com/embed/EAMf3OtzFt0'},
        {matchup: 'DanGheesling vs. Northernlion', video: 'https://www.youtube.com/embed/RRNNYrjlWfU'},
    ],
    week3: [
        {matchup: 'Mathasgames vs DanGheesling', video: 'https://www.youtube.com/embed/bTTYdusnNf0'},
        {matchup: 'Northernlion vs. jaaski', video: 'https://www.youtube.com/embed/oddXr02bsaQ'},
        {matchup: 'Baertaffy vs. HCJustin', video: 'https://www.youtube.com/embed/U24tonsKad4'},
    ],
    week4: [
        {matchup: 'jaaski vs. HCJustin', video: 'https://www.youtube.com/embed/p4bwWwfuomE'},
        {matchup: 'MathasGames vs Northernlion', video: 'https://www.youtube.com/embed/CQto50jS-SM'},
        {matchup: 'Baertaffy vs. DanGheesling', video: 'https://www.youtube.com/embed/ABn6rzDXusM'},
    ],
    week5: [
        {matchup: 'HCJustin vs. DanGheesling', video: 'https://www.youtube.com/embed/NtcP-wuE28Y'},
        {matchup: 'Northernlion vs. Baertaffy', video: 'https://www.youtube.com/embed/xamrLZ_7Dq0'},
        {matchup: 'jaaski vs. Mathasgames', video: 'https://www.youtube.com/embed/K1bb3mj6p5Y'},
    ]
}

const Archive = (): ReactElement => {
    const [week, setWeek] = useState({ value: 'week1', label: 'Week 1' })

    const season = useSelector(getSeason);

    return (
        <>
            {season !== 1 ? <div className='comingSoon'>COMING SOON</div> :
                <>
                    <div className='weekSelectBox'>
                        <Select
                            className='weekSelector'
                            value={week}
                            onChange={selectedOption => setWeek(selectedOption)}
                            options={weekOptions}
                        />
                    </div>
                    <div className='archive'>
                        <WeekVideos videos={weekVideos[week.value]}/>
                    </div>
                </>
            }
        </>
    )
}

export default Archive