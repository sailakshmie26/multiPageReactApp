import { useParams, useNavigate } from "react-router-dom"
import { users } from "./Users"

const UserDetail = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const user = users.find((u) => u.id === parseInt(id));
    if(!user){
        return <h2>User Not Found!</h2>
    }

  return (
    <div className="page">
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <button className="btn btn-secondary border-black" onClick={() => navigate("/users")}>Go Back</button>
    </div>
  )
}

export default UserDetail
