import React, { ReactElement } from 'react';
import TCLFlag from '../../assets/images/TCLFlag.png';
import './styles/standings.scss'

interface CompetitorProps {
    name: string;
    record: string;
    link: string;
    onClick: Function;
    selectedStats: string;
}

const Competitor = (props: CompetitorProps): ReactElement => {

    console.log(props.name);
    console.log(props.selectedStats);

    return (
        <div className='competitor' onClick={() => props.onClick()}>
            <img className='competitorFlag' src={TCLFlag}/>
            <div className={`competitorName hvr-bounce-to-right ${props.selectedStats === props.name && 'competitorSelected'}`}>{props.name}</div>
            <div className='competitorRecord'>{props.record}</div>
        </div>
    )
}

export default Competitor