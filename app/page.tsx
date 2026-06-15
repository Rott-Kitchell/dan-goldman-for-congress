import { Suspense } from "react";
import VideoComponent from "@/app/ui/components/video-component";
import VideoSkeleton from "@/app/ui/components/video-skeleton";
import { notoSansMono } from "@/app/ui/fonts";

export default function Home() {
  return (
    <div className="container mx-auto px-5 bg-white text-dgblue-dark">
      <div className="flex flex-col items-center gap-8 text-center">
        <h1
          className={`${notoSansMono.className} text-4xl md:text-5xl font-bold leading-10 tracking-tight mt-8`}
        >
          Dan Goldman for Congress?
        </h1>
        <Suspense fallback={<VideoSkeleton />}>
          <VideoComponent />
        </Suspense>
        <p className="text-lg leading-relaxed text-justify mb-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </p>
      </div>
    </div>
  );
}
