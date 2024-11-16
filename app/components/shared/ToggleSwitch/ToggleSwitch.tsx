import React, { useState } from 'react';
import styles from './ToggleSwitch.module.scss';

interface ToggleSwitchProps {
    options: [string, string];
    onToggle: (selected: string) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ options, onToggle }) => {
    const [selected, setSelected] = useState(options[0]);

    const handleToggle = (option: string) => {
        setSelected(option);
        onToggle(option);
    };

    return (
        <div className={styles.toggleContainer}>
            <div
                className={styles.activeIndicator}
                style={{ left: selected === options[0] ? '5px' : 'calc(50% + 2.5px)' }}
            />
            {options.map((option) => (
                <button
                    key={option}
                    className={`${styles.toggleButton} ${selected === option ? styles.active : ''}`}
                    onClick={() => handleToggle(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default ToggleSwitch;
