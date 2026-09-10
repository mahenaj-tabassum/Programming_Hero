import footer from "../assets/logo-footer.png";

const FooterComponent = () => {
  return (
    <footer className=" bg-slate-950 text-white lg:p-10 md:p-10 p-15 ">
      <div className="mt-50">
        <img className="mx-auto h-20" src={footer} alt="Footer" />
        <div className="lg:flex lg:flex-row flex flex-col gap-10 justify-around mt-20">
          <div>
            <p className="text-xl mb-3">About Us</p>
            <p className="text-[15px] text-gray-500">
              We are a passionate team <br />
              dedicated to providing the best <br />
              services to our customers
            </p>
          </div>
          <div>
            <p className="text-xl mb-3">Quick Links</p>
            <ul className="text-[15px] text-gray-500 list-disc ml-5">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="text-xl mb-3">Subscribe</p>
            <p className="text-[15px] text-gray-500 mb-5">
              Subscribe to out newsletter for the <br />
              latest updates.
            </p>
            <div className="w-full">
              <input
                className="bg-white outline-none rounded-r-none text-black px-5 py-3 rounded lg:w-[60%] md:w-[60%] sm:w-[60%] w-full mb-3"
                type="text"
                placeholder="Enter Your Email"
              />
              <button className="rounded rounded-l-none text-slate-900 font-semibold px-5 py-3 bg-linear-to-r from-pink-400 via-orange-300 to-yellow-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="h-0.5 mt-8 border-none bg-gray-800" />
        <p className="text-center mt-5 text-gray-500">
          @2026 Your Company All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
