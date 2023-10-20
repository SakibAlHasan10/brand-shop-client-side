import { Link, NavLink, useNavigate } from "react-router-dom";
import useApi from "../../AuthApi/useApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const { user, logOut, theme, setTheme } = useApi();
  // console.log(user.email)
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("logout successful", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  const themeChange = () => {
    // console.log('hello');
    setTheme(!theme);
  };
  return (
    <div className={` bg-base-100 text-black shadow-md`}>
      <ToastContainer />
      <div className="navbar  max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn text-black btn-ghost lg:hidden">
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
              className={` menu menu-sm text-black dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52`}
            >
              <li>
                <NavLink
                  to={`/`}
                  className={` ${({ isActive, isPending }) =>
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
          <a href="/" className="text-3xl font-bold">
            TidalWave
          </a>
          {/* <img src="/tidal-wave.png" alt="" className="h-16 w-40"/> */}
        </div>
        <div className="navbar-center text-black hidden lg:flex">
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
                <h4>{user?.displayName}</h4>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 text-black shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
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
                  <li className="text-red-600 font-semibold">
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                  <div className="flex items-center gap-2">
                    <input
                      onClick={themeChange}
                      type="checkbox"
                      className="toggle ml-2 mt-1"
                    />
                    {theme ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        />
                      </svg>
                    )}
                  </div>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              to={`/login`}
              className={`${({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""}
            btn-sm btn btn-outline`}
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
