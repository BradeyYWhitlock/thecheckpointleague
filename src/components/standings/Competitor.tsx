import React, { ReactElement } from 'react';
import TCLFlag from '../../assets/images/TCLFlag.png';
import './styles/standings.scss'

interface CompetitorProps {
    name: string;
    record: string;
    link: string;
}

const Competitor = (props: CompetitorProps): ReactElement => {
    return (
        <div className='competitor'>
            <img className='competitorFlag' src={TCLFlag}/>
            <a target="_blank" href={props.link} className='competitorName hvr-bounce-to-right'>{props.name}</a>
            <div className='competitorRecord'>{props.record}</div>
        </div>
    )
}

export default Competitor