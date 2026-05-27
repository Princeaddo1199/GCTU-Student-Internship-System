import React from 'react'
import "../STYLES/ScoreCard.css"
import LinearProgress from '@mui/material/LinearProgress'

export default function ScoreCard({ student }) {
  if (!student) return null;

  const baseRating = Math.floor(student.rating || 4);
  const skills = [
    { name: "Technical Skills", rating: Math.min(5, baseRating + (student.id % 2)) },
    { name: "Communication", rating: Math.min(5, baseRating + (student.id % 3 === 0 ? 1 : 0)) },
    { name: "Professionalism", rating: Math.max(1, baseRating - (student.id % 2)) },
    { name: "Problem Solving", rating: Math.max(1, baseRating - (student.id % 3 === 0 ? 1 : 0)) },
    { name: "Teamwork", rating: Math.min(5, baseRating + 1 > 5 ? 0 : 1) },
  ];

  return (
    <div className="scoreCardMain">
        <div className="scoreCardHeader">
            <div className="studentName">{student.student}</div>
            <div className="overallRating">{student.rating ? student.rating.toFixed(1) : "0.0"}/5.0</div>
        </div>
        <div className="skillsContainer">
            {skills.map((skill, index) => (
                <div className="skillRow" key={index}>
                    <div className="skillName">{skill.name}</div>
                    <div className="skillRatingBar">
                        <LinearProgress 
                            variant="determinate" 
                            value={(skill.rating / 5) * 100} 
                            sx={{
                                height: 8,
                                borderRadius: 5,
                                backgroundColor: '#e0e5eb',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#11325f'
                                }
                            }}
                        />
                    </div>
                    <div className="ratingNumber">{skill.rating}</div>
                </div>
            ))}
        </div>
    </div>
  )
}
