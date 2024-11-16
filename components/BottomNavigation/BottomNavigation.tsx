import React from 'react';
import styles from './BottomNavigation.module.scss';
import { Link } from '@components/telegram/Link';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { IconKind } from '@components/Icon/Icon';
import Icon from '@components/Icon';

type Tab = {
    name: string;
    path: string;
    icon: IconKind;
};

const tabs: Tab[] = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Sparks', path: '/sparks', icon: 'sparks' },
    { name: 'Pools', path: '/pools', icon: 'pools' },
    { name: 'Rewards', path: '/rewards', icon: 'pulse' },
    { name: 'Profile', path: '/profile', icon: 'profile' },
];

export const BottomNavigation = () => {
    const location = useLocation();
    return (
        <div className={styles.root}>
            <nav className={styles.tabs}>
                {tabs.map((tab) => {
                    const isActive = location.pathname === tab.path;
                    return (
                        <Link key={tab.path} to={tab.path} className={clsx(styles.tab, isActive && styles.isActive)}>
                            <Icon name={tab.icon} className={styles.icon} />
                            <span className={styles.label}>{tab.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};
