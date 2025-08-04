import { Link } from "react-router";

const AboutPreview = () => {
  return (
    <div className="mt-8 mx-auto px-6 py-16 bg-gray-900">
      {/* Intro */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10">
        <img
          src="/images/profile.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div>
          <h1 className="text-3xl text-center md:text-left font-bold text-white mb-2">
            Hey, I'm Rahul 👋
          </h1>
          <p className="text-gray-300 text-lg text-center md:text-left">
            I'm a passionate web developer and content creator who loves
            building friendly digital experiences and helping others grow into
            confident, modern developers.
          </p>
          <div className="text-center md:text-left mt-5">
            <Link
              to="/about"
              className="text-lg text-blue-500 hover:text-blue-400 font-semibold cursor-pointer"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;
