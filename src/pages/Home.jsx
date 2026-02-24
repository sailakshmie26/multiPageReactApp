import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='page'>
      <h1>Welcome to the app!</h1>
      <p>
       This is a multi-page react application that displays a list of users 
       and allows you to view detailed information for each user.
      </p>
      <p>
        The application demonstrates client-side routing, navigation between
        pages, and dynamic URL parameters using React Router.
      </p>
      <br />

      <div>
      <Link
      className="btn btn-secondary border-black" to="/about">Go To About</Link>
      <br />
      <Link className="btn btn-secondary border-black mt-3" to="/users">View Users</Link>     
      </div>

    </div>
  )
}

export default Home
