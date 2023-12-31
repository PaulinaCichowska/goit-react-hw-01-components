import { Profile, Statistics, FriendList, TransactionHistory } from './components';
import user from "user.json";
import data from "data.json";
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
    return (
        <div>

            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats} />
            <Statistics stats={data}></Statistics>
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </div>)
}