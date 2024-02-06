import { generateReactHelpers } from '@uploadthing/react/hooks';

import type { OurFileRouter } from '@/app/api/uploadthing/core';

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();

export const uploadDoc = async (file: File[]) => {
  try {
    const res = await uploadFiles('docUploader', {
      files: Array.from(file),
    });
    return res[0].url;
  } catch (error) {
    console.log(error);
  }
};
export const uploadDp = async (file: File) => {
  try {
    const res = await uploadFiles('profilePicture', {
      files: Array.from([file]),
    });
    return res[0].url;
  } catch (error) {
    console.log(error);
  }
};
