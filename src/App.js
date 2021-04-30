import UsersList from "./components/User/UsersList";
import UserForm from "./components/User/UserForm";
import styles from "./components/Card/Card.module.css";
import { useState } from "react";

// Hardcoded data
const userData = [
  {
    id: "u1",
    username: "Kirst666",
    age: 27,
  },
  {
    id: "u2",
    username: "YerYerYer",
    age: 27,
  },
];

const App = () => {
  const [users, setUsers] = useState(userData);

  // Returns userData with current keys/values and adds new keys/values
  // func passed to UserForm
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      console.log(prevUsers);
      return [user, ...prevUsers];
    });
  };

  return (
    <div className={styles.card}>
      <UserForm onAddUser={addUserHandler} />
      <UsersList usersList={users} />
    </div>
  );
};

export default App;
