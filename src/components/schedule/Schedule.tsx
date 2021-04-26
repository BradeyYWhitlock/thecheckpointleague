import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { getIsMobile, getSeason } from '../../state/selectors/app';
import ScheduleImage from '../../assets/images/tclSchedule.png';
import MobileSchedule1 from '../../assets/images/mobileSchedule1.png';
import MobileSchedule2 from '../../assets/images/mobileSchedule2.png';
import './styles/schedule.scss'

const Schedule = (): ReactElement => {
    const isMobile = useSelector(getIsMobile)
    const season = useSelector(getSeason)

    return (
        <>
        {season !== 1 ? <div className='comingSoon'>COMING SOON</div> :
            isMobile ?
                <div>
                    <div className='scheduleMobile'>
                        <div>SCHEDULE</div>
                        <div>All Times In Central Time (CT)</div>
                    </div>
                    <img src={MobileSchedule1} className='scheduleImage' width={1310} height={730} />
                    <img src={MobileSchedule2} className='scheduleImage' width={1310} height={730} />
                </div>
                :
                <div className='schedule'>
                    <img src={ScheduleImage} className='scheduleImage' width={1310} height={730} />
                </div>
        }
        </>
    )
}

export default Schedule