import { Suspense } from "react";
import VideoComponent from "./ui/video-component";
import VideoSkeleton from "./ui/video-skeleton";
import { notoSansMono } from "./ui/fonts";

export default function Home() {
  return (
    <div className="flex flex-col bg-white  text-dgblue-dark">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1
          className={`${notoSansMono.className} text-3xl font-bold leading-10 tracking-tight mt-6`}
        >
          Dan Goldman for Congress?
        </h1>
        <div className="flex">
          <Suspense fallback={<VideoSkeleton />}>
            <VideoComponent />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
