import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white px-4 py-5 md:px-10 flex justify-between items-center mx-auto max-w-400">
        
      {/* logo div */}
      <div className="flex items-center space-x-30">
        <button className="block md:hidden">
            <img src={hamburger} alt="Hamburger Icon" />
        </button>
        <img
            src={logo}
            alt="DevStack Logo"
        />
      </div>
      
      {/* link div */}
      <div className="hidden md:block">
            <ul className="flex gap-8">
                <li>
                    <a className="text-sm font-medium text-gray-700" href="#">
                        Home
                    </a>
                </li>
                <li>
                    <a className="text-sm font-medium text-gray-700" href="#">
                        Technologies
                    </a>
                </li>
                <li>
                    <a className="text-sm font-medium text-gray-700" href="#">
                        Projects
                    </a>
                </li>
                <li>
                    <a className="text-sm font-medium text-gray-700" href="#">
                        About
                    </a>
                </li>
                <li>
                    <a className="text-sm font-medium text-gray-700" href="#">
                        Contact
                    </a>
                </li>
            </ul>
      </div>
      {/* btn div */}
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-gray-700">Sign In</button>
          <button className="rounded-full bg-pink-500 px-3 py-2 text-sm font-medium text-white md:px-5">
            Sign Up
          </button>
      </div>
    </nav>
  );
}

export default Navbar;
