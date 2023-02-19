import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchField from "./components/SearchField";
import { deleteUsers, getUsers } from "./redux/slice/users";
import useUsers from "@/hooks/useUsers";
function App() {
  // //hook
  // const dispatch = useDispatch();
  const selector = useSelector((state) => state.users);
  // // variable
  const users = selector.users;

  // // method
  // const handleDelete = (id) => {
  //   dispatch(deleteUsers(id));
  // };

  // // side effect
  // useEffect(() => {
  //   // Every user change -> get Users
  //   dispatch(getUsers());
  // }, []);
  const { handleDeleteUser } = useUsers();

  const deleteUser = (id) => {
    handleDeleteUser(id);
    // muatate(id)
  };

  return (
    <div className="flex flex-col gap-5 items-center font-medium text-lg w-full p-10">
      <SearchField></SearchField>
      {/* <button
        className="p-2 rounded-md bg-green-500 text-white"
        onClick={() => executeGetUser()}
      >
        Get data
      </button> */}
      <ul>
        {users &&
          users.map((user) => {
            return (
              <li
                key={user.id}
                className="flex items-center justify-between gap-3 mb-1"
              >
                <span>{user.username}</span>
                <button
                  className="p-1 rounded-md text-base bg-red-400 text-white"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
