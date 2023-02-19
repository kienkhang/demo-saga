import { useSelector, useDispatch } from "react-redux";
import useUsers from "@/hooks/useUsers";

import AppRouter from "./router/AppRouter";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
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
  // const { handleDeleteUser } = useUsers();

  // const deleteUser = (id) => {
  //   handleDeleteUser(id);
  //   // muatate(id)
  // };

  return (
    <div className="flex flex-col gap-5 items-center font-medium text-lg w-full p-10">
      {/* <SearchField></SearchField>
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
      </ul> */}
      <div className="flex gap-2">
        <button
          className="p-2 rounded-md bg-green-500 text-white"
          onClick={() => navigate("/")}
        >
          Goto Init Page
        </button>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
