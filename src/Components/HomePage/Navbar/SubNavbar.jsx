import './subNavbarStyle.css'
import { BsStopwatch } from "react-icons/bs";
const SubNavbar = () => {
    return (
        // using raw css
        <div className="custom-font custom-text-style background-style">
            <div className="position-style ">
                <div className="margin-style">Call Us: +880 1859380894</div>
                <div className='position-style'>
                    {/* watch icon with tailwind css */}
                    <div className='mt-[2px]'><BsStopwatch /></div>
                    <span> Opening Hours: 7:00 am - 9:00 pm (mon-sun)</span>
                </div>
            </div>

            {/* todo: add social media */}
            <div>
                <p>Follow:</p>
            </div>
        </div>
    );
};

export default SubNavbar;