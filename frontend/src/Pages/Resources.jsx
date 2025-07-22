import { useEffect, useState } from "react"
import axios from "axios"
import Loading from "./Loading"
import { Link, useNavigate } from "react-router-dom"
import doc from '../assets/Pics/doc.png'
import link from '../assets/Pics/link.png'
import toast from "react-hot-toast"

const baseUrl = import.meta.env.VITE_API_URL + '/getAllResources'
const deleteUrl = import.meta.env.VITE_API_URL + '/deleteResource'

const Filters = {
  student: ['All Classes', 'class6', 'class7', 'class8', 'class9', 'class10'],
  teacher: ['All Types', 'Module', 'PDF', 'Video', 'Audio'],
  general: ['All Types', 'Module', 'PDF', 'Video', 'Audio'],
  common: ['All Types', 'Module', 'PDF', 'Video', 'Audio']
};

const Resources = () => {
  const [userType, setUserType] = useState('student');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedCategory, setSelectedCategory] = useState('All Types');
  const [isLoading, setIsLoading] = useState(false)
  const [filteredItems, setFilteredItems] = useState([])
  const [items, setItems] = useState([])
  const [openingResource, setOpeningResource] = useState(null)
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get(baseUrl)
      // console.log('Fetched data:', res.data.data);
      setItems(res.data.data)
      setFilteredItems(res.data.data)
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error(error?.response?.data?.message || 'Error fetching resources')
    } finally {
      setIsLoading(false)
    }
  }

  const isNew = (dateString) => {
    const dateObj = new Date(dateString);
    return (Date.now() - dateObj.getTime()) <= 15 * 24 * 60 * 60 * 1000;
  }

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setSelectedClass('All Classes');
    setSelectedCategory('All Types');
  };

  const modifyCloudinaryUrl = (url) => {
    try {
      if (!url) return url;
      return url;
    } catch (error) {
      console.error('Error modifying URL:', error);
      return url;
    }
  };

  const handleResourceClick = async (e, item) => {
    e.preventDefault();
    
    try {
      setOpeningResource(item._id);
      // console.log(item.resourseUrl)
      if (!item?.resourseUrl) {
        toast.error('Resource URL not found');
        return;
      }

      const modifiedUrl = modifyCloudinaryUrl(item.resourseUrl);
      const newWindow = window.open(modifiedUrl, '_blank', 'noopener,noreferrer');
      
    } catch (error) {
      console.error('Error opening resource:', error);
      toast.error('Error opening resource. Please try again.');
    } finally {
      setOpeningResource(null);
    }
  };

  const filterItems = () => {
    let filtered = items.filter(item => {
      const userTypeMatch = 
        (userType === 'student' && item.categoryA === 'Student Resources') ||
        (userType === 'teacher' && item.categoryA === 'Teacher Resources') ||
        (userType === 'general' && item.categoryA === 'General Resources');
      const classMatch = selectedClass === 'All Classes' || 
        (item?.categoryB && item.categoryB.toLowerCase() === selectedClass.toLowerCase());
      const categoryMatch = selectedCategory === 'All Types' || 
        (item?.categoryC && item.categoryC.toLowerCase() === selectedCategory.toLowerCase());
      return userTypeMatch && classMatch && categoryMatch;
    });
    setFilteredItems(filtered);
  };

  const handleDeleteResource = async (id) => {
    try {
      await axios.delete(`${deleteUrl}/${id}`, {
        headers: { "Authorization": `Bearer ${user.token}` }
      })
      toast.success('Resource deleted')
      fetchData()
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Error deleting resource')
    }
  }

  const getFileIcon = (item) => {
    if (!item?.categoryC) return doc;

    const type = item.categoryC.toLowerCase();
    switch (type) {
      case 'pdf':
        return doc;
      case 'video':
        return link;
      case 'audio':
        return link;
      default:
        return item.resourceType === 'file' ? doc : link;
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    filterItems();
  }, [userType, selectedClass, selectedCategory, items])

  const ResourceCard = ({ item, idx }) => {
    const isTeacherResource = item.categoryA === 'Teacher Resources';
    
    return (
      <div key={`items-${idx}`} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <div className="h-40 bg-gray-100 flex items-center justify-center relative">
          {isNew(item?.createdAt) && (
            <span className="absolute top-2 right-2 bg-yellow-400 text-xs px-2 py-1 rounded-full font-medium">New</span>
          )}
          <button
            onClick={(e) => handleResourceClick(e, item)}
            className="w-full h-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 relative"
            disabled={openingResource === item._id}
          >
            <img 
              src={getFileIcon(item)} 
              className={`w-20 h-20 object-contain ${openingResource === item._id ? 'opacity-50' : ''}`} 
              alt={item.title || 'Resource'} 
            />
            {openingResource === item._id && (
              <span className="absolute text-sm text-gray-600">Opening...</span>
            )}
          </button>
        </div>
        <div className="p-4 flex-grow">
          <h3 className="text-lg font-semibold mb-2 truncate">{item.title || 'Untitled'}</h3>
          <p className="text-sm text-gray-600 mb-1">Type: {item.categoryC || 'N/A'}</p>
          {!isTeacherResource && (
            <p className="text-sm text-gray-600 mb-1">Class: {item.categoryB || 'N/A'}</p>
          )}
          <p className="text-sm text-gray-600">Category: {item.categoryA || 'N/A'}</p>
        </div>
        {(user?.accountType === 'Admin' || user?.accountType === 'SuperAdmin') && (
          <div className="p-4 bg-gray-50 flex justify-between">
            <Link
              className="px-3 py-1 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
              to={`/updateResource/${item?._id}`}
            >
              Update
            </Link>
            <button
              className="px-3 py-1 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
              onClick={() => handleDeleteResource(item._id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="bg-purple-200 p-4">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium ${userType === 'student' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleUserTypeChange('student')}
          >
            Student
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium ${userType === 'teacher' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleUserTypeChange('teacher')}
          >
            Teacher
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium ${userType === 'general' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleUserTypeChange('general')}
          >
            General
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          {userType === 'student' && (
            <select
              className="p-2 border rounded-md text-sm"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              {Filters.student.map((classLevel, index) => (
                <option key={index} value={classLevel}>
                  {classLevel === 'All Classes' ? classLevel : `Class ${classLevel.replace('class', '')}`}
                </option>
              ))}
            </select>
          )}
          <select
            className="p-2 border rounded-md text-sm"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {(userType === 'teacher' ? Filters.teacher : 
              userType === 'general' ? Filters.general : 
              Filters.common).map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
          {(user?.accountType === 'Admin' || user?.accountType === 'SuperAdmin') && (
            <Link to='/createResource' className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">
              Add resource
            </Link>
          )}
        </div>
      </div>
      
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <ResourceCard key={item._id} item={item} idx={idx} />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">No resources found matching the selected filters.</p>
          )}
        </div>
      )}
    </section>
  )
}

export default Resources