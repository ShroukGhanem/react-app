import useUsers from "./hooks/useUsers";
import UserService, { User } from "./services/user-service";

function App() {
  const { users, isLoading, error, setUsers, setError } = useUsers();
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((keepUser) => keepUser.id !== user.id));

    UserService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "s" };
    setUsers([newUser, ...users]);

    UserService.add(newUser).then((res) => setUsers([res.data, ...users]));
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
