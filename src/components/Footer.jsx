import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="py-6 mt-2  bg-slate-100 text-black dark-bg ">
      <div className="container justify-center text-center px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="">
          <div className="flex items-center justify-center ">
            <img
              src={logo}
              alt="logo"
              className="flex-shrink-0 w-16 rounded-full text-gray-900"
            ></img>
          </div>
          <span className="self-center text-2xl font-semibold dark-text">Fuddy</span>
        </div>
        <div className=" justify-center text-center pt-4 lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6 dark-text">
            <span>©2023 All rights reserved</span>
            <a rel="noopener noreferrer" href="/">
              <span>Privacy policy</span>
            </a>
            <a rel="noopener noreferrer" href="/">
              <span>Terms of service</span>
            </a>
          </div>
          <div className="flex flex-row flex-wrap sm:items-auto justify-center text-center py-3 lg:items-auto gap-3">
            <a target="blank" href="/">
              <button className="border border-[#FF6600]/80 rounded-full py-1 px-4 hover:bg-[#FF6600]/80 transition duration-300 ease-in-out dark-text">
                Whatsapp
              </button>
            </a>
            <a target="blank" href="#">
              <button className="border border-[#FF6600]/80 rounded-full py-1 px-4 hover:bg-[#FF6600]/80 transition duration-300 ease-in-out dark-text">
                Linkedin
              </button>
            </a>
            <a target="blank" href="https://www.linkedin.com/in/md-iftekhirull-00288b291/">
              <button className="border border-[#FF6600]/80 rounded-full py-1 px-4 hover:bg-[#FF6600]/80 transition duration-300 ease-in-out dark-text">
                Github
              </button>
            </a>
            <a target="blank" href="#">
              <button className="border border-[#FF6600]/80 rounded-full py-1 px-4 hover:bg-[#FF6600]/80 transition duration-300 ease-in-out dark-text">
                Twitter
              </button>
            </a>

            <a target="blank" href="https://www.facebook.com/CodeWithIftekhar/">
              <button className="border border-[#FF6600]/80 rounded-full py-1 px-4 hover:bg-[#FF6600]/80 transition duration-300 ease-in-out dark-text">
                Facebook
              </button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
