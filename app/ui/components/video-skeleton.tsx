export default function VideoSkeleton() {
  return (
    <div className="mx-auto animate-pulse">
      {/* 16:9 Video Aspect Ratio Block */}
      <div className="w-full aspect-video bg-gray-300 dark:bg-gray-700 rounded-xl" />

      {/* Description Meta Block */}
      <div className="flex space-x-3 pt-2">
        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full shrink-0" />
        <div className="flex-1 space-y-2 py-1">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
        </div>
      </div>
    </div>
  );
}
