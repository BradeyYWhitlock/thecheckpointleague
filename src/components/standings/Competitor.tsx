import React, { ReactElement } from 'react';
import TCLFlag from '../../assets/images/TCLFlag.png';
import './styles/standings.scss'

interface CompetitorProps {
    name: string;
    record: string;
    link: string;
    onClick: Function;
    selectedStats: string;
    bye: boolean;
}

const Competitor = (props: CompetitorProps): ReactElement => {
    return (
        <div className='competitor' onClick={() => props.onClick()}>
            <img className='competitorFlag' src={TCLFlag}/>
            <div className={`competitorName hvr-bounce-to-right ${props.selectedStats === props.name && 'competitorSelected'}`}>
                {props.name}
            </div>
            <div className='competitorRecord'>
                {props.record}{props.bye && <span className='bye'>X</span>}
            </div>
        </div>
    )
}

export default Competitor