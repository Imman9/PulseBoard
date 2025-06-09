import { IoIosNotifications } from "react-icons/io";
import board from '../assets/board.png';

const NavBar = () => {
  return (
   <nav className=" h-16 px-6  shadow-md flex items-center justify-between mb-2 ">
    <div className="flex items-center">
      <img className=" h-10 w-auto rounded " src={board} alt="" />
    <p  className="text-xl font-bold text-gray-800">PulseBoard</p>
    </div>
   
    <IoIosNotifications className="text-gray-600 text-2xl cursor-pointer hover:text-black transition" />
   </nav>
  )
}

export default NavBar