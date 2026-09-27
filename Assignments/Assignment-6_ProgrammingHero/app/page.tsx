import LibrarySection from "@/components/Home/LibrarySection";
import Banner from "../components/Home/Banner";
import { Suspense } from "react";
import WorkoutCardLoading from "@/components/Home/WorkoutCardLoading";

const Home = () => {
  return (
    <div>
      <Banner />

      <section id="workouts">
        {/* Title */}
        <div className="mb-8 mt-5">
          <h3 className="text-3xl font-bold">The Library</h3>
          <p className="text-[14px]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Loading */}
        <Suspense
          fallback={
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-16">
              {Array.from({ length: 6 }).map((_, i) => (
                <WorkoutCardLoading key={i} />
              ))}
            </div>
          }
        >
          <LibrarySection />
        </Suspense>
      </section>
    </div>
  );
};

export default Home;
