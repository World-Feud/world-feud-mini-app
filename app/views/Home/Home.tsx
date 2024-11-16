import styles from './Home.module.scss';
import { Page } from '@components/telegram/Page';

const HomeView = () => {
    return (
        <Page canGoBack={false} className={styles.root}>
            {/*{mockPolls.map((mockPoll) => (*/}
            {/*    <PollCard {...mockPoll} key={mockPoll.id} />*/}
            {/*))}*/}
        </Page>
    );
};

export default HomeView;
