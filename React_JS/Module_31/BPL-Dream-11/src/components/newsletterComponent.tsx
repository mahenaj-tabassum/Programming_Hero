import shadow from "../assets/bg-shadow.png";
const NewsletterComponent = () => {
  return (
    <section className="relative z-10 -mb-40 mt-30">
      <div className=" bg-white/10 backdrop:blur-xl  h-97.5 rounded-xl border border-2xl border-white flex items-center justify-center w-full">
        <div
          className=" text-center  p-10  bg-cover bg-center py-20 bg-white bg-no-repeat h-[90%] rounded-2xl lg:w-[96%] md:w-[96%] w-[90%] "
          style={{ backgroundImage: `url(${shadow})` }}
        >
          <div className="mx-auto">
            <p className="lg:text-3xl text-2xl text-slate-700 font-bold">
              Subscribe to our Newsletter
            </p>
            <p className="my-4 text-xs lg:text-xl md:text-xl text-gray-400">
              Get the latest updates and new right in your inbox!
            </p>
            <div className="w-full">
              <input
                className="bg-white border border-gray-300 outline-none rounded-r-none text-black px-5 py-3 rounded w-[60%]"
                type="text"
                placeholder="Enter Your Email"
              />
              <button className="rounded border border-gray-300 rounded-l-none text-slate-900 font-semibold px-5 py-3 bg-linear-to-r from-pink-400 via-orange-300 to-yellow-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterComponent;
