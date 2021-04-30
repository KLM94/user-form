import styles from "../User/UserForm.module.css";
import { useState } from "react";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const saveUserDataHandler = (users) => {
    const storedUserData = {
      ...users,
      id: Math.random().toString(),
    };
    props.onAddUser(storedUserData);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: enteredUsername,
      age: enteredAge,
    };

    saveUserDataHandler(userData);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <div className={styles["new-user"]}>
      <form onSubmit={submitHandler}>
        <div className={styles["form__controls"]}>
          <div className={styles["form__control"]}>
            <label>Username</label>
            <input
              type="text"
              value={enteredUsername}
              onChange={usernameHandler}
              required
            />
          </div>

          <div className={styles["form__control"]}>
            <label>Age (Years)</label>
            <input
              type="number"
              value={enteredAge}
              onChange={ageHandler}
              min="0"
              required
            />
          </div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
