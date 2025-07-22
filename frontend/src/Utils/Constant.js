import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import maths from "../assets/Illustrations/Maths.png";
import heart from "../assets/Png/heart.png";
import hat from "../assets/Png/hat.png";
import Board from "../assets/Png/Board.png";
import book from "../assets/Png/book.png";
import globe from "../assets/Png/globe.png";
import science from "../assets/Illustrations/Science.png";
import physics from "../assets/Illustrations/Physics.png";
import chemistry from "../assets/Illustrations/Chemistry.png";
import bolt from "../assets/Png/bolt.png";
import barchart from "../assets/Png/barchart.png";
import mission from "../assets/Png/mission.png";
import user from "../assets/Png/user.png";

export const NavLinks = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "About Us",
    url: "/aboutus",
  },
  {
    id: 3,
    text: "Our Courses",
    url: "/our-courses",
  },
  {
    id: 4,
    text: "Careers",
    url: "/careers",
  },
  {
    id: 5,
    text: "Contact Us",
    url: "/contact",
  },
];

export const SocialLinks = [
  {
    id: 1,
    name: "Facebook",
    url: "/",
    icon: FaFacebook,
  },
  {
    id: 2,
    name: "Instagram",
    url: "/",
    icon: FaInstagram,
  },
  {
    id: 3,
    name: "Youtube",
    url: "/",
    icon: FaYoutube,
  },
];

export const HowWeWorkList = [
  {
    id: 1,
    title: "Critical Thinking",
  },
  {
    id: 2,
    title: "Creativity",
  },
  {
    id: 3,
    title: "Curiosity",
  },
  {
    id: 4,
    title: "Resilience",
  },
  {
    id: 5,
    title: "Focus",
  },
  {
    id: 6,
    title: "Self Regulation",
  },
  {
    id: 7,
    title: "Memory",
  },
  {
    id: 8,
    title: "Comprehension & Communication",
  },
];

export const Questions = [
  {
    id: 1,
    question: "What is the application process?",
    answer:
      "Applicants should submit their application online via this website. Structured questions will enable you to exhibit your potential to work at Drona Learning Academy and the job position for which you have applied. You should also ensure that you have uploaded your CV, and filled in all required criteria’s while applying, to enable a thorough review of your application.",
    isOpen: false,
  },
  {
    id: 2,
    question: "How do I apply for a position?",
    answer:
      "First, review the job description you are interested in applying and confirm you meet all the requirements for the position. Then click the Apply Now button, create a profile and complete the application form, or log in with an existing profile account and update your information. Complete the required steps to submit your application.",
    isOpen: false,
  },
  {
    id: 3,
    question: " How do I search for job opportunities?",
    answer:
      "On the Career site homepage, click the current openings option. Select your search criteria and you will be presented with opportunities that match your criteria as you click on view jobs on the career opportunities search page. To view each position’s description, click on the position’s title in the search results. Note: If nothing is returned when you perform a search, it indicates that no current vacancies exist in your preferred geographic location and/or within your selected job area.",
    isOpen: false,
  },
  {
    id: 4,
    question: "What will happen after I complete the online application?",
    answer:
      "You will receive an automatic message from the system confirming the successful receipt of your application. Once submitted, your resume enters our candidate tracking system. Upon scrutiny of your filled in application and being identified as potential applicant for the job role, you will be contacted via telephone/e-mail to take part in the next phase of the recruitment process. You will participate in competency based job interview(s) and the number of interview(s) may vary by role.",
    isOpen: false,
  },
  {
    id: 5,
    question: "Is my personal data safe when I apply online?",
    answer:
      "Yes. Your personal data in your online application is protected in a secure database. Without your username and password, nobody can access your information. Your personal information will not be shared by us to anyone.",
    isOpen: false,
  },
  {
    id: 6,
    question:
      "Will I be considered for other positions when applying for a specific position?",
    answer:
      "Yes – your candidate profile will be stored in our database and will be available to our Staffing team to be considered for alternate job opportunities.",
    isOpen: false,
  },
  {
    id: 7,
    question: "How often can I update my profile?",
    answer:
      "Once you have submitted your profile on our site, unfortunately you will not be able to access your profile or the application form for any update. If there is a change in your skills or employment history, you may resubmit the application form once again(if the position/role is still open) or submit another application for any other role that might have published.",
    isOpen: false,
  },
  {
    id: 8,
    question: "Is Background verification mandatory in Drona Learning Academy?",
    answer:
      "Yes – Background check is mandatory and it is initiated immediately after the joining. As part of the background check process, you may be required to provide certain information such as employment references and proof, education documents, address proof, ID proof and provide other information and/or documentation necessary to enable us to comply to company policy.",
    isOpen: false,
  },
  {
    id: 9,
    question:
      "Does Drona Learning Academy hire only experienced people or freshers also?",
    answer:
      "It is vital for our continued success that we bring in teaching faculty who are experienced in Academic, Vocational, Competitive Exam preparation and career enhancement courses. Some of our courses required seasoned and experienced teaching professional who can start quickly and enhance the brand of Drona. There would be opportunity for freshers in specific domains who completes the spectrum of employment from both ends.",
    isOpen: false,
  },
  {
    id: 10,
    question: "Are jobs in Drona Full Time or Part-time?",
    answer:
      "Depending upon the job position some roles are Full-time and some are part-time.",
    isOpen: false,
  },
  {
    id: 11,
    question:
      "I would like to speak to someone about opportunities at Drona Learning Academy?",
    answer:
      "We hope you will find all the information you need about all the job opportunity on this website. We also encourage you to write to us helpus@dronalearning.com for all job inquiries.",
    isOpen: false,
  },
];

