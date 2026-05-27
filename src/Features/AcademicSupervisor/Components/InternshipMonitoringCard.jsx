import React from 'react'
import '../STYLES/InternshipMonitoringCard.css'
import { Building2, Calendar, MoveRight } from 'lucide-react'



export default function InternshipMonitoringCard({studentName, companyName, internshipStartDate, internshipEndDate, internshipDuration, progress}) {
  return (
    <div className="internshipMonitoringCardMain">
        <div className="left">
            <p className="studentName">{studentName}</p>
            <p className="companyName">
                <span className='dateRange'>
                    <span>
                        <Building2 className='icons' size={16}/>
                    </span>
                <span>{companyName}</span>
                </span>
                </p>
            <p className="duration">
              <span className="dateRange">
                <span>
                    <Calendar className="icons" size={16}/>
                </span>
                <span>{internshipStartDate}</span>
                <MoveRight className="dateArrow" size={16} />
                <span>{internshipEndDate}</span>
              </span>
              <span className="durationMonths">{`(${internshipDuration} months)`}</span>
            </p>

        </div>
        <div className="cardRight">{`${progress}% Complete`}</div>
    </div>
  )
}