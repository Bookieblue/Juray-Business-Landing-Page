import {
  FOOTER_LINKS,
  FOOTER_POLICY,
  FOOTER_SUPPORT,
  SOCIALS,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter py-10 lg:py-20 bg-white text-gray-600">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div>
            <Link href="/" className="mb-10">
              <Image src="/Logo.png" alt="logo" width={120} height={29} />
            </Link>
            <div className="flex flex-col gap-2 my-5 lg:mt-20">
              <p className="cursor-pointer">hello@juray.com</p>
              <p className="cursor-pointer">+234 802 345 6742</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="regular-14 flex flex-col gap-4">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex gap-5 flex-col">
              <FooterColumn title={FOOTER_POLICY.title}>
                {FOOTER_POLICY.links.map((link) => (
                  <Link
                    href="/"
                    key={link}
                    className="flex gap-4 md:flex-co lg:flex-row"
                  >
                    <p className="regular-14 whitespace-nowra">{link}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex gap-5 flex-col">
              <FooterColumn title={FOOTER_SUPPORT.title}>
                {FOOTER_SUPPORT.links.map((link) => (
                  <Link
                    href="/"
                    key={link}
                    className="flex gap-4 md:flex-collg:flex-row"
                  >
                    <p className="regular-14 whitespace-nowrap">{link}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export const Copyright = () => {
  return (
    <div className="bg-gray-900 py-5 flex flex-col gap-4 flexCenter lg:flexBetween text-blue-200 padding-container">
      <p className="regular-14">
        Copyright © 2024 by <span className="text-white">Juray Business</span>{" "}
        All Rights Reserved
      </p>
      <p className="regular-14"> Terms of Use | Privacy Ploicy</p>
    </div>
  );
};

export default Footer;
