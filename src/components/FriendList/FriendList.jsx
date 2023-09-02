

export const FriendList = ({friends}) => 
<div>
<ul className="friend-list">
{friends.map((friend) => {
    return <li className="friend" key={friend.id}> 
      <span className="status">{friend.isOnline}</span>
      <img className="friend-avatar" src={friend.avatar} alt="User avatar" width="48" />
      <p className="name">{friend.name}</p>
    </li>})}


</ul>
</div>

