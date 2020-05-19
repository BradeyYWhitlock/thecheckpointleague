import React, { ReactElement } from 'react';
import './styles/faq.scss'

const Faq = (): ReactElement => {

    const faqItems = [
        { question: 'What is TCL?', answer: <div>TCL is an acronym for The Checkpoint League.</div> },
        { question: 'When is TCL?', answer: <div>during the season TCL is every week on Friday starting with the pre-show at 1:30 CST.</div> },
        { question: 'Who are the casters?', answer: <div>Apollo is the main caster with additional players potentially coming on to cast as their games wrap up.</div> },
        { question: 'How do you win?', answer: <div>First player to either beat the map or make it the furthest in 1 hour.</div> },
        { question: 'What is a ban?', answer: <div>A ban in the TCL playoffs means the level is not able to be selected to play. Each player gets one ban per matchup.</div> },
        { question: 'Who gets to pick the levels?', answer: <div><div>The player with the higher seed gets to pick the majority of levels. Player with the lower seed gets one less pick.</div><div>Best of 3 = higher seed picks 2 levels, levels 1 and 3</div><div>Best of 5 = higher seed picks 3 levels, levels 1, 3, and 5</div></div> },
        { question: 'If someone wins a majority of the maps do the competitors play the rest?', answer: <div>No, after a win is secured the remaining maps are not played.</div> },
        { question: 'Why do two players not have to play week one?', answer: <div>The top two players from the regular season get a bye and skip play in week one.</div> },
        { question: 'Will there be a season 2?', answer: <div>Maybe.</div> },
    ]

    return (
        <div className='faq'>
            <div className='faqCards'>
                {faqItems.map(faq => (
                    <div className='faqItem'>
                        <div className='faqQuestion'>{faq.question}</div>
                        <div className='faqAnswer'>{faq.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq