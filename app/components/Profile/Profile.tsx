import { useLaunchParams } from '@telegram-apps/sdk-react';
import WebApp from '@twa-dev/sdk';

export const Profile = () => {
    const lp = useLaunchParams();
    const user = lp.initData?.user;
    if (!user) return <h1>no user data</h1>;
    const { id, username, firstName, photoUrl } = user;

    const triggerDominoCheck = async () => {
        const data = {
            username: 'llamiib0t',
            twitterAccountUsername: 'trepa_io',
        };

        try {
            const response = await fetch(
                'https://matiz.domino.run/automations/NqmtXp4Ze4bqZnhzf1VgeMM8VQXeum4N9nWOeWwwMa4%3D',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                },
            );

            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }

            const result = await response.json();
            console.log('Успех:', result);
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    return (
        <div>
            <span>photo: {WebApp.initDataUnsafe.user?.photo_url}</span>
            <span>photo: {photoUrl}</span>
            <img src={photoUrl} alt="profile image" />
            <span>id: {id}</span>
            <span>first_name: {firstName}</span>
            <span>username: {username}</span>
            <button onClick={() => triggerDominoCheck()}>follow us on x</button>
        </div>
    );
};
