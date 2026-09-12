import { use, useState } from "react";
import type { TechnologiesType } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

interface TechnologySectionProps {
  // Array of Object
  devStackDataPromise: Promise<TechnologiesType[]>;
}

const TechnologySection = ({ devStackDataPromise }: TechnologySectionProps) => {
  // Array of Objects
  const technologies = use(devStackDataPromise);

  const [selectedStack, setSelectedStack] = useState<TechnologiesType[]>([]);
  return (
    <div className="grid grid-cols-1  lg:grid-cols-[3fr_1fr] gap-3">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch md:mb-20 mb-7">
        {/* Technology: Add to stack */}
        {technologies.map((technology) => (
          <TechnologyCard
            selectedStack={selectedStack}
            setSelectedStack={setSelectedStack}
            key={technology.id}
            technology={technology}
          />
        ))}
      </div>

      {/* Added to Stack */}
      <div>
        <StackSidebar
          setSelectedStack={setSelectedStack}
          selectedStack={selectedStack}
        />
      </div>
    </div>
  );
};

export default TechnologySection;
