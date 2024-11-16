import { supabase } from '@api/supabase';
import { useEffect, useState } from 'react';
import { Poll } from '@api/database.types';

export const Polls = () => {
    const [polls, setPolls] = useState<Poll[]>([]);

    useEffect(() => {
        getPolls();
    }, []);

    async function getPolls() {
        const { data } = await supabase.from('Polls').select('*');

        if (data) {
            setPolls(data);
        }
    }

    return (
        <div>
            {polls.length === 0 && <span>no poll</span>}
            {polls.map((poll) => (
                <div key={poll.id}>
                    <span>Id: {poll.id}</span>
                    <br />
                    <span>Created At: {poll.created_at}</span>
                    <br />
                    <span>Expired At: {poll.expired_at}</span>
                    <br />
                    <span>Option 1: {poll.option_1}</span>
                    <br />
                    <span>Option 2: {poll.option_2}</span>
                    <br />
                    <span>Title: {poll.title}</span>
                    <br />
                </div>
            ))}
        </div>
    );
};
