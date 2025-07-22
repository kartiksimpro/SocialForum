import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Loading from "./Loading"
import SmallLoader from "../Components/SmallLoader"
import Error from './Error'
import toast from "react-hot-toast"

const baseUrl = import.meta.env.VITE_API_URL + '/getResource'
const updateUrl = import.meta.env.VITE_API_URL + '/updateResource'

const UpdateResource = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [resourceType, setResourceType] = useState('file')
  const [link, setLink] = useState('')
  const [categoryA, setCategoryA] = useState('Teacher Resources')
  const [categoryB, setCategoryB] = useState('class6')
  const [categoryC, setCategoryC] = useState('module')
  const [error, setError] = useState(null)
  const [requestLoader, setRequestLoader] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const tempuser = localStorage.getItem('user')
  const user = JSON.parse(tempuser)
  const url = baseUrl + `/${id}`
  const Url = updateUrl + `/${id}`
  const fileInput = useRef()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value)
    }
    if (name === 'resourceType') {
      setResourceType(value)
    }
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value)
  }

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    if (name === 'categoryA') {
      setCategoryA(value)
    } else if (name === 'categoryB') {
      setCategoryB(value)
    } else if (name === 'categoryC') {
      setCategoryC(value)
    }
  }

  const handleRadioChange = (e) => {
    setResourceType(e.target.value)
  };

  const handleUpdateResource = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("categoryA", categoryA);
    formData.append("categoryB", categoryB);
    formData.append("categoryC", categoryC);
    formData.append("resourceType", resourceType);

    if (resourceType === 'file') {
      if (fileInput.current.files[0]) {
        formData.append("resourceFile", fileInput.current.files[0]);
      }
    } else {
      formData.append("link", link);
    }

    try {
      setRequestLoader(true)
      const token = user.token
      if (!title || !categoryA || !categoryB || !categoryC || !resourceType) {
        toast.error('Enter all fields')
        setRequestLoader(false)
        return;
      }
      await axios.put(Url, formData, {
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      });
      setRequestLoader(false)
      toast.success('Resource updated')
      navigate('/resources')
    } catch (error) {
      setRequestLoader(false)
      toast.error(error?.response?.data?.message)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(url)
        const data = res.data.data[0]
        setTitle(data?.title)
        setResourceType(data?.resourceType)
        setCategoryA(data?.categoryA)
        setCategoryB(data?.categoryB)
        setCategoryC(data?.categoryC)
        if (data?.resourceType === 'link') {
          setLink(data?.resourseUrl)
        }
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        setError(error)
        toast.error(error?.response?.data?.message)
      }
    }
    fetchData()
  }, [url])

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <section className='min-h-screen flex items-center flex-col bg-purple-200 p-4'>
      <div className="lg:w-[980px] w-full">
        <h1 className="text-[35px] font-[700]">Update resource</h1>
      </div>
      <form onSubmit={handleUpdateResource} className="lg:w-[980px] md:w-[700px] w-full flex flex-col gap-2 py-4" >
        <div className="flex flex-col">
          <label htmlFor="title" className="text-[18px] font-[500]">Title</label>
          <input
            value={title}
            type="text"
            name="title"
            id="title"
            className="p-2 outline-none focus:border-2 focus:border-blue-600 rounded-md"
            onChange={handleInputChange}
            required />
        </div>
        <div className="flex flex-row gap-4 my-2">
          <div className="flex gap-2">
            <input
              type='radio'
              value="file"
              name="resourceType"
              id="file"
              checked={resourceType === 'file'}
              className="focus:ring-1 rounded-full focus:ring-primary-500 peer"
              onChange={handleRadioChange}
              required />
            <label htmlFor="file" className="text-[18px] font-[500]">File</label>
          </div>
          <div className="flex gap-2">
            <input
              type='radio'
              value="link"
              name="resourceType"
              id="link"
              checked={resourceType === 'link'}
              className="focus:ring-1 rounded-full focus:ring-primary-500 peer"
              onChange={handleRadioChange}
              required />
            <label htmlFor="link" className="text-[18px] font-[500]">Link</label>
          </div>
        </div>
        {
          resourceType === 'file' ? (
            <div className="flex flex-col">
              <label htmlFor="resourceUrl" className="text-[18px] font-[500]">File</label>
              <input
                type="file"
                name="resourceFile"
                id="resourceUrl"
                className="p-2 outline-none focus:border-2 focus:border-blue-600 rounded-md"
                ref={fileInput}></input>
            </div>
          ) : (
            <div className="flex flex-col">
              <label htmlFor="url" className="text-[18px] font-[500]">Link</label>
              <input
                type="url"
                name="link"
                id="url"
                value={link}
                required
                className="p-2 outline-none focus:border-2 focus:border-blue-600 rounded-md"
                onChange={handleLinkChange}></input>
            </div>
          )
        }
        <div className="flex flex-col">
          <label htmlFor="categoryA" className="text-[18px] font-[500]">Category A</label>
          <select
            name="categoryA"
            id="categoryA"
            required
            value={categoryA}
            className="p-2 outline-none focus:border-2 focus:border-blue-600 rounded-md mt-1 text-[18px]"
            onChange={handleSelectChange}>
            <option className="text-[16px] p-1" value="Teacher Resources">Teacher Resources</option>
            <option className="text-[16px] p-1" value="Student Resources">Student Resources</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="categoryB" className="text-[18px] font-[500]">Class</label>
          <select
            name="categoryB"
            id="categoryB"
            required
            value={categoryB}
            className="p-2 outline-none focus:border-2 focus:border-blue-600 rounded-md mt-1 text-[18px]"
            onChange={handleSelectChange}>
            <option className="text-[16px] p-1" value="class6">Class 6</option>
            <option className="text-[16px] p-1" value="class7">Class 7</option>
            <option className="text-[16px] p-1" value="class8">Class 8</option>
            <option className="text-[16px] p-1" value="class9">Class 9</option>
            <option className="text-[16px] p-1" value="class10">Class 10</option>
            <option className="text-[16px] p-1" value="class11">Class 11</option>
            <option className="text-[16px] p-1" value="class12">Class 12</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="categoryC" className="text-[18px] font-[500]">File Type</label>
          <select
            name="categoryC"
            id="categoryC"
            required
            value={categoryC}
            className="p-2 outline-none focus:border-2 focus:border-blue-600 rounded-md mt-1 text-[18px]"
            onChange={handleSelectChange}>
            <option className="text-[16px] p-1" value="module">Module</option>
            <option className="text-[16px] p-1" value="Video">Video</option>
            <option className="text-[16px] p-1" value="PDF">PDF</option>
            <option className="text-[16px] p-1" value="Audio">Audio</option>
          </select>
        </div>
        <button
          type="submit"
          className='p-2 mt-3 bg-green-700 rounded-md hover:bg-green-400 text-white text-center flex items-center justify-center'>
          {
            requestLoader ? <SmallLoader /> : <>Update Resource</>
          }
        </button>
        <Link to='/resources' className='p-2 mt-3 bg-blue-700 rounded-md hover:bg-blue-400 text-white text-center flex items-center justify-center'>
          Cancel
        </Link>
      </form>
    </section>
  )
}

export default UpdateResource