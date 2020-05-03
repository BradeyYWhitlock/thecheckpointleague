import React, { ReactElement, useState } from 'react';
import './styles/levels.scss'
import Level1 from '../../assets/images/level1.png'
import Level2 from '../../assets/images/level2.png'
import Level3 from '../../assets/images/level3.png'
import Level4 from '../../assets/images/level4.png'
import Level5 from '../../assets/images/level5.png'
import Level6 from '../../assets/images/level6.png'
import Level7 from '../../assets/images/level7.png'
import Level8 from '../../assets/images/level8.png'
import Level9 from '../../assets/images/level9.png'
import Level10 from '../../assets/images/level10.png'
import Flag from '../../assets/images/flag.png'

const Levels = (): ReactElement => {

    const [selectedLevel, setSelectedLevel] = useState('')
    const isMobile = window.innerWidth <= 500

    const levels = [
        {levelImg: Level1, levelCode: '9XR-RRG-CBG', clearCheckVid: 'https://www.youtube.com/embed/MFYCEarj7R0', clearRate: '0.24%', clearTime: '1HRS 47MIN', finished: true},
        {levelImg: Level2, levelCode: 'QBH-MNS-1SF', clearCheckVid: 'https://www.youtube.com/embed/HMt2engYE00', clearRate: '0.22%', clearTime: '0HRS 30MIN', finished: true},
        {levelImg: Level3, levelCode: 'WML-PWV-SMG', clearCheckVid: 'https://www.youtube.com/embed/jKRhXoNup8s', clearRate: '0.47%', clearTime: '0HRS 46MIN', finished: true},
        {levelImg: Level4, levelCode: '415-D31-40H', clearCheckVid: 'https://www.youtube.com/embed/_whnkebmKt8', clearRate: '0.33%', clearTime: '4HRS 21MIN', finished: true},
        {levelImg: Level5, levelCode: 'H77-Y7M-RWF', clearCheckVid: 'https://www.youtube.com/embed/mKej6_PGEME', clearRate: '0.12%', clearTime: '11HRS 34MIN', finished: true},
        {levelImg: Level6, levelCode: 'CHS-90B-R1G', clearCheckVid: 'https://www.youtube.com/embed/M28UrGGxVi0', clearRate: '0.13%', clearTime: '1HRS 55MIN', finished: true},
        {levelImg: Level7, levelCode: 'MWJ-17B-7MF', clearCheckVid: 'https://www.youtube.com/embed/M0PsXb0YvGA', clearRate: '0.40%', clearTime: '2HRS 47MIN', finished: true},
        {levelImg: Level8, levelCode: 'XHQ-4TB-NGG', clearCheckVid: 'https://www.youtube.com/embed/7Wuq1YRWIQ8', clearRate: '0.19%', clearTime: '7HRS 30MIN', finished: true},
        {levelImg: Level9, levelCode: '9SM-B1J-LFF', clearCheckVid: 'https://www.youtube.com/embed/b_NoliJrQac', clearRate: '0.13%', clearTime: '3HRS 50MIN', finished: true},
        {levelImg: Level10, levelCode: '2DC-L45-KVG', clearCheckVid:'', clearRate: '0.28%', clearTime: '3HRS 20MIN', finished: false}
    ]

    var currentLevel = levels.find(it => it.levelCode === selectedLevel)

    //onClick={() => setSelectedLevel(it.levelCode)}

    return (
        <div className='levels'>
            {selectedLevel === '' ?
            <div className='allLevels'>
                {levels.map(it => (
                    <div className='levelItemClick' onClick={() => setSelectedLevel(it.levelCode)}>
                        <img className='levelItem' src={it.levelImg}/>
                        <div className={`clearedFlag ${!it.finished && 'notCleared'}`}><img src={Flag}/></div>
                    </div>
                ))}
            </div> :
            <div className='clearCheckVideo'>
                <div className='backToLevels'>
                    <div onClick={() => setSelectedLevel('')} className='backToLevelsButton'>
                        <i style={{marginRight: '10px'}} className="fas fa-chevron-left"></i>
                        Back To Levels
                    </div>
                <div className='levelCodeVideo'>Level Code: {selectedLevel}</div>
                </div>
                {currentLevel.clearCheckVid !== '' && <iframe style={{border: 'none'}} width={isMobile ? "360" : "1120"} height={isMobile ? "200" : "630"} src={currentLevel.clearCheckVid} ></iframe>}
                {currentLevel.clearCheckVid === '' && <div className='tbdVideo'>Video Coming Soon!</div>}
                <div className='levelStats'>
                    <div>Clear Rate: {currentLevel.clearRate}</div>
                    <div>Clear Check Time: {currentLevel.clearTime}</div>
                </div>
            </div>}
        </div>
    )
}

export default Levels