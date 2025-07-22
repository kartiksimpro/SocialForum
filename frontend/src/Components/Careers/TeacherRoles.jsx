import { TeacherData } from "../../Utils/Constant";
import { FaCheckCircle } from "react-icons/fa";

const TeacherRoles = () => {
  return (
    <div className="flex  flex-wrap -m-4 max-w-5xl w-full">
      {TeacherData.map((teacher) => (
        <div className="p-4 md:w-1/2 w-full overflow-y-auto" key={teacher?.id}>
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg bg-purple-300 shadow-md">
            <img className="md:h-80 w-full" src={teacher?.image} alt="image" />
            <div className="p-6 max-h-56 overflow-y-scroll">
              <h1 className="font-bold text-lg text-center text-purple-900 mb-3">
                {teacher?.role}
              </h1>
              <p className="font-normal text-md text-center text-gray-800 mb-3">
                Roles and responsibilities
              </p>
              <ul>
                {teacher?.responsibilities.map((res) => (
                  <li
                    key={res}
                    className="text-sm font-normal text-start text-purple-900 mb-2"
                  >
                    <FaCheckCircle className="text-md inline mr-2" /> <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeacherRoles;
