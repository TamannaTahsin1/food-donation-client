import logo from '../../assets/img/logo.png'

const Footer = () => {
    return (
<footer className="footer p-10 bg-base-200 text-base-content mt-10">
  <aside>
        <img src={logo} alt="" />
    <p className='text-md'><span className='text-xl font-extrabold bg-gradient-to-r from-yellow-100 via-yellow-500 to-gray-300 text-transparent bg-clip-text'>ShareFare</span><br/>Providing trustable donation service</p>
      <p>
      Regardless of whether you need to stay in your own house, <br /> are searching for help with a more established relative, <br /> looking for exhortation on paying for development.
      </p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;