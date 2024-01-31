import SideLinks from './SideLinks';

const SideBar = () => {
  return (
    <main className="fixed left-0 flex justify-center">
      <div className="p-9 min-h-screen">
        <SideLinks />
      </div>
    </main>
  );
};
export default SideBar;
