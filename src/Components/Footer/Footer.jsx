import Social from "./Social";
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-16 px-8 ">
        <Social></Social>
      <footer className=" place-items-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 p-10 rounded-b-lg bg-[#292929]   text-[#b0afaf]  ">
        <div className="leading-10">
          <header className="footer-title  text-[#fff]">Best sellers</header>
          <a className="link link-hover">Specials</a> <br />
          <a className="link link-hover">New products</a> <br />
          <a className="link link-hover">Sitemap</a> <br />
          <a className="link link-hover">About us</a><br />
          <a className="link link-hover">Contact us</a><br />
          <a className="link link-hover">Delivery</a><br />
        </div>
        <div className="leading-10"> 
          <header className="footer-title text-[#fff]">My Account</header>
          <a className="link link-hover">Account</a><br />
          <a className="link link-hover">Address</a><br />
          <a className="link link-hover">Payment</a><br />
          <a className="link link-hover">Shipping</a><br />
          <a className="link link-hover">Check out</a><br />
          <a className="link link-hover">History</a><br />
        </div>
        <div className="leading-10">
          <header className="footer-title mb-5 text-[#ffffff]">Legal</header>
          <p className="leading-6">If your question is not answered there, please use one of the contact methods below.</p>
          <div className="flex gap-3 items-center">
            <FaLocationDot className="w-10 h-10 text-3xl rounded-full border-2 p-2 border-[#b0afaf]"/>
          <p className="leading-5 my-5">175 SW 7th St #2009, Miami, Fl <br /> 33130, United States</p>
          </div>
          <div className="flex gap-3 items-center">
          <FaPhone className="w-10 h-10 text-3xl rounded-full border-2 p-2 border-[#b0afaf]"/>
          <p>0123.456.789</p>
          </div>
          <div className="flex gap-3 items-center mt-4">
            <MdEmail className="w-10 h-10 text-3xl rounded-full border-2 p-2 border-[#b0afaf]"/>
          <p>tidal@wave.com</p>
          </div>
        </div>
        
        <form >
          <header className="footer-title text-[#fff] mb-5">Newsletter</header>
          <p>Get the word out. Share this page with your friends and family. Enter your email address...</p>
          <fieldset className="form-control w-full">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn bg-[#e76d66] hover:bg-[#a6302a] text-white border-none absolute top-0 right-0 rounded-l-none">
                GO
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
