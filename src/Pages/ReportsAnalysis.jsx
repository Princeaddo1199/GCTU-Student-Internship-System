import React, { useState } from 'react';
import { 
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
    LineChart, Line, PieChart, Pie, Cell 
} from 'recharts';
import { BarChart3, TrendingUp, Users } from 'lucide-react';
import '../STYLES/ReportsAnalysis.css';
import reportsData from '../Data/reportsData.json';
import studentTable from '../Data/studentTable.json';

export default function ReportsAnalysis() {
    const [activeTab, setActiveTab] = useState('performance');

    // Dynamically generate performance scores for ALL students in the table
    const performanceScoresWithNames = studentTable.map(student => {
        const parts = student.student.split(' ');
        const displayName = `${parts[0]} ${parts[1] ? parts[1][0] + '.' : ''}`;
        
        return {
            name: displayName,
            score: student.progress // Using progress as the performance score (0-100)
        };
    });

    // Dynamically calculate Status Distribution based on risk field
    const onTrackCount = studentTable.filter(s => s.risk === "OK").length;
    const atRiskCount = studentTable.filter(s => s.risk === "At Risk").length;
    
    const dynamicStatusDistribution = [
        { name: "On Track", value: onTrackCount, color: "#3BAF7D" },
        { name: "At Risk", value: atRiskCount, color: "#E73F3F" }
    ];

    // Dynamically calculate Summary Statistics
    const totalStudents = studentTable.length;
    const avgScore = (studentTable.reduce((acc, curr) => acc + curr.progress, 0) / totalStudents).toFixed(1);

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, name }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 1.4;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        // Find color
        const entry = dynamicStatusDistribution.find(d => d.name === name);
        
        if (value === 0) return null;

        return (
            <text 
                x={x} 
                y={y} 
                fill={entry ? entry.color : "#333"} 
                textAnchor={x > cx ? 'start' : 'end'} 
                dominantBaseline="central"
                fontSize="14"
            >
                {`${name}: ${value}`}
            </text>
        );
    };

    return (
        <div className="reports-analysis-container">
            <div className="reports-header">
                <h1>Reports & Analytics</h1>
                <p>Internship performance reports and monitoring statistics</p>
            </div>
            
            <div className="reports-tabs">
                <button 
                    className={activeTab === 'performance' ? 'active' : ''} 
                    onClick={() => setActiveTab('performance')}
                >
                    Performance Report
                </button>
                <button 
                    className={activeTab === 'monitoring' ? 'active' : ''} 
                    onClick={() => setActiveTab('monitoring')}
                >
                    Monitoring Summary
                </button>
            </div>

            {activeTab === 'performance' && (
                <div className="reports-content performance-content">
                    <div className="chart-card">
                        <div className="chart-header">
                            <BarChart3 className="chart-icon" size={20} />
                            <h3>Student Performance Scores</h3>
                        </div>
                        <div className="chart-body">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={performanceScoresWithNames} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={10} tick={{ fill: '#64748b', fontSize: 11 }} angle={-45} textAnchor="end" height={60} />
                                    <YAxis axisLine={false} tickLine={false} tickMargin={10} tick={{ fill: '#64748b', fontSize: 12 }} />
                                    <Tooltip cursor={{ fill: '#f1f5f9' }} />
                                    <Bar dataKey="score" fill="#3BAF7D" radius={[4, 4, 0, 0]} maxBarSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="chart-card">
                        <div className="chart-header">
                            <TrendingUp className="chart-icon" size={20} />
                            <h3>Average Progress Trend</h3>
                        </div>
                        <div className="chart-body">
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={reportsData.progressTrend} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                    <XAxis dataKey="week" axisLine={false} tickLine={false} tickMargin={10} tick={{ fill: '#64748b', fontSize: 12 }} />
                                    <YAxis axisLine={false} tickLine={false} tickMargin={10} tick={{ fill: '#64748b', fontSize: 12 }} />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="progress" stroke="#3BAF7D" strokeWidth={2} dot={false} activeDot={{ r: 6, fill: "#3BAF7D" }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'monitoring' && (
                <div className="reports-content monitoring-content">
                    <div className="chart-card">
                        <div className="chart-header">
                            <Users className="chart-icon" size={20} />
                            <h3>Student Status Distribution</h3>
                        </div>
                        <div className="chart-body pie-chart-body">
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={dynamicStatusDistribution}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={0}
                                        outerRadius={100}
                                        dataKey="value"
                                        stroke="none"
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                    >
                                        {dynamicStatusDistribution.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="summary-card">
                        <h3>Summary Statistics</h3>
                        <div className="summary-list">
                            <div className="summary-item">
                                <span>Total Students</span>
                                <span className="summary-value">{totalStudents}</span>
                            </div>
                            <div className="summary-item">
                                <span>Avg. Performance Score</span>
                                <span className="summary-value">{avgScore}%</span>
                            </div>
                            <div className="summary-item">
                                <span>Logbooks Reviewed</span>
                                <span className="summary-value">{reportsData.summaryStatistics.logbooksReviewed}</span>
                            </div>
                            <div className="summary-item">
                                <span>Visits Completed</span>
                                <span className="summary-value">{reportsData.summaryStatistics.visitsCompleted}</span>
                            </div>
                            <div className="summary-item">
                                <span>Evaluations Submitted</span>
                                <span className="summary-value">{reportsData.summaryStatistics.evaluationsSubmitted}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
