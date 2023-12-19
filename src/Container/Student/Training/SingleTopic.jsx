import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleTopic.css';

export default function SingleTopic() {
    const navigate = useNavigate();
    const trainingData = [
               {
            title:'Aptitude',
            link : '/training/aptitude'
        },
        {
            title:'Reasoning',
            link : '/training/reasoning'
        },
        {
            title:'Mathematical Analysis',
            link : '/training/mathematical_analysis'
        },
        {
            title:'Problem Solving',
            link : '/training/problem_solving'
        },
        {
            title:'Listening Skills',
            link : '/training/lsitening_skills'
        },
        {
            title:'Attention Test',
            link : '/training/problem_solving'
        },

    ];

    return (
        trainingData.map((data, id) => {
            return (
                <div className="mainTopic" onClick={() => navigate(data.link)}>
                    
                   <span>
                     {data.title}
                    </span>
                    
                </div>
            );
        })
    );
}
