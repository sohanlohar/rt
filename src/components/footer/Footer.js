import React from "react";
import youtube from "../../assets/icons/icon-youtube.png";
import facebook from "../../assets/icons/icon-facebook.png";
import instagram from "../../assets/icons/icon-instagram.png";
import twitter from "../../assets/icons/icon-x.png";
import llinkedin from "../../assets/icons/icon-llinkedin.png";
import mail from "../../assets/icons/icon-mail.png";
import git from "../../assets/icons/icon-git.png";
import Image from "next/image";
import RTlogo from "../../assets/images/rt-logo.png";

const Footer = () => {
  const socialIcons = [
    { iconName: "mail", srcPath: mail },
    { iconName: "llinkedin", srcPath: llinkedin },
    { iconName: "twitter", srcPath: twitter },
    { iconName: "instagram", srcPath: instagram },
    { iconName: "facebook", srcPath: facebook },
    { iconName: "git", srcPath: git },
    { iconName: "youtube", srcPath: youtube },
  ];

  return (
    <footer className="mb-16">
      <div className="max-w-90 mx-auto bg-gray rounded-xl p-4 sm:p-6 lg:p-8">
        <div className="flex flex-wrap justify-between items-end gap-x-10 gap-y-8">
          <div className="w-full md:w-[48%] p-4">
            <Image
              alt="RT Logo"
              loading="lazy"
              width="170"
              height="83"
              decoding="async"
              style={{ color: "transparent" }}
              src={RTlogo}
            />
            <p className="mt-4 text-sm font-karla font-normal text-justify">
              Empowering businesses through innovative technology solutions. At
              Ranav Technologies, we’re committed to delivering excellence and
              driving results. Connect with us to start transforming your
              digital landscape.
            </p>
          </div>

          <div className="w-full md:w-[48%] p-4">
            <h4 className="font-semibold mb-2 text-xl uppercase font-karla">
              Pages
            </h4>
            <ul className="list-none flex items-center gap-3 font-karla text-black">
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Case Studies</li>
              <li>Career</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="w-full md:w-[48%] p-4">
            <h4 className="font-semibold mb-2 text-xl uppercase font-karla">
              ranavtechnologies@support.com
            </h4>
            <div className="flex gap-5 justify-between text-sm font-karla font-normal">
              <p>© 2024 RANAV TECHNOLOGIES</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>

          <div className="w-full md:w-[48%] p-4">
            <h4 className="font-bold mb-4">SOCIALS</h4>
            <ul className="flex flex-wrap gap-10">
              {socialIcons.map((icon) => {
                return (
                  <li key={icon.iconName}>
                    <Image
                      alt={icon.iconName}
                      loading="lazy"
                      width="20"
                      decoding="async"
                      style={{ color: "transparent" }}
                      src={icon.srcPath}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
