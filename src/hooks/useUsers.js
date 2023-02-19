import { addUserApi, deleteUserApi, getUserApi } from "@/api/users";
import { setUsers } from "@/redux/slice/users";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function useUsers() {
  const queryClient = useQueryClient();

  const dispatch = useDispatch();
  // Get user

  const { data: usersData } = useQuery({
    queryKey: ["user"],
    queryFn: getUserApi,
    // enabled: false,
    onSuccess: (data) => {
      toast.success("🦄 Get data successful");
      dispatch(setUsers(data));
    },
  });
  const { mutate: handleDeleteUser } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      toast.success("🦄 Delete data successful");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const { mutate: handleAddUser } = useMutation({
    mutationFn: addUserApi,
    onSuccess: () => {
      toast.success("🦄 Add data successful");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { usersData, handleDeleteUser, handleAddUser };
}

export default useUsers;
