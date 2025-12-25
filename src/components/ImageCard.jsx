const ImageCard = ({ image, onClick }) => {
  return (
    <div
      onClick={() => onClick(image)}
      className="relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-110 group"
    >
      <img
        src={image.thumbnailUrl}
        alt={`Image ${image.number}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center">
        <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          View Image
        </span>
        <span className="text-cyan-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
          #{image.number}
        </span>
      </div>

      <div className="absolute inset-0 rounded-xl border border-cyan-500 border-opacity-0 group-hover:border-opacity-50 transition-all duration-300 shadow-xl group-hover:shadow-cyan-500/50"></div>

      <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-lg">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default ImageCard;
