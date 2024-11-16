import React, { FC } from 'react';
import styles from './Header.module.scss';
import Icon from '@components/Icon';

type HeaderProps = {
    title: string;
};

export const Header: FC<HeaderProps> = (props) => {
    const { title } = props;

    return (
        <div className={styles.root}>
            <span className={styles.title}>{title}</span>
            <div className={styles.right}>
                <button>
                    <Icon name="sort" className={styles.icon} />
                </button>
                <button>
                    <Icon name="filter" className={styles.icon} />
                </button>
            </div>
        </div>
    );
};
