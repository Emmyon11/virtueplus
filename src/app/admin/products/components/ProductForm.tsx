'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { FaSpinner } from 'react-icons/fa6';

import { ProductFormSchema, TProductFormSchema } from './ptype';
import { ProductTypes } from '@prisma/client';
import { addProduct } from '../action';
import { toast } from '@/components/ui/use-toast';
import { ChangeEvent, useState } from 'react';
import { uploadDoc, uploadFiles } from '@/utils/uploadthing';

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TProductFormSchema>({ resolver: zodResolver(ProductFormSchema) });
  const [iscourse, setIsCourse] = useState<boolean>(false);

  const submit = async (data: TProductFormSchema) => {
    try {
      let image: string | null = null;
      let pdfUrl: string | null = null;
      if (data.image) {
        // Uploading image to s3 bucket
        try {
          const res = await uploadFiles('profilePicture', {
            files: Array.from(data.image),
          });
          image = res[0].url;
        } catch (error) {
          console.log(error);
        }
      }
      if (data.pdfFile) {
        // Uploading image to s3 bucket
        try {
          const res = await uploadDoc(data.pdfFile);
          pdfUrl = res!;
        } catch (error) {
          console.log(error);
        }
      }
      const price = parseFloat(data.price);
      await addProduct({
        name: data.name,
        description: data.description,
        manufacturer: data.manufacturer,
        type: data.type,
        image: image,
        fileUrl: pdfUrl,
        price: price,
      });
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
              {...register('type', {
                onChange(event: ChangeEvent<HTMLSelectElement>) {
                  setIsCourse(event.target.value === 'Courses');
                },
              })}
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
              {...register('image')}
            />
            {errors?.image && <p>{errors?.image?.message!.toString()}</p>}
          </div>
          {iscourse ? (
            <div className="">
              <Label>Upload course pdf</Label>
              <Input
                type="file"
                placeholder="example@png"
                {...register('pdfFile')}
              />
              {errors?.pdfFile && <p>{errors?.pdfFile?.message!.toString()}</p>}
            </div>
          ) : null}

          <div className="">
            <Label>{iscourse ? 'Author' : 'Manufacturer'}</Label>
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
