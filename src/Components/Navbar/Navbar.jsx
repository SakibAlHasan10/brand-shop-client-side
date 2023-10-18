import { Link, NavLink } from "react-router-dom";
import useApi from "../../AuthApi/useApi";

const Navbar = () => {
  const { user } = useApi();
  console.log(user);
  return (
    <div className="bg-base-100 shadow-md">
      <div className="navbar  max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to={`/`}
                  className={`${({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""}
            `}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/add_product`}
                  className={`${({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""}
            `}
                >
                  Add Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/my_cart`}
                  className={`${({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""}
            `}
                >
                  My Cart
                </NavLink>
              </li>
            </ul>
          </div>
          <a href="" className="text-3xl font-bold">
            TidalWave
          </a>
          {/* <img src="/tidal-wave.png" alt="" className="h-16 w-40"/> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to={`/`}
                className={`${({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""}
            `}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/add-product`}
                className={`${({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""}
            `}
              >
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/my-cart`}
                className={`${({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""}
            `}
              >
                My Cart
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-2">
              <div>
                    <h4>{user.displayName}</h4>
                  </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              to={`/login`}
              className={`${({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""}
            btn-sm btn`}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
