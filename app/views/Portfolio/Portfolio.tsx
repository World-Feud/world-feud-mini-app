import React from 'react';
import SwipingDesk from '@components/SwipingDesk/SwipingDesk';
import styles from '@views/Home/Home.module.scss';
import { Page } from '@components/telegram/Page';

const PortfolioView: React.FC = () => {
    return (
        <Page canGoBack={false} className={styles.root}>
            <SwipingDesk />
        </Page>
    );
};

export default PortfolioView;
