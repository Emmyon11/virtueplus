import { formatDate, formatPrice } from '@/lib/utils';
import { Order, Product, User } from '@prisma/client';
import Image from 'next/image';
import { FaImage } from 'react-icons/fa';

import Link from 'next/link';

const AOrderItem = ({ user, order }: { user: User; order: Order }) => {
  const image = user.image;
  return (
    <div className="space-y-3 py-2 cursor-pointer">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center space-x-4">
          <Link
            href={`/admin/users/${user.email.toString()}`}
            className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded"
          >
            {image ? (
              <Image
                src={image}
                alt={user.name!}
                fill
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
            <span className="line-clamp-1 text-xs lg:text-sm font-medium mb-1">
              {user.email}
            </span>

            <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
              {formatDate(order?.createdAt!)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AOrderItem;
