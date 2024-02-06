'use client';
import { toast } from '@/components/ui/use-toast';
import { ChangeEvent, ReactNode, useRef, useState } from 'react';
import { useMutation } from 'react-query';

import { updateUser } from '../admin/users/action';
import { User } from '@prisma/client';
import { uploadDp } from '@/utils/uploadthing';
import { FaSpinner } from 'react-icons/fa6';

const UploadDpBtn = ({
  children,
  email,
}: {
  children: ReactNode;
  email: string;
}) => {
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const updateUserImage = useMutation((data: Partial<User>) => {
    return updateUser(email, data);
  });
  const handleClick = () => {
    // 👇️ open file input box on click of another element
    inputRef.current.click();
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj || !fileObj.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      toast({
        variant: 'destructive',
        title: `Upload failed`,
        description: `You have to select a valid image`,
      });
      return false;
    }
    if (fileObj.size > 4194304 * 2) {
      toast({
        variant: 'destructive',
        title: `Upload failed`,
        description: `image file too large`,
      });
      return false;
    }
    try {
      setLoading(true);
      const res = await uploadDp(fileObj);
      await updateUserImage.mutateAsync({ image: res });
      setLoading(false);
      toast({
        variant: 'default',
        title: `Upload sucesseful`,
        description: `Your display image is updated sucessfully`,
      });
      return;
    } catch (error) {
      console.log(error);
    }
  };

  if (updateUserImage.isError) {
    toast({
      variant: 'destructive',
      title: `Upload failed`,
      description: `${updateUserImage.error}`,
    });
  }

  return (
    <div>
      <div>
        <input
          className="hidden"
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
        />
        <button onClick={handleClick}>
          {loading ? (
            <div className="animate-spin">
              <FaSpinner />
            </div>
          ) : (
            <div className="">{children}</div>
          )}
        </button>
      </div>
    </div>
  );
};
export default UploadDpBtn;
