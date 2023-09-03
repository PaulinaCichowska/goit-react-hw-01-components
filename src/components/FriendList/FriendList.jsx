import PropTypes from "prop-types"
import css from './FriendList.module.css'

export const FriendList = ({ friends }) =>
  <div>
    <ul className={css.list}>
      {friends.map((friend) => {
        return <li className={css.friend} key={friend.id}>
          <span className=
            {friend.isOnline ? css.online : css.offline}>
          </span>
          <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
          <p className={css.name}>{friend.name}</p>
        </li>
      })}
    </ul>
  </div>

FriendList.propTypes = {
  friend: PropTypes.shape({
    status: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
  })
}