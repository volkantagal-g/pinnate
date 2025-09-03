import React from 'react';
import styles from './InfoBadge.module.scss';

export interface InfoBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const InfoBadge: React.FC<InfoBadgeProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`${styles.infoBadge} ${className}`}>
      {children}
    </div>
  );
};
