import { IoMdSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import Logo from '../assets/images/logo.png';
import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <div>
      <header className='p-4 justify-between flex'>
        <Link href='/' className='logo'>
          <img src={Logo} alt="logo" className='w-66 h-10' />
        </Link>
        <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-500'>
          <div>Anywhere</div>
          <div className="border-l border-gray-300"></div>
          <div>Any week</div>
          <div className="border-l border-gray-300"></div>
          <div>Add guest</div>
          <button className='bg-primary text-white p-1 rounded-full'>
            <IoMdSearch />
          </button>
        </div>
        <Link to='/login' className='flex gap-2 border items-center border-gray-300 rounded-full pt-2 pb-2 px-4'>
          <div className='pt-1'>
            <IoMenu />
          </div>
          <div className='bg-gray-500 text-white rounded-full p-1 overflow-hidden'>
            <FaRegUser className='relative top-1' />
          </div>
        </Link>
      </header>
    </div>
  )
}

export default IndexPage
