'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { FaSpinner } from 'react-icons/fa6';

import { ProductFormSchema, TProductFormSchema } from './ptype';
import { Product, ProductTypes } from '@prisma/client';
import { addProduct } from '../action';
import { toast } from '@/components/ui/use-toast';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import axios from 'axios';
import { uploadFiles } from '@/utils/uploadthing';

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TProductFormSchema>({ resolver: zodResolver(ProductFormSchema) });
  const [selectedImage, setSelectedImage] = useState<File[]>();

  const submit = async (data: TProductFormSchema) => {
    try {
      let image: string = null;
      if (data.image) {
        // Uploading image to s3 bucket
        try {
          const res = await uploadFiles('profilePicture', {
            files: Array.from(data.image),
          });
          image = res[0].url;
          console.log('success');
        } catch (error) {
          console.log(error);
        }
      }
      await addProduct({ ...data, image: image });
      toast({
        variant: 'default',
        title: `${data.name} added to database sucessfully`,
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'error!!!',
        description: 'something went wrong',
      });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = Array.from(event.target.files);
    if (!file) return;
    setSelectedImage(() => {
      return file;
    });
  };

  return (
    <main>
      <div className="p-4">
        <form
          className="grid font-nunito gap-2 min-w-full"
          onSubmit={handleSubmit(submit)}
        >
          <div className="">
            <Label>Product Name</Label>
            <Input
              type="text"
              placeholder="Product name"
              {...register('name')}
            />
            {errors?.name && <p>{errors.name.message}</p>}
          </div>
          <div className="">
            <Label>Price in naira</Label>
            <Input type="number" placeholder="3000" {...register('price')} />
            {errors?.price && <p>{errors.price.message}</p>}
          </div>
          <div className="">
            <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Price in naira
            </Label>
            <select
              {...register('type')}
              defaultValue={ProductTypes.Goods}
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={ProductTypes.Goods}>Goods</option>
              <option value={ProductTypes.Courses}>Courses</option>
              <option value={ProductTypes.Services}>Services</option>
            </select>
          </div>
          <div className="">
            <Label>Description</Label>
            <Input
              type="text"
              placeholder="About Product"
              {...register('description')}
            />
            {errors?.description && <p>{errors.description.message}</p>}
          </div>
          <div className="">
            <Label>Upload Product Image</Label>
            <Input
              type="file"
              placeholder="example@png"
              onChange={handleChange}
              {...register('image')}
            />
            {errors?.image && <p>{errors?.image?.message.toString()}</p>}
          </div>
          <div className="">
            <Label>Manufacturer</Label>
            <Input
              type="text"
              placeholder="example ltd"
              {...register('manufacturer')}
            />
            {errors?.manufacturer && <p>{errors.manufacturer.message}</p>}
          </div>
          <div className="flex items-center justify-center mt-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-green_custom"
            >
              {isSubmitting ? (
                <div className="animate-spin">
                  <FaSpinner />
                </div>
              ) : (
                <div>Upload</div>
              )}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};
export default ProductForm;
