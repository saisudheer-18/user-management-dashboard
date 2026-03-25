import { useNavigate } from "react-router-dom";
import "./UserTable.css";

function UserTable({ users }) {
  const navigate = useNavigate();

  if (!users || users.length === 0) {
    return <p className="empty">No users found</p>;
  }

  const handleRowClick = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="row"
              onClick={() => handleRowClick(user.id)}
            >
              <td className="name">{user.name}</td>
              <td>{user.email}</td>
              <td className="nowrap">{user.phone}</td>
              <td>{user.company?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;