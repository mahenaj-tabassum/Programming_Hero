import banner from "../assets/bg-shadow.png";
import bannerImg from "../assets/banner-main.png";
const BannerComponent = () => {
  return (
    <div
      className="text-center p-10  bg-cover bg-center text-white pt-10 bg-black bg-no-repeat h-112.5 rounded-2xl w-full"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <img
        className="mx-auto h-25 lg:h-37.5"
        src={bannerImg}
        alt="banner Image"
      />
      <h2 className="my-5 text-2xl lg:text-4xl font-bold">
        Assemble your ultimate dream 11 cricket team
      </h2>
      <p className=" text-gray-300 lg:text-[20px] font-semibold">
        Beyond Boundaries Bayon Limits
      </p>
      <div className="mt-5 w-43.75 h-13.75 rounded-[0.7rem] flex items-center justify-center bg-black border-gray-300 border mx-auto">
        <button className=" text-[16px] rounded-[0.4rem] font-bold btn border-none shadow-none bg-linear-to-r from-pink-400 via-orange-300 to-yellow-200">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default BannerComponent;
