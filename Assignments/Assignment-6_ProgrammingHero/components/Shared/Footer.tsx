import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#090A0D] border-t border-t-[#1A1D24]">
      <div className="flex min-h-25 py-6 flex-col sm:flex-row justify-center sm:justify-between md:w-[85%] w-[92%] mx-auto items-center gap-3 text-center sm:text-left">
        <Image src="/nav-logo.png" width={85} height={30} alt="Footer Logo" />
        <p className="text-[12px] text-[#6B7280]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
