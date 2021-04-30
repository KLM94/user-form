import styles from "../User/UsersList.module.css";

// UserData passed as a prop to render list in UsersList component
const UsersList = ({ usersList }) => {
  return (
    <div className={styles["users-list__card"]}>
      <ul className={styles["users-list"]}>
        {usersList.map((user) => (
          <li className={styles.user} key={user.id}>
            {`${user.username} (${user.age} years old)`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
