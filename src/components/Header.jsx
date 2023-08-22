import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
    <nav className="bg-gray-900 text-white">
<div className="flex w-[90%] h-24 justify-between items-center">

<span className="w-44 flex justify-center items-center">LOGO</span>


<div className="flex w-[40%] justify-center gap-4">
<Link to='/'>Home</Link>
<Link to='/about'>About</Link>
<Link to='/login'>Login</Link>

</div>

</div>



    </nav>
    </>
  );
}
