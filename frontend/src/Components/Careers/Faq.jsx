import { useState } from "react"
import { Questions } from "../../Utils/Constant";
import Question from "./Question";


const Faq = () => {
  const [selectedDiv, setSelectedDiv] = useState(null)
  const handleDivClick = (index) => {
    setSelectedDiv(selectedDiv === index ? null : index);
  };

  return (
    <div className="max-w-3xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {Questions.map((item, index) => (
            <Question
              key={item.id}
              isSelected={selectedDiv === index}
              onClick={() => handleDivClick(index)}
              question={item?.question}
              answer={item?.answer}
            />
          ))}
        </div>
      </div>
  )
}

export default Faq