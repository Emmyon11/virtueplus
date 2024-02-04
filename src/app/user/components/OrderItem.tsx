'use client';
import { formatPrice } from '@/lib/utils';
import { OrderItem as Item, Product, ProductTypes } from '@prisma/client';
import Image from 'next/image';
import { FaImage } from 'react-icons/fa';
import { FaDownload, FaX } from 'react-icons/fa6';

import DownloadBtn from './DownloadBtn';

const OrderItem = ({
  product,
  quantity,
  itemId,
}: {
  product: Item;
  quantity: number;
  itemId: string;
}) => {
  const image = product.productImg;
  return (
    <div className="space-y-3 py-2 cursor-pointer">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
            {image ? (
              <Image
                src={image}
                alt={product.productTitle}
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
          </div>

          <div className="flex flex-col self-start">
            <span className="line-clamp-1 text-sm font-medium mb-1">
              {product.productTitle}
            </span>

            <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
              {product.productType}
            </span>
            {product.productType == ProductTypes.Courses ? (
              <div className="">
                <DownloadBtn
                  fileName={product.productTitle}
                  pdfUrl={product?.pdfUrl!}
                >
                  <FaDownload className="text-xl text-green_custom" />
                </DownloadBtn>
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col space-y-1 font-medium">
          <span className="ml-auto line-clamp-1 text-sm">
            {formatPrice(product.price)}
          </span>
          {quantity > 1 ? (
            <div className="text-end text-xs text-green_custom">
              X {quantity}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
