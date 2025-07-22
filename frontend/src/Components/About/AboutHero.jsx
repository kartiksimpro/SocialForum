import image from '../../assets/Pics/OnlineClassroom.png'

const AboutHero = () => {
  return (
    <section className="flex md:flex-row flex-col max-w-[1080px] p-4 md:gap-4 gap-16 mb-16">
      <div className="w-full bg-purple-100 mt-8 rounded-lg flex items-center justify-center flex-col p-5 shadow-lg">
        <h1 className="text-purple-950 font-serif lg:text-[40px] md:text-[35px] text-[35px] font-bold leading-tight my-4">
          Get to know us
        </h1>
        <p className="font-serif lg:text-[16px] md:text-[14px] text-[16px] mb-10 font-medium text-center">
          Established in 2018, Drona Learning Academy is the brainchild of two
          women educationists, who with their passion and experience have
          developed a platform that attempts to identify and bridge the learning
          gaps of students all over.
          <br /><br />
          Our goal is to make students enjoy the subjects and study in the most effective manner. Emphasising on understanding, diligence, and self-realisation, Drona has trained more than 250 students since 2018.
          <br /><br />
          We are experts in Mathematics and Science, having grown from a 2 member team in 2018 to a 16-member team in 2022. We have a carefully curated group of teachers who are hired after a rigorous selection process. One good teacher can impact the entire learning experience of a student, and we have tried our best to provide such mentors to all our students.
          <br /><br />
          Since 2020 we have been helping students improve their language skills too. Well-experienced and proficient language experts in Hindi, Sanskrit, French and English are a part of our team as well.
          <div className='w-full flex items-center justify-center mt-5 p-4'>
            <img src={image} className="h-[300px]" alt="Online classroom"/>
          </div>
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
