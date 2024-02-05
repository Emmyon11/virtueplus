import Link from 'next/link';

import {
  FaAngleDoubleRight,
  FaFacebook,
  FaFacebookSquare,
} from 'react-icons/fa';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaSkype,
  FaTwitter,
} from 'react-icons/fa6';
import { NewsLetter } from '@/app/components/NewsLetter';

const links = [
  { name: 'Home', link: '/' },
  { name: 'goods', link: '/goods' },
  { name: 'services', link: '/services' },
  { name: 'courses', link: '/courses' },
  { name: 'faq', link: '/faq' },
  { name: 'about', link: '/about' },
];
const Footer = () => {
  return (
    <main>
      <div className="bg-black text-white relative h-full font-mukta p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-7">
        <div className="tracking-widest uppercase text-3xl font-semibold">
          Virtueplus<span className="text-xl text-green_custom">2</span>
        </div>
        {/* Address */}
        <div className="font-mukta">
          Plot 1019 Gimbiya Street Area 11 Abuja, Nigeria
        </div>
        <div className="font-mukta">
          <div className="">
            <span className="font-semibold capitalize">phone: </span>+234 80 637
            24068
          </div>
          <div className="">
            <span className="font-semibold capitalize">email: </span>{' '}
            Virtueplusltd.com
          </div>
        </div>
        {/* Socials */}
        <div className="flex md:h-8 gap-3">
          <div className="bg-gray-900  p-2 rounded-sm hover:bg-green_custom hover:text-black duration-150 cursor-pointer">
            <FaFacebookF />
          </div>
          <div className="bg-gray-900 p-2 rounded-sm hover:bg-green_custom hover:text-black duration-150 cursor-pointer">
            <FaTwitter />
          </div>
          <div className="bg-gray-900 p-2 rounded-sm hover:bg-green_custom hover:text-black duration-150 cursor-pointer">
            <FaInstagram />
          </div>
          <div className="bg-gray-900 p-2 rounded-sm hover:bg-green_custom hover:text-black duration-150 cursor-pointer">
            <FaSkype />
          </div>
          <div className="bg-gray-900 p-2 rounded-sm hover:bg-green_custom hover:text-black duration-150 cursor-pointer">
            <FaLinkedin />
          </div>
        </div>
        {/* Links */}
        <div className="grid gap-3 capitalize">
          <div className="tracking-wider text-xl font-semibold">
            useful links
          </div>
          {links.map((link) => {
            return (
              <Link
                className="flex items-center gap-2"
                href={link.link}
                key={link.link}
              >
                <FaAngleDoubleRight className="text-green_custom" />
                <div className="hover:text-green_custom duration-200">
                  {link.name}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="grid gap-3">
          <div className="tracking-wider  text-xl w- font-semibold">
            Our Newsletter
          </div>
          <div className="">
            Enter your email to subscribe for our news letter
          </div>
          <NewsLetter
            classnameForm="gap-0"
            classnameButton="rounded-l-none hover:bg-green_custom hover:text-black text-xl duration-200"
            classnameInput="rounded-r-none min-w-60 lg:w-80"
          />
        </div>
      </div>
    </main>
  );
};
export default Footer;
