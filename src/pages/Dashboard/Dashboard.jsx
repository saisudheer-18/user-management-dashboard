import { useEffect, useState } from "react";
import "./Dashboard.css";
import UserTable from "../../components/UserTable/UserTable";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  // Search filter
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  // Sorting
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!sortField) return 0;

    const valA =
      sortField === "company"
        ? a.company.name.toLowerCase()
        : a.name.toLowerCase();

    const valB =
      sortField === "company"
        ? b.company.name.toLowerCase()
        : b.name.toLowerCase();

    return order === "asc"
      ? valA.localeCompare(valB)
      : valB.localeCompare(valA);
  });

  // Sort handler
  const handleSort = (field) => {
    if (sortField === field) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setOrder("asc");
    }
  };

  // Loading & Error
  if (loading) return <h2 className="loading">Loading users...</h2>;
  if (error) return <h2 className="error">Failed to load users ❌</h2>;

  return (
    <div className="dashboard">
      <div className="dashboard-container">

        <h1 className="title">User Directory Dashboard</h1>

        {/* Stats */}
        <div className="stats">
          <div className="stat-card">
            <h3>{users.length}</h3>
            <p>Total Users</p>
          </div>

          <div className="stat-card">
            <h3>{new Set(users.map((u) => u.company.name)).size}</h3>
            <p>Companies</p>
          </div>

          <div className="stat-card">
            <h3>{filteredUsers.length}</h3>
            <p>Results</p>
          </div>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by name or email..."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Buttons */}
        <div className="buttons">
          <button
            className={sortField === "name" ? "active" : ""}
            onClick={() => handleSort("name")}
          >
            Sort Name {sortField === "name" && (order === "asc" ? "↑" : "↓")}
          </button>

          <button
            className={sortField === "company" ? "active" : ""}
            onClick={() => handleSort("company")}
          >
            Sort Company {sortField === "company" && (order === "asc" ? "↑" : "↓")}
          </button>
        </div>

        {/* Table */}
        {sortedUsers.length === 0 ? (
          <p className="empty">No users found 😢</p>
        ) : (
          <div className="table-card">
            <UserTable users={sortedUsers} />
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;