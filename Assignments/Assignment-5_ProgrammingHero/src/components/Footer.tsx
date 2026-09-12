import Logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className=" border-t bg-white border-gray-300">
      <div className="pt-20 pb-10  w-[80%] mx-auto">
        <div className="flex mb-10 justify-center lg:justify-between">
          <div className="flex flex-col text-center lg:text-left items-center lg:block">
            <img src={Logo} alt="logo" />
            <p className="my-5 text-gray-500 text-[15px]">
              Curated tools, technologies, and resources for developers building{" "}
              <br className="hidden md:block" /> modern software
            </p>
            <ul className="flex gap-5">
              <li>
                <a target="_blank" href="https://github.com/">
                  Github
                </a>
              </li>
              <li>
                <a target="_blank" href="https://x.com/">
                  Twitter
                </a>
              </li>
              <li>
                <a target="_blank" href="https://linkedin.com/">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:block hidden">
            <p className="font-semibold mb-4">Product</p>
            <ul className="text-gray-500 text-[14px]">Home</ul>
            <ul className="text-gray-500 text-[14px] my-3">Technologies</ul>
            <ul className="text-gray-500 text-[14px]">Projects</ul>
          </div>
          <div className="lg:block hidden">
            <p className="font-semibold mb-4">Company</p>
            <ul className="text-gray-500 text-[14px]">About</ul>
            <ul className="text-gray-500 text-[14px] my-3">Contact</ul>
            <ul className="text-gray-500 text-[14px]">Careers</ul>
          </div>
          <div className="lg:block hidden">
            <p className="font-semibold">Legal</p>
            <ul className="text-gray-500 text-[14px] my-3">Privacy Policy</ul>
            <ul className="text-gray-500 text-[14px]">Terms of Services</ul>
          </div>
        </div>
        <div className="flex items-center justify-between border border-gray-200 p-4 rounded-xl">
          <p className="md:text-[15px] text-xs text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <ul className="flex text-gray-400 lg:gap-5 gap-3">
            <li className="md:text-[15px] text-xs">Privacy</li>
            <li className="md:text-[15px] text-xs">Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
