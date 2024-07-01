import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div class="text-center system-error">
        <h1 class="heading">Page not found</h1>

        <div class="description lead">
          <p>
            Sorry, the page you were looking for at this URL was not found. Hit
            the button below to return home.
          </p>
          <div class="cta-group ">
            <div class="btn-wrapper btn-primary-wrapper btn-wrapper-md">
              <Link class="button" to="/">
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
