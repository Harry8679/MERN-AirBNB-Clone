import './App.css';
import Logo from './assets/images/logo.png';
import { IoMdSearch } from "react-icons/io";


const App = () => {

  return (
    <div>
      <header className='p-4 justify-between flex'>
        <a href="" className='logo'>
          <img src={Logo} alt="logo" className='w-66 h-10' />
        </a>
        <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4'>
          <div>Anywhere</div>
          <div className="border-l border-gray-300"></div>
          <div>Any week</div>
          <div className="border-l border-gray-300"></div>
          <div>Add guest</div>
          <button>
            <IoMdSearch />
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
