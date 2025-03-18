export default function Projects({ name, img, alt, type, link, year, tools, video, autoPlay, muted, loop, playsInline, playbackRate }) {
  return (
    <div className="group relative overflow-hidden">
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="block relative w-full h-[500px] overflow-hidden rounded-3xl"
      >
        {video ? (
          <video
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            src={video}
            alt={alt}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            playsInline={playsInline}
            ref={(element) => {
              if (element && playbackRate) {
                element.playbackRate = playbackRate;
              }
            }}
          />
        ) : (
          <img
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            src={img}
            alt={alt}
            width="800"
            height="600"
          />
        )}
      </a>
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white transition-opacity duration-500 group-hover:opacity-100">
        <div className="flex space-x-2 mb-3 text-sm opacity-80">
          <a href={link} target="_blank" rel="noreferrer" className="px-3 py-1 border border-white rounded-full hover:bg-white/20 transition-colors">Visit</a>
          <span className="px-3 py-1 border border-white rounded-full">{year}</span>

          <span className="px-3 py-1 border border-white rounded-full">{tools}</span>
        </div>
        <h3 className="text-2xl font-semibold uppercase tracking-wide">{name}</h3>
        <p className="text-lg font-light opacity-80">{type}</p>
      </div>
    </div>
  );
}
