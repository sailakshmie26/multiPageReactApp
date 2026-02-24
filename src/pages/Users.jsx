import { Link } from "react-router-dom"

const users = [
    { id:1, name:"Harry Potter", email:"harry@gmail.com"},
    { id:2, name:"Hermione Granger", email:"hermione@gmail.com"},
    { id:3, name:"Ron Weasley", email:"ron@gmail.com"}
]

const Users = () => {
  return (
    <div className='page'>
      <h1>User List</h1>

      <ul>
        {users.map(user => (
          <li 
          key={user.id}>
            <Link
            style={{textDecoration:"none", color:"rgb(163, 156, 5)"}}
            to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
export {users}