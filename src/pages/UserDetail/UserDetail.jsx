import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./UserDetail.css";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 className="loading">Loading...</h2>;
  if (!user) return <h2>User not found</h2>;

  return (
    <div className="user-detail">
      <div className="detail-container">

        {/* Back Button */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        {/* Card */}
        <div className="user-card">

          <h2 className="name">{user.name}</h2>

          <div className="info">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>

          <div className="section">
            <h3>Company</h3>
            <p>{user.company?.name}</p>
          </div>

          <div className="section">
            <h3>Address</h3>
            <p>
              {user.address?.street}, {user.address?.city}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default UserDetail;