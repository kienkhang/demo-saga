import useUsers from "@/hooks/useUsers";
// import { addUsers } from "@/redux/slice/users";
import React from "react";
// import { useDispatch } from "react-redux";
const SearchField = () => {
  // // hook
  // const dispatch = useDispatch();
  const { handleAddUser } = useUsers();
  // // method
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.elements["username"].value;
    handleAddUser({ username: text });
    // mutate()
  };
  // ====================

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input
        type="text"
        name="username"
        placeholder="username"
        className="p-3 rounded-md text-lg border focus:border-green-400 focus:outline-none"
      />
      <button
        type="submit"
        className="py-2 px-5 bg-green-500 rounded-md text-white "
      >
        Post
      </button>
    </form>
  );
};

export default SearchField;
