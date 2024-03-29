import { formatDate, formatPrice } from '@/lib/utils';
import { Order, Product, User } from '@prisma/client';
import Image from 'next/image';
import { FaImage } from 'react-icons/fa';

import Link from 'next/link';

const UserCard = ({ user }: { user: User }) => {
  const image = user.image;
  return (
    <div className="space-y-3 py-2 cursor-pointer">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center space-x-4">
          <Link
            href={`/admin/users/${user.email.toString()}`}
            className="relative  h-16 w-16 min-w-fit overflow-hidden rounded-full"
          >
            {image ? (
              <Image
                src={image}
                alt={user.name}
                fill
                sizes="50%"
                className="absolute object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-secondary">
                <FaImage
                  aria-hidden="true"
                  className="h-4 w-4 text-muted-foreground"
                />
              </div>
            )}
          </Link>

          <div className="flex flex-col self-start">
            <span className="line-clamp-1 text-sm font-medium mb-1">
              {user.email}
            </span>

            <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
              {user.name}
            </span>
          </div>
        </div>

        {/* <div className="flex flex-col space-y-1 font-medium">
          <span className="ml-auto line-clamp-1 text-sm">
            {formatPrice(u)}
          </span>
          {quantity > 1 ? (
            <div className="text-end text-xs text-green_custom">
              X {quantity}
            </div>
          ) : (
            ''
          )}
        </div> */}
      </div>
    </div>
  );
};

export default UserCard;
