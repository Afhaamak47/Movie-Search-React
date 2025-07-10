import Reatc from "react";
import { Link } from "react-router-dom";

const Footers = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Movie Search. All rights reserved.
        </p>
        <p>
          <Link to="/about" className="text-yellow-400 hover:underline">
            About Us
          </Link>
        </p>
        <p>
          <Link to="/contact" className="text-yellow-400 hover:underline">
            Contact Us
          </Link>
        </p>
        <p>
          <Link to="/github" className="text-yellow-400 hover:underline">
            Github
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footers;
