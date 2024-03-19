import img from "/src/assets/logo-navbar.png"

const Navbar = () => {
    return (
        <div className="navbar bg-{#FFFFFFE5} shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a >Blog</a></li>
              <li><a>Offer</a></li>
              <li>
                <a>Airlines</a>
               
              </li>
              <li><a>About</a></li>
            </ul>
          </div>
         <div className="flex">
         <img src={img} alt="" />
             <h2 className="text-[#FFB700] text-4xl font-bold">Air<span className="text-[#006CE4]">Book</span> </h2>
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
          <li><a  className="font-semibold text-xl">  Blog</a></li>
              <li><a className="font-semibold text-xl">Offer</a></li>
              <li>
                <a className="font-semibold text-xl">Airlines</a>
               
              </li>
              <li><a className="font-semibold text-xl">About</a></li>
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-primary">Sign in</button>
        </div>
      </div>
    );
};

export default Navbar;