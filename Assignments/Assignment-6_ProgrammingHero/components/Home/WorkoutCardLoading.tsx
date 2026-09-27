const WorkoutCardLoading = () => {
  return (
    <div className="bg-[#15171D] rounded-2xl overflow-hidden animate-pulse">
      {/* Image placeholder */}
      <div className="aspect-3/2 w-full bg-white/10" />

      <div className="p-6">
        {/* Tags placeholder */}
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-white/10 rounded-full" />
          <div className="h-6 w-20 bg-white/10 rounded-full" />
        </div>

        {/* Name placeholder */}
        <div className="h-6 w-3/4 bg-white/10 rounded my-4" />

        {/* Equipment placeholder */}
        <div className="h-4 w-1/2 bg-white/10 rounded mb-5" />

        <hr className="border-white/10" />

        {/* Bottom stats placeholder */}
        <div className="flex gap-4 mt-5 items-center">
          <div className="h-5 w-12 bg-white/10 rounded" />
          <div className="h-5 w-12 bg-white/10 rounded" />
          <div className="h-5 w-12 bg-white/10 rounded" />
        </div>
      </div>
    </div>
  );
};

export default WorkoutCardLoading;
