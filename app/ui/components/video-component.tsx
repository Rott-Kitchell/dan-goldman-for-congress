export default async function VideoComponent() {
  return (
    <div className="flex w-full rounded-xl overflow-hidden shadow-lg bg-dgblue-dark">
      <iframe
        className="aspect-video w-full border-0"
        src="https://www.youtube-nocookie.com/embed/rZQ07sV5RHE?si=xfQzuiiNf-znPoMJ"
        title="YouTube video player"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
