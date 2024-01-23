import Link from 'next/link';
import { FaChartBar, FaShoppingBag } from 'react-icons/fa';
import { FaCartPlus, FaUser } from 'react-icons/fa6';

const side_links = [
  { name: 'dashboard', link: '/admin', icon: <FaChartBar /> },
  { name: 'products', link: '/admin/products', icon: <FaShoppingBag /> },
  { name: 'orders', link: '/admin/orders', icon: <FaCartPlus /> },
  { name: 'users', link: '/admin/users', icon: <FaUser /> },
];

const SideLinks = () => {
  return (
    <main className="grid gap-6 text-xl font-mukta font-semibold">
      {side_links.map((link) => {
        return (
          <Link key={link.link} className="flex gap-3" href={link.link}>
            <div className="text-2xl">{link.icon}</div>
            {link.name}
          </Link>
        );
      })}
    </main>
  );
};
export default SideLinks;
