import { NavLinks, SocialLinks } from "../../Utils/Constant";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Drona.png";
import { useContext, useEffect, useState } from "react";
import { ActiveLinkContext } from "../../Context/ActiveLinkContext";

//

const Footer = () => {
  const { activeLinkId, handleLinkClick } = useContext(ActiveLinkContext);
  const [initialActiveLinkId, setInitialActiveLinkId] = useState(activeLinkId);

  useEffect(() => {
    if (window.location.pathname === "/") {
      handleLinkClick(1); // Reset for homepage
      localStorage.removeItem("activeLinkId"); // Clear storage entry
    } else {
      setInitialActiveLinkId(activeLinkId); // Store initial state on other pages
    }
  }, []);

  return (
    <footer className="flex w-full bg-gradient-to-r from-violet-900 via-purple-800 to-orange-500 md:flex-row flex-col min-h-[300px] p-4 rounded-tl-2xl rounded-tr-2xl">
      <div className="text-white md:w-1/3 flex items-center justify-center flex-col">
        <img src={logo} alt="" className="h-[150px]" />
        <p className="text-orange-500 my-8 font-bold text-[24px] text-center">
          Drona Learning Academy
        </p>
      </div>
      <ul className="md:w-1/3 md:px-12 px-3 py-4 flex flex-col items-center justify-start">
        <h1 className="text-white font-bold mb-[30px] text-[24px] capitalize">
          Explore
        </h1>
        <div className="flex flex-col">
          {NavLinks.map((navlink) => {
            const { id, text, url } = navlink;
            return (
              <NavLink
                key={id}
                to={url}
                className="text-black font-medium transition text-[16px] mt-2 hover:text-orange-500 hover:underline"
                onClick={() => handleLinkClick(id)}
              >
                {text}
              </NavLink>
            );
          })}
        </div>
      </ul>
      <ul className="md:w-1/3 md:px-12 px-3 py-4 flex flex-col items-center justify-start">
        <h1 className="text-white font-bold mb-[30px] text-[24px] capitalize">
          Social
        </h1>
        <div className="flex justify-start">
          {SocialLinks.map((sociallink) => {
            const { id, url, icon: Icon } = sociallink;
            return (
              <li key={id} className="capitalize p-1">
                <a
                  to={url}
                  className="text-black font-normal transition text-[28px] mt-2 hover:text-orange-500 hover:text-[29px]"
                >
                  <Icon />
                </a>
              </li>
            );
          })}
        </div>
      </ul>
      {/* <div className="text-white flex-1 flex flex-col items-center justify-start p-5">
        <img src={logo2} alt="" className="h-[150px]" />
        <h1 className="text-white font-[600]">
          Website and Designs By :{" "}
          <a href="https://zorway.in/" className="underline font-[700]">
            Zorway
          </a>{" "}
        </h1>
        <p className="text-white font-[400] text-left">Contact us: </p>
        <p className="text-white font-[400]">
          <a
            href="mailto:contact@zorway.in"
            className="hover:underline transition"
          >
            Email: contact@zorway.in
          </a>
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