export const TeacherData = [
  {
    id: 1,
    role: "Maths Teacher(Grade 6 -12)",
    image: maths,
    responsibilities: [
      "Planning and delivering effective lessons that meet the curriculum(CBSE, ICSE, IGSCE ETC.) and are suitable for all pupils in grade 6 to 12.",
      "Ensuring all your lessons, units, and projects are clearly understood by your pupils.",
      "Staying current with any changes and developments to the national teaching curriculum.",
      "Working with your colleagues to coordinate lesson plans where other subjects can complement your Mathematics lessons.",
      "Being able to adapt your instructional materials and teaching methods to meet the classes varying learning abilities.",
      "Creating lesson plans that deliver a balance of instruction, demonstration, and work time, so that pupils are provided with the opportunity to observe, question, and investigate.",
      "Being creative and enthusiastic about using different teaching methods, including solo work, group work, whole-class work, demonstrations.",
      "Attending meetings, parent's evenings.",
      "Creating a classroom environment where pupils work together to achieve their learning goals.",
      "Helping and supporting individual pupils as required and encouraging them to research topics themselves.",
      "Keeping a register of pupils' attendance, set assignments and homework, mark pupils work, record completion, write progress reports and carry out continuous assessment.",
      "Taking responsibility for the individual's progress and development, feeding this information back to us.",
      "Meeting with parents, guardians or careers to discuss their child/children's progress in the subject and determine learning priorities and any needed resources.",
      "Must have a Post Graduation level education in the relevant subjects. ",
      "Teaching experience of 1-2 years is a plus for this role.",
    ],
  },
  {
    id: 2,
    role: "Science Teacher(Grade 6-10)",
    image: science,
    responsibilities: [
      "Planning and delivering effective lessons that meet the curriculum(CBSE, ICSE, IGSCE ETC.) and are suitable for all pupils in grade 6 to 12.",
      "Ensuring all your lessons, units, and projects are clearly understood by your pupils.",
      "Staying current with any changes and developments to the national teaching curriculum.",
      "Working with your colleagues to coordinate lesson plans where other subjects can complement your Mathematics lessons.",
      "Being able to adapt your instructional materials and teaching methods to meet the classes varying learning abilities.",
      "Creating lesson plans that deliver a balance of instruction, demonstration, and work time, so that pupils are provided with the opportunity to observe, question, and investigate.",
      "Being creative and enthusiastic about using different teaching methods, including solo work, group work, whole-class work, demonstrations.",
      "Attending meetings, parent&apos;s evenings.",
      "Creating a classroom environment where pupils work together to achieve their learning goals.",
      "Helping and supporting individual pupils as required and encouraging them to research topics themselves.",
      "Keeping a register of pupils&apos; attendance, set assignments and homework, mark pupils work, record completion, write progress reports and carry out continuous assessment.",
      "Taking responsibility for the individual&apos;s progress and development, feeding this information back to us.",
      "Meeting with parents, guardians or careers to discuss their child/children&apos;s progress in the subject and determine learning priorities and any needed resources.",
      "Must have a Post Graduation level education in the relevant subjects. ",
      "Teaching experience of 1-2 years is a plus for this role.",
    ],
  },
  {
    id: 3,
    role: "Physics Teacher(Grade 6-12)",
    image: physics,
    responsibilities: [
      "Planning and delivering effective lessons that meet the curriculum(CBSE, ICSE, IGSCE ETC.) and are suitable for all pupils in grade 6 to 12.",
      "Ensuring all your lessons, units, and projects are clearly understood by your pupils.",
      "Staying current with any changes and developments to the national teaching curriculum.",
      "Working with your colleagues to coordinate lesson plans where other subjects can complement your Mathematics lessons.",
      "Being able to adapt your instructional materials and teaching methods to meet the classes varying learning abilities.",
      "Creating lesson plans that deliver a balance of instruction, demonstration, and work time, so that pupils are provided with the opportunity to observe, question, and investigate.",
      "Being creative and enthusiastic about using different teaching methods, including solo work, group work, whole-class work, demonstrations.",
      "Attending meetings, parent&apos;s evenings.",
      "Creating a classroom environment where pupils work together to achieve their learning goals.",
      "Helping and supporting individual pupils as required and encouraging them to research topics themselves.",
      "Keeping a register of pupils&apos; attendance, set assignments and homework, mark pupils work, record completion, write progress reports and carry out continuous assessment.",
      "Taking responsibility for the individual&apos;s progress and development, feeding this information back to us.",
      "Meeting with parents, guardians or careers to discuss their child/children&apos;s progress in the subject and determine learning priorities and any needed resources.",
      "Must have a Post Graduation level education in the relevant subjects. ",
      "Teaching experience of 1-2 years is a plus for this role.",
    ],
  },
  {
    id: 4,
    role: "Chemistry Teacher(Grade 6-12)",
    image: chemistry,
    responsibilities: [
      "Planning and delivering effective lessons that meet the curriculum(CBSE, ICSE, IGSCE ETC.) and are suitable for all pupils in grade 6 to 12.",
      "Ensuring all your lessons, units, and projects are clearly understood by your pupils.",
      "Staying current with any changes and developments to the national teaching curriculum.",
      "Working with your colleagues to coordinate lesson plans where other subjects can complement your Mathematics lessons.",
      "Being able to adapt your instructional materials and teaching methods to meet the classes varying learning abilities.",
      "Creating lesson plans that deliver a balance of instruction, demonstration, and work time, so that pupils are provided with the opportunity to observe, question, and investigate.",
      "Being creative and enthusiastic about using different teaching methods, including solo work, group work, whole-class work, demonstrations.",
      "Attending meetings, parent&apos;s evenings.",
      "Creating a classroom environment where pupils work together to achieve their learning goals.",
      "Helping and supporting individual pupils as required and encouraging them to research topics themselves.",
      "Keeping a register of pupils&apos; attendance, set assignments and homework, mark pupils work, record completion, write progress reports and carry out continuous assessment.",
      "Taking responsibility for the individual&apos;s progress and development, feeding this information back to us.",
      "Meeting with parents, guardians or careers to discuss their child/children&apos;s progress in the subject and determine learning priorities and any needed resources.",
      "Must have a Post Graduation level education in the relevant subjects. ",
      "Teaching experience of 1-2 years is a plus for this role.",
    ],
  },
];

