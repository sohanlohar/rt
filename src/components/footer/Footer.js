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
import { quickLinks } from "./quickLinks";
import Link from "next/link";

const Footer = () => {
  const socialIcons = [
    {
      iconName: "mail",
      srcPath: mail,
      path: "support@ranavtechnologies.com",
      type: "mail",
    },
    {
      iconName: "llinkedin",
      srcPath: llinkedin,
      path: "https://www.linkedin.com/company/ranav-technologies/posts/?feedView=all",
      type: "link",
    },
    { iconName: "twitter", srcPath: twitter, path: "", type: "link" },
    {
      iconName: "instagram",
      srcPath: instagram,
      path: "https://www.instagram.com/ranavtechnologies_official/reels/",
      type: "link",
    },
    { iconName: "facebook", srcPath: facebook, path: "", type: "link" },
    // { iconName: "git", srcPath: git, path: "", type: "link" },
    {
      iconName: "youtube",
      srcPath: youtube,
      path: "https://www.youtube.com/@ranavtechnologies_official",
      type: "link",
    },
  ];

  return (
    <footer className="container my-10 md:my-16">
      <div className="mx-auto bg-gray rounded-40 p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
            <div className="w-full md:w-2/5 p-5">
              <div className="w-[180px] md:w-[250px]">
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
              <h4 className="font-bold mb-5  text-xl md:text-2xl uppercase font-karla text-black-dark">
                Quick Links
              </h4>
              <ul className="list-none flex items-center flex-wrap text-sm md:text-xl gap-4 font-karla text-black">
                {quickLinks.map((item) => {
                  return (
                    <Link key={item.menuName} href={item.menuPath}>
                      <li key={item.menuName}>{item.menuName}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-8 items-start md:items-end">
            <div className="w-full md:w-2/5 p-5">
              <h4 className="font-bold text-black mb-5 text-base md:text-xl font-karla">
                support@ranavtechnologies.com
              </h4>
              <div className="flex gap-2 justify-between flex-wrap text-sm font-karla font-normal">
                <p>© 2024 RANAV TECHNOLOGIES</p>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/terms-and-conditions">Terms & Conditions</Link>
              </div>
            </div>
            <div className="w-full md:w-3/5 p-5">
              <h4 className="font-bold mb-5 text-xl md:text-2xl uppercase font-karla text-black-dark">
                SOCIALS
              </h4>
              <ul className="flex flex-wrap justify-between gap-5 md:gap-10 max-w-md">
                {socialIcons.map((icon) => {
                  return (
                    <Link
                      key={icon.iconName}
                      href={
                        icon.type === "mail" ? `mailto:${icon.path}` : icon.path
                      }
                      rel="noopener noreferrer"
                      target={icon.type === "mail" ? `_self` : "_blank"}
                    >
                      <li>
                        <Image
                          alt={icon.iconName}
                          loading="lazy"
                          width="20"
                          decoding="async"
                          style={{ color: "transparent" }}
                          src={icon.srcPath}
                        />
                      </li>
                    </Link>
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
