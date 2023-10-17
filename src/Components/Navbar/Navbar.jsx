import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-md">
      <div className="navbar  max-w-6xl mx-auto px-8">
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
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <img src="/tidal-wave.png" alt="" className="h-16 w-40"/>
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
        <div className="navbar-end">
          <NavLink
            to={`/login`}
            className={`${({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""}
            btn-sm`}
          >
            LogIn
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
