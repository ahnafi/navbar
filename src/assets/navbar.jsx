// import { Link } from "react-router-dom";

const navigation = [
  {
    to: "#hero",
    text: "Home",
  },
  {
    to: "#features",
    text: "Features",
  },
  {
    to: "#about",
    text: "About",
  },
  {
    to: "#product",
    text: "Product",
  },
  {
    to: "#faq",
    text: "Faq",
  },
  {
    to: "#testimonial",
    text: "Testimonial",
  },
  {
    to: "#contact",
    text: "Contact",
  },
];

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;
  if (window.pageYOffset > fixNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
// hamburger
function hamburger() {
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.toggle("hidden");
  // console.log(navMenu)
}

const Navbar = () => {
  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 w-full flex items-center z-50">
      <div className="container py-4">
        <div className="flex justify-between items-center relative">
          <div>
            <a href="#" className="font-bold py-4 text-2xl ">
              Curve
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute right-4 lg:hidden"
              onClick={() => hamburger()}
            >
              <span className="w-[20px] h-[3px] my-1 block bg-slate-400 rounded-full"></span>
              <span className="w-[30px] h-[3px] my-1 block bg-slate-300 rounded-full"></span>
              <span className="w-[20px] h-[3px] my-1 block bg-slate-400 rounded-full"></span>
              <span className="w-[30px] h-[3px]  block my-1 bg-slate-300 rounded-full"></span>
            </button>
            <nav
              id="nav-menu"
              className="duration-300 ease-in-out hidden absolute bg-blue-500 border-slate-300 border opacity-100 shadow-lg rounded-lg max-w-[250px] w-full right-0 top-full mt-1 transition lg:border-none lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul className="block lg:flex justify-between">
                {navigation.map((i) => {
                  return (
                    <li className="group" key={i.to}>
                      <a
                        href={i.to}
                        // to={i.to}
                        className="font-semibold text-white py-2 mx-4 flex group-hover:text-slate-200"
                      >
                        {i.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
