import { Outlet, useMatches } from 'react-router-dom';
import { Header } from '@components/Header/Header';
import BottomNavigation from '@components/BottomNavigation';
import styles from './DefaultLayout.module.scss';

const DefaultLayout = () => {
    const matches = useMatches();
    const currentMatch = matches[matches.length - 1];

    const handle = currentMatch?.handle as { headerProps?: { hideHeader?: boolean; title?: string } } | undefined;
    const headerProps = handle?.headerProps;

    return (
        <div className={styles.root}>
            {!headerProps?.hideHeader && <Header title={headerProps?.title ?? ''} />}
            <Outlet />
            <BottomNavigation />
        </div>
    );
};

export default DefaultLayout;
