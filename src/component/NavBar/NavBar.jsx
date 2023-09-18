import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';


const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/blog', name: 'Blog' },
      ];
    return (
        <div>
            <div onClick={() => setOpen(!open)} className="text-2xl md:hidden bg-yellow-200">
                {
                    open === true ? <AiOutlineClose></AiOutlineClose>
                    : <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
                }
            
            </div>
            <ul className={`md:flex absolute bg-yellow-500  duration-1000
            ${open ? 'top-15' : 'hidden'}
            text-white font-semibold`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </div>
    );
};

export default NavBar;