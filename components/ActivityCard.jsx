import React from 'react';
import styles from './ActivityCard.module.css';

const ActivityCard = ({ activity }) => {
  return (
    <div className={styles.card}>
      {/* ...existing card content... */}
      <div className={styles.participantsSection}>
        <h4 className={styles.participantsTitle}>Participants</h4>
        {activity.participants && activity.participants.length > 0 ? (
          <ul className={styles.participantsList}>
            {activity.participants.map((p, idx) => (
              <li key={idx} className={styles.participantItem}>
                {p}
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.noParticipants}>No participants yet.</div>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;