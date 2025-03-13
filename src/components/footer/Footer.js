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
    {
      iconName: "twitter",
      srcPath: twitter,
      path: "https://x.com/RanavTech0710",
      type: "link",
    },
    {
      iconName: "instagram",
      srcPath: instagram,
      path: "https://www.instagram.com/ranavtechnologies_official/reels/",
      type: "link",
    },
    // { iconName: "facebook", srcPath: facebook, path: "", type: "link" },
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
      <div className="mx-auto bg-gray rounded-40 px-6 sm:px-8 lg:px-14 py-10 sm:py-12 lg:py-16">
        <div className="flex flex-col gap-8 sm:gap-16">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-20 items-start md:items-center">
            <div className="w-full md:w-1/2 pr-4 md:pr-20">
              <div className="w-[180px] md:w-[250px]">
                <Link href="/">
                  <Image
                    alt="RT Logo"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full"
                    src={RTlogo}
                  />
                </Link>
              </div>
              <p className="mt-4 text-base font-karla font-normal text-justify">
                Empowering businesses through innovative technology solutions.
                At Ranav Technologies, we’re committed to delivering excellence
                and driving results. Connect with us to start transforming your
                digital landscape.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="font-bold mb-5 text-xl md:text-2xl uppercase font-karla text-black-dark">
                Quick Links
              </h4>
              <ul className="list-none flex items-center flex-wrap text-sm md:text-xl  gap-3 sm:gap-4 font-karla text-black">
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

          <div className="flex flex-col-reverse md:flex-row gap-8 sm:gap-20 items-start md:items-end">
            <div className="w-full md:w-1/2 pr-4 md:pr-20">
              <h4 className="font-bold text-black-dark mb-5 text-base md:text-xl font-karla">
                support@ranavtechnologies.com
              </h4>
              <div className="flex gap-2 justify-between flex-col-reverse sm:flex-row text-black-dark flex-wrap text-sm font-karla font-normal">
                <p>© 2024 RANAV TECHNOLOGIES</p>
                <div className="flex gap-6">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                  <Link href="/terms-and-conditions">Terms & Conditions</Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
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
                          style={{
                            filter: "contrast(30%)",
                          }}
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
