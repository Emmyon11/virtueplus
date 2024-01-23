'use server';
import prisma from '@/lib/primaDB';
import { ProductTypes } from '@prisma/client';
import { NextResponse } from 'next/server';

export const getSingleCategory = async (category: ProductTypes) => {
  try {
    const res = await prisma.product.findMany({
      where: {
        type: category,
      },
    });
    return res;
  } catch (error) {
    console.log('Error getting single Category', error);
  }
};
