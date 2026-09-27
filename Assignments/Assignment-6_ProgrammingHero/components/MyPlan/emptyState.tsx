import Link from "next/link";
const EmptyState = () => {
  return (
    <div className="my-10 py-24.25 px-4 flex items-center justify-center border border-dashed border-[#535353] rounded-2xl bg-[#111317]">
      <div className="text-center">
        <h4 className="tracking-tight font-bold text-2xl my-3">
          Nothing Here Yet
        </h4>
        <p className="text-[15px] mb-5">
          Browse the library and add a lift to get today moving.
        </p>

        <Link href="/" className="btn-primary rounded-full">
          Go to workouts
        </Link>
      </div>
    </div>
  );
};

export default EmptyState;
