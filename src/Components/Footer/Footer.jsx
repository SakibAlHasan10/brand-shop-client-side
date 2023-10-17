import Social from "./Social";

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 ">
        <Social></Social>
      <footer className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10 rounded-b-lg bg-[#292929]   text-[#b0afaf]  ">
        <div >
          <header className="footer-title text-[#fff]">Best sellers</header>
          <a className="link link-hover">Specials</a>
          <a className="link link-hover">New products</a>
          <a className="link link-hover">Sitemap</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact us</a>
          <a className="link link-hover">Delivery</a>
        </div>
        <div > 
          <header className="footer-title text-[#fff]">My Account</header>
          <a className="link link-hover">Account</a>
          <a className="link link-hover">Address</a>
          <a className="link link-hover">Payment</a>
          <a className="link link-hover">Shipping</a>
          <a className="link link-hover">Check out</a>
          <a className="link link-hover">History</a>
        </div>
        <div >
          <header className="footer-title text-[#ffffff]">Legal</header>
          <p>If your question is not answered there, please use one of the contact methods below.</p>
          <p>175 SW 7th St #2009, Miami, Fl <br /> 33130, United States</p>
          <p>0123.456.789</p>
          <p>tidal@wave.com</p>
        </div>
        
        <form >
          <header className="footer-title">Newsletter</header>
          <p>Get the word out. Share this page with your friends and family. Enter your email address...</p>
          <fieldset className="form-control w-60">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
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
