import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='page'>
      <h1>About the app</h1>
      <p>
        This is a react application built with multiple pages using 
        React Router. 
      </p>
      <p>
        The goal of this application is to understand how modern React
        applications manage navigation and URL-based rendering without
        reloading the page.
      </p>

      <Link className="btn btn-secondary border-black" to="/">Back to Home</Link>
    </div>
  )
}

export default About;