export const AboutArticleData = [
  {
    id: 1,
    title: "Our Mission",
    content:
      "To employ our unique teaching methodology that helps students deepen their knowledge and skills to appreciate, and find their love of learning.  also encourage them to apply their learnings in a way that will help them build their future.",
    img: mission,
  },
  {
    id: 2,
    title: "Our Vision",
    content:
      "To be recognized as a premier learning academy in bridging learning gaps in students and self-assess one’s potential for skill and knowledge thus ensuring trustworthiness in whatever we impart.",
    img: bolt,
  },
  {
    id: 3,
    title: "Our Goal",
    content:
      "Ensure that students enjoy the process of learning and promote self learning. Bringing perfection in their learning ability with special focus to deepen their knowledge and develop their skills.Practical application of knowledge to shape future. ",
    img: barchart,
  },
];

export const AboutStrengthsData = [
  {
    id: 1,
    title: "Extremely Passionate Team",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio hic odio odit inventore saepe tempora delectus vel itaque est? Odio, quidem? Tenetur beatae molestiae, sequi quam distinctio facere aspernatur!l",
    img: heart,
  },
  {
    id: 2,
    title: "Highly Educated Teachers",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio hic odio odit inventore saepe tempora delectus vel itaque est? Odio, quidem? Tenetur beatae molestiae, sequi quam distinctio facere aspernatur!l",
    img: hat,
  },
  {
    id: 3,
    title: "Widely Experienced Faculty",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio hic odio odit inventore saepe tempora delectus vel itaque est? Odio, quidem? Tenetur beatae molestiae, sequi quam distinctio facere aspernatur!l",
    img: globe,
  },
  {
    id: 4,
    title: "Unique Teaching Methodology",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio hic odio odit inventore saepe tempora delectus vel itaque est? Odio, quidem? Tenetur beatae molestiae, sequi quam distinctio facere aspernatur!l",
    img: Board,
  },
  {
    id: 5,
    title: "Personalized Attention on Students",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio hic odio odit inventore saepe tempora delectus vel itaque est? Odio, quidem? Tenetur beatae molestiae, sequi quam distinctio facere aspernatur!l",
    img: mission,
  },
  {
    id: 6,
    title: "Promote Self Learning",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio hic odio odit inventore saepe tempora delectus vel itaque est? Odio, quidem? Tenetur beatae molestiae, sequi quam distinctio facere aspernatur!l",
    img: book,
  },
];

