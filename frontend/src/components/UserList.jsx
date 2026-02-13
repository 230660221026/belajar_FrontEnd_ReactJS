import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../api/usersApi"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"

export default function UserList() {
  const dispatch = useDispatch()
  const selectedUser = useSelector(state => state.user.selectedUser)

  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers
  })

  if (isLoading) return <p>Loading users...</p>

  return (
    <div>
      <h2>User List</h2>

      {users.map(user => (
        <button
          key={user.id}
          onClick={() => dispatch(selectUser(user))}
          style={{ display: "block", margin: "5px 0" }}
        >
          {user.name}
        </button>
      ))}

      <hr />

      <h3>Selected User:</h3>
      {selectedUser ? selectedUser.name : "None"}
    </div>
  )
}
