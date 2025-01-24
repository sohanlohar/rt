import React from "react";
import youtube from "../../assets/icons/icon-youtube.png";
import facebook from "../../assets/icons/icon-facebook.png";
import instagram from "../../assets/icons/icon-instagram.png";
import twitter from "../../assets/icons/icon-x.png";
import llinkedin from "../../assets/icons/icon-llinkedin.png";
import mail from "../../assets/icons/icon-mail.png";
import git from "../../assets/icons/icon-git.png";
import Image from "next/image";
import RTlogo from "../../assets/images/footer-logo.png";

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
    <footer className="my-10 md:my-16">
      <div className="max-w-90 mx-auto bg-gray rounded-40 p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
            <div className="w-full md:w-2/5 p-5">
              <div className="w-[250px] h-[70px]">
                <Image
                  alt="RT Logo"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full"
                  style={{ color: "transparent" }}
                  src={RTlogo}
                />
              </div>
              <p className="mt-4 text-sm font-karla font-normal text-justify">
                Empowering businesses through innovative technology solutions.
                At Ranav Technologies, we’re committed to delivering excellence
                and driving results. Connect with us to start transforming your
                digital landscape.
              </p>
            </div>
            <div className="w-full md:w-3/5 p-5">
              <h4 className="font-semibold mb-5  text-2xl md:text-3xl uppercase font-karla text-black-dark">
                Pages
              </h4>
              <ul className="list-none flex items-center flex-wrap text-sm md:text-xl gap-4 font-karla text-black">
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Case Studies</li>
                <li>Career</li>
                <li>Blogs</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-8 items-start md:items-end">
            <div className="w-full md:w-2/5 p-5">
              <h4 className="font-bold text-black mb-5 text-[18px] md:text-2xl font-karla">
                ranavtechnologies@support.com
              </h4>
              <div className="flex gap-2 justify-between flex-wrap text-sm font-karla font-normal">
                <p>© 2024 RANAV TECHNOLOGIES</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>
            </div>
            <div className="w-full md:w-3/5 p-5">
              <h4 className="font-semibold mb-5 text-2xl md:text-3xl uppercase font-karla text-black-dark">
                SOCIALS
              </h4>
              <ul className="flex flex-wrap justify-between gap-5 md:gap-10">
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
      </div>
    </footer>
  );
};

export default Footer;
