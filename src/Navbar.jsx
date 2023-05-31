function hamburger() {
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.toggle("hidden");
}

const Navbar = () => {
  const navigation = [
    {
      to: "#a",
      text: "about",
    },
    {
      to: "#a",
      text: "about",
    },
    {
      to: "#a",
      text: "about",
    },
    
  ];

  return (
    <header className="bg-sky-300 sticky top-0 left-0 right-0 w-full flex items-center z-50">
      <div className="container py-2">
        <div className="px-4 flex justify-between items-center ">
          {/*  */}
          <div className="px-4">
            <a href="" className="font-bold py-4 text-2xl">
              brand
            </a>
          </div>
          {/*  */}
          <div className="flex items-center px-4">
            <button
              onClick={() => hamburger()}
              id="hamburger"
              name="hamburg"
              type="button"
              className="block mx-4 lg:hidden"
            >
              <span className="w-[25px] h-[3px] my-1 block bg-white rounded-full"></span>
              <span className="w-[20px] h-[3px] my-1 block bg-white rounded-full"></span>
              <span className="w-[25px] h-[3px] my-1 block bg-white rounded-full"></span>
            </button>
            <nav
              id="nav-menu"
              className="bg-slate-500 fixed hidden top-12 right-0 bottom-0 left-0 w-full 
              lg:block lg:top-0 lg:bg-transparent lg:static lg:max-w-full  
              transition-all duration-300 ease-in-out
              "
            >
              <ul className="mx-12 text-end lg:flex justify-between gap-4 items-center lg:text-start">
                {navigation.map((i) => {
                  return (
                    <li key={i.to} className="group">
                      <a href={i.to} onClick={() => hamburger()} className="font-semibold py-2 flex justify-end text-white group-hover:text-slate-200">
                        {i.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          {/*  */}
        </div>
      </div>
    </header>
  );
};
export default Navbar;
