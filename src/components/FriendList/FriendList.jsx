import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';

function FriendList({ friends }) {
  return (
    <ul className={styles.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.friend_item} key={id}>
          <span className={isOnline ? styles.green : styles.red}>
            {/* {isOnline ? 'Online' : 'Offline'} */}
          </span>
          <img
            className={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendList;
