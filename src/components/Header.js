import {Link} from 'react-router-dom';

export default () => {
    return (
        <div className=" p-6 bg-emerald-200 text-green-800">
            <nav className="flex justify-between items-center">              
                <p className=" text-4xl font-sans ">Simulasi Lensa & Cermin</p>

                <ul class="flex">
                    <li className='pr-3'>
                        <Link to={"/"} >Convex Lens</Link>
                    </li>
                    <li className='pr-3'>
                        <Link to={"/concave-lens"} >Concave Lens</Link>
                    </li>
                    <li className='pr-3'>
                        <Link to={"/convex-mirror"} >Convex Mirror</Link>
                    </li>
                    <li className='pr-3'>
                        <Link to={"/concave-mirror"} >Concave Mirror</Link>
                    </li>
                </ul>

            </nav>
        </div>
     );
}
 