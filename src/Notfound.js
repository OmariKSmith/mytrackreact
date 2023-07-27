import {Link} from "react-router-dom";

const Notfound = () => {
  return(
      <div className="not-found">
          <h2>Sorry</h2>
          <p>
              that page cannot be found
          </p>

          <Link to="/">Back to homepage....</Link>
      </div>
  )
}

export default Notfound;