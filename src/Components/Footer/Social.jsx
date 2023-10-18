import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Social = () => {
    return (
        <div className="text-[#b0afaf] rounded-t-lg bg-[#353535]">

        <div className=" grid grid-cols-1 md:grid-cols-5 py-8  w-2/4 md:w-10/12 leading-10  lg:w-3/5 mx-auto">
            <div className='flex items-center'>
                <FaFacebookF className='text-2xl'/>
                <span>Facebook</span>
                
            </div>
            <div className='flex items-center gap-2'>
                <FaTwitter className='text-2xl'/>
                <span>Twitter</span>
                
            </div>
            <div className='flex items-center gap-2'>
                <FaYoutube className='text-2xl'/>
                <span>YouTube</span>
            </div>
            <div className='flex items-center gap-2'>
                <FaInstagram className='text-2xl'/>
                <span>Instagram</span>
            </div>
            <div className='flex items-center gap-2'>
                <FaLinkedin className='text-2xl'/>
                <span>Linkedin</span>
            </div>
        </div>
        </div>
    );
};

export default Social;