import React from 'react';
import { Page } from '@components/telegram/Page';
import styles from './Sparks.module.scss';
import Icon from '@components/Icon';
import clsx from 'clsx';
import SwipingDesk from '@components/SwipingDesk/SwipingDesk';
import Categories from '@components/Categories/Categories';
import SwipeIndicator from '@components/SwipeIndicator/SwipeIndicator';

const SparksView = () => {
    return (
        <Page canGoBack={false} className={styles.root}>
            <Categories />
            <SwipeIndicator />
            <SwipingDesk />
            <div className={styles.controls}>
                <button className={styles.controlButton}>
                    <Icon name="return" />
                </button>
                <button className={styles.controlButton}>
                    <Icon name="leftArrow" />
                </button>
                <button className={clsx(styles.controlButton, styles.add)}>
                    <Icon name="add" />
                </button>
                <button className={styles.controlButton}>
                    <Icon name="rightArrow" />
                </button>
                <button className={styles.controlButton}>
                    <Icon name="close" />
                </button>
            </div>
        </Page>
    );
};

export default SparksView;
