import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const skillsData = [
  { skill: 'HTML', proficiency: 90 },
  { skill: 'CSS', proficiency: 70 },
  { skill: 'JS', proficiency: 65 },
  { skill: 'React', proficiency: 80 },
  { skill: 'Python', proficiency: 70 },
  { skill: 'C/C++', proficiency: 70 },
  { skill: 'Java', proficiency: 70 },
  { skill: 'SQL', proficiency: 65 },
  { skill: 'Git', proficiency: 60 },
];

export default function TechnicalSkillsChart() {
  return (
    <BarChart
      dataset={skillsData}
      yAxis={[{ scaleType: 'band', dataKey: 'skill' }]}
      series={[{ dataKey: 'proficiency', label: 'Proficiency Level (%)', color: '#fc6735ff' }]}
      layout="horizontal"
      width={600}
      height={450}


    />
  );
}
