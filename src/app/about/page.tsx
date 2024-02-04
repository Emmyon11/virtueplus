import AboutImage from './components/AboutImage';
import AboutText from './components/AboutText';

const About = () => {
  return (
    <div className="relative min-h-screen bg-secondary flex flex-col">
      {/* image section */}
      <div className="h-3/5">
        <AboutImage />
      </div>

      {/*  text section */}
      <div className="h-2/5 flex text-center p-10 my-auto justify-center">
        <AboutText />
      </div>
    </div>
  );
};
export default About;
