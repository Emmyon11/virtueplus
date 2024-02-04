'use client';
import { DrawerAndDialog } from '@/app/components/DrawerAndDialog';
import UserUpdateForm from './UserUpdateForm';

const EditButton = () => {
  return (
    <DrawerAndDialog
      className="bg-gradient-to-r bg-green_custom text-white hover:bg-orange-500 hover:text-white"
      buttonText={'Edit Profile'}
    >
      <UserUpdateForm />
    </DrawerAndDialog>
  );
};
export default EditButton;
