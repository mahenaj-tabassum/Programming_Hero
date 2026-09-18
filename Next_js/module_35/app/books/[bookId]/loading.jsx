const BookDetailLoading = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg animate-pulse">
        {/* Cover Skeleton */}
        <div className="h-72 w-full bg-gray-300" />

        {/* Content Skeleton */}
        <div className="p-5">
          {/* Category */}
          <div className="h-5 w-20 rounded-full bg-gray-300" />

          {/* Title */}
          <div className="mt-4 h-7 w-3/4 rounded bg-gray-300" />

          {/* Author */}
          <div className="mt-2 h-4 w-1/2 rounded bg-gray-200" />

          {/* Price + Rating */}
          <div className="mt-5 flex items-center justify-between">
            <div className="h-6 w-20 rounded bg-gray-300" />
            <div className="h-5 w-16 rounded bg-gray-300" />
          </div>

          {/* Stock */}
          <div className="mt-4 h-4 w-32 rounded bg-gray-200" />

          {/* Button */}
          <div className="mt-5 h-11 w-full rounded-lg bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default BookDetailLoading;
