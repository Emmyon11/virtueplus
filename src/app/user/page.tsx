import ProfileDetail from './components/ProfileDetail';
import Orders from './components/Orders';
const User = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hello world */}
      <div
        className="relative  pb-8 pt-5 lg:pt-8  hidden lg:flex items-center"
        style={{
          minHeight: 500,
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* Mask */}
        <span className="absolute z-0  inset-0 w-full h-full transition-all duration-150 ease-in bg-gray-600 opacity-70" />
        {/* Header container */}
        <div className="w-full mx-auto px-4 flex items-center">
          <div className="flex -mx-4 flex-wrap">
            <div className="relative w-full min-h-1 px-4 ">
              <h1 className="font-nunito font-bold text-white text-8xl">
                Welcome Jesseca
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Profile detail and form */}
      <div className="lg:flex grid gap-5 lg:gap-0 lg:-mt-20 lg:mx-6">
        <Orders />
        <ProfileDetail />
      </div>
    </div>
  );
};
export default User;
