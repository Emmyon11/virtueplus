'use client';
import { DrawerAndDialog } from '@/app/components/DrawerAndDialog';
import UserUpdateForm from './UserUpdateForm';

const EditButton = ({ email }: { email: string }) => {
  return (
    <DrawerAndDialog
      className="bg-gradient-to-r bg-green_custom text-white hover:bg-orange-500 hover:text-white"
      buttonText={<h1>Edit Profile</h1>}
    >
      <UserUpdateForm email={email} />
    </DrawerAndDialog>
  );
};
export default EditButton;
