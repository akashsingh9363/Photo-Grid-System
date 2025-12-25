const Loader = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-slate-700 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-cyan-500 border-r-cyan-400 rounded-full animate-spin shadow-lg shadow-cyan-500/50"></div>
      </div>
    </div>
  );
};

export default Loader;
