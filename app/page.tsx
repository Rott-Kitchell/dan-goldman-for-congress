import { Suspense } from "react";
import VideoComponent from "@/app/ui/components/video-component";
import VideoSkeleton from "@/app/ui/components/video-skeleton";
import { notoSansMono } from "./ui/fonts";

export default function Home() {
  return (
    <div className="container mx-auto px-5 bg-white text-dgblue-dark">
      <div className="flex flex-col items-center gap-8 text-center">
        <h1
          className={`${notoSansMono.className} text-5xl font-bold leading-10 tracking-tight mt-6`}
        >
          Dan Goldman for Congress?
        </h1>
        <Suspense fallback={<VideoSkeleton />}>
          <VideoComponent />
        </Suspense>
      </div>
    </div>
  );
}
