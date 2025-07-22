import image from "../../assets/Pics/son-father.jpg";

const HomeTestimonials = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-0 gap-16 items-center bg-violet-900/10 p-10 rounded-lg shadow-md max-w-6xl mx-auto min-h-96">
      <div className="md:w-1/3 w-full">
        <img
          src={image}
          alt="Parent and child"
          className="rounded-lg object-cover h-[500px]"
        />
      </div>
      <div className="md:w-2/3 w-full pl-6">
        <div className="relative">
          <span className="text-orange-500 text-[80px] absolute -top-14 -left-6">
            “
          </span>
          <p className="text-gray-800 text-[28px] leading-relaxed">
            I am delighted to see my child trying to pick up new interests on
            his own. And he has become more cheerful now.
          </p>
        </div>
        <div className="mt-6">
          <p className="text-gray-800 font-semibold text-lg">Satyendra Shetty</p>
          <p className="text-gray-500 text-sm">Parent of 10 year old</p>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
