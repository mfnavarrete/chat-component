import React from 'react';
import './Participants.css';

const Participants = ({ participants }) => {
    const limitedParticipants = participants.slice(0, 50); // Limitar a 50 participantes

    return (
        <div className="participants">
            <div className="participants-header">
                <span>Participants ({limitedParticipants.length})</span>
            </div>
            <ul className="participants-list">
                {limitedParticipants.map((participant, index) => (
                    <li key={index} className="participant-item">
                        <div className="participant-avatar-wrapper">
                            <img src={participant.avatar} alt={participant.name} className="participant-avatar" />
                            <span className={`participant-status ${participant.status}`}></span>
                        </div>
                        <div className="participant-name">{participant.name}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Participants;
