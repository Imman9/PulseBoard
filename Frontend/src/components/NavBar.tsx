import { IoIosNotifications } from "react-icons/io";
import board from '../assets/board.png';
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (
   <nav className=" h-16 px-6  shadow-md flex bg-green-600 items-center justify-between mb-2 ">
    <div className="flex items-center">
      <img className=" h-10 w-auto rounded " src={board} alt="" />
      <p  className="text-xl font-bold text-white">PulseBoard</p>
    </div>
    <div className="flex items-center gap-4">
     <IoIosNotifications className="text-white text-2xl cursor-pointer hover:text-black transition" />
     <FaUserCircle className="text-white text-2xl cursor-pointer hover:text-black transition"/>
    </div>
   
    
   </nav>
  )
}

export default NavBar