export const WhatWeDo = [
  {
    id: 1,
    title: "Focus on the need of every child",
  },
  {
    id: 2,
    title: "Live Interactive Customized Online Sessions",
  },
  {
    id: 3,
    title: "Identify and bridge Learning Gaps",
  },
  {
    id: 4,
    title: "Doubt clarification classes to facilitate self learning",
  },
  {
    id: 5,
    title: "Tests at Regular intervals to improve perfection",
  },
];

export const Testimonials = [
  {
    id: 1,
    name: "Bhavya Dhanraj",
    title: "Mother of Aditya Dhanraj(2019-2022)",
    feedback:
      "Drona Learning Academy is highly valued. I thank the team of Drona Academy for understanding and providing the right support for my son. They have exceptionally good teachers, each one of them that we (my son and I) have interacted with have a great impact. Wishing you many more success for another academic year ahead looking forward to collaborating with you again.",
    image: user,
  },
  {
    id: 2,
    name: "Ranjana R Kamath",
    title: "2019",
    feedback:
      "Mathematics being one of the most important subjects, it is especially important to have a solid base especially in grade XI and XII. Having not attended tuitions before, I was a little apprehensive while joining the mathematics classes in Drona as the portion taught in school and these classes may lead to confusion. This perception of mine changed after I joined Jayanti ma,am's classes. She is a teacher every student must have and I feel very privileged to get her guidance. I was also privileged to have the guidance and physics from Aditi Dutta ma,am and chemistry from Neetu ma,am. Their extraordinary approach relate concepts not only helped me understand each topic clearly, but also assisted me to effectively applying the concepts in answering the questions. Regular worksheets for self-practise helped realise the mistake I made and each error that I made was discussed and remediated. This self realisation has helped me improve my approach to learning and score exceptionally good marks in grade XII.",
    image: user,
  },
  {
    id: 3,
    name: "Farooq",
    title: "Father of Danish(2018-2019)",
    feedback:
      "Drova learning has been a step forward in E learning.It does away with the hassels of travelling to the place of tuition and bundled with many other students.In Drona ,the one-to-one learning is great as it focuses on one student alone. The faculty is well educated and the administrator Dr. Abhilasha is co-operative and empathetic in her dealing. I have found it to be a wonderful way of learning and recommend it to all the parents who are seeking additional classes for learning and doubt clarification of their wards. My son benefited from it immensely in grade XII wish you all the best.",
    image: user,
  },
  {
    id: 4,
    name: "Bhadra",
    title: "2018-2021",
    feedback:
      "I'd like to thank Jayanti Mam from the bottom of my heart for making mathematics so very interesting and exciting to study. These three years studying maths was an incredibly unique learning process for me personally, I learnt how to study. Recently I was listening to an audio book which talks about how to retain knowledge and I realised all along with taught me to study that way. The main message of the book is to recall and enforce information into your memory .And you helped me learn this technique practically.Thank you for making me fall in love with this subject again.",
    image: user,
  },
  {
    id: 5,
    name: "Amit Naik",
    title: "Father of Aanya Naik(2017-2018)",
    feedback:
      "Hi, our overall experience with Drona Learning Academy for online learning has been awesome and knowledgeable which helped our daughter studying in class 7th. She got to learn a lot new techniques and tips to enhance her learning capabilities and experience. I would say it is one of the best platforms as it has many features which are out of the box,like live interaction or topic of various subjects, which in my opinion is the best feature as it helps students to learn by visualisation. The platform also helps teachers to prepare lesson plans very accurately by focusing on key points of the topic as desired by the student and adding extra efforts to enrich the interactions.",
    image: user,
  },
  {
    id: 6,
    name: "Shashwat",
    title: "2018-2021",
    feedback:
      "The best for building your basic concepts. When I joined Drona Learning Academy in grade X in the year 2018 I had no idea what to expect from the online classes.However with the help of Jayanti Dutta mam and her team I was guided step by step for my preparation. They are the best concept builders and their way of teaching leaves no space for doubt.Questions are always encouraged and answered.If you want to have a good grasp on subjects then Drona Learning academy is the best.",
    image: user,
  },
  {
    id: 7,
    name: "Nandana U Nair",
    title: "2018-2021",
    feedback:
      "Excellent!! Excellent!! Excellent!! This is what comes to my mind when I think about Drona. I attended the mathematics and chemistry sessions for a grade X and biology sessions for grade XII in Drona. I had high degree of maths phobia till Jayanti Mam started teaching me maths, now I have the courage to pursue math for my higher studies. She not only teaches maths but also removes the fear in the students mind making them self confident .I had conceptual misunderstandings which were cleared by Jayanti Mam which in turn held to score incredibly good marks.Many students find chemistry a dry subject.But the teaching techniques Abhilasha Mam and Neetu Mam makes one enjoy learning chemistry. Her methodology to connect the subject to the real life situations helped me immensely to grasp the subject very easily.Also the manner with which Abhilasha Mam explained the topics in biology in grade XII was amazing. They are very professional, highly knowledgeable ,moreover they are very sincere. I thank the teachers-Jayanti mam. Abhilasha mam , Neetu Mam and the entire drona team for the support extended to me. Dear students you can join Drona without a second thought.You are safe in their hands",
    image: user,
  },
];

export const Filters = ["Teacher Resources", "Student Resources"];

export const QuizCategories = ["6", "7", "8", "9", "10", "11", "12"];
