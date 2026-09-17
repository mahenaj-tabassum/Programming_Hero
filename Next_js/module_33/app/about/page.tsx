import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "...",
};

const About = () => {
  return (
    <div className="flex flex-col gap-6">
      ABout US
      <Image src="/img.png" height={300} width={300} alt="Flower img" />
      <Image src="/image/img-1.png" height={300} width={300} alt="image" />
      <Image src="/image/img-2.png" height={300} width={300} alt="image" />
      <Image
        src="https://images.unsplash.com/photo-1789276392890-1bc1d0f04374"
        height={300}
        width={300}
        alt="image"
      />
    </div>
  );
};

export default About;
