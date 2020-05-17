import React, { ReactElement } from 'react';
import './styles/faq.scss'

const Faq = (): ReactElement => {

    const faqItems = [
        { question: 'What is TCL?', answer: 'TCL is an acronym for The Checkpoint League.' },
        { question: 'When is TCL?', answer: 'TCL is every week on Friday during the season starting with the pre-show at 1:30 CST.' },
    ]

    return (
        <div className='faq'>
            {faqItems.map(faq => (
                <div className='faqItem'>
                    <div className='faqQuestion'>{faq.question}</div>
                    <div className='faqAnswer'>{faq.answer}</div>
                </div>
            ))}
        </div>
    )
}

export default Faq