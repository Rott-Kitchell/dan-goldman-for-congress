export default async function VideoComponent() {
  return (
    <div className="mx-auto">
      <div className=" object-contain aspect-video rounded-xl overflow-hidden shadow-lg bg-dgblue-dark">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/rZQ07sV5RHE?si=xfQzuiiNf-znPoMJ"
          title="YouTube video player"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
