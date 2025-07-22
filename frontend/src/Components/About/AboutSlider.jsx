import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Testimonials } from "../../Utils/Constant";

const AboutSlider = () => {
  return (
    <div className="flex flex-col max-w-6xl w-full p-6 gap-4 mb-8 mt-5">
      <h1 className="text-orange-500 text-center font-serif lg:text-[50px] md:text-[45px] text-[45px] font-bold leading-tight my-4">
        Testimonials
      </h1>
      <Swiper
        pagination={true}
        modules={[Pagination, EffectCards, Autoplay]}
        effect={'cards'}
        spaceBetween={20}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="w-full flex p-4"
      >
        {Testimonials.map((testimonial, index) => {
          return (
            <SwiperSlide
              key={index}
              className="flex flex-col bg-slate-100 p-6 rounded-xl items-center h-auto justify-between shadow-md"
            >
              <p className="font-normal text-gray-800 text-[14px] text-center text-ellipsis">
                {testimonial?.feedback}
              </p>
              <div className="flex flex-col items-center">
                <h1 className="font-bold text-gray-900 text-[22px] md:text-left text-center">
                  {testimonial?.name}
                </h1>
                <h2 className="font-normal text-purple-900 text-[14px] md:text-left text-center">
                  {testimonial?.title}
                </h2>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AboutSlider;
