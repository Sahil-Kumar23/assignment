import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
      <header className="shadow sticky z-50 top-0">
          <nav className="bg-dark-blue border-gray-200 px-4 lg:px-6 py-2.5">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <Link to="/" className="flex items-center">
                    <img
                        src="https://www.iitbracing.org/assets/Blog-post/racing_website_logo_white.png"
                        className="mr-3 h-12"
                        alt="Logo"
                    />
                  </Link>
                  <div className=" flex w-auto lg:order-1">
                    <ul className="flex flex-row mt-4 font-medium lg:space-x-8 lg:mt-0">
                        <li>
                            <NavLink to="/" className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                            Cars
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                            About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/event_news" className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                            Events & News
                            </NavLink>
                        </li>
                    </ul>
                  </div>
              </div>
          </nav>
      </header>
    );
}