const ShowPage = () => {
  return (
    <div className="h-screen flex items-end bg-gray-950">
      <section className="text-center px-1">
        <h1 className="text-4xl text-slate-100 font-bold mb-2">
          The Best Social App To Make New Friends !
        </h1>
        <p className="text-xl px-[20%] text-slate-300">
          Find people with the same interest as you
        </p>

        <div className="w-[90%] mx-auto mb-40 mt-10">
          <button className="text-slate-100 border-[1px] border-slate-100 rounded-md w-full py-3 text-2xl mb-4 font-semibold">
            Sign Up
          </button>
          <button className="text-slate-100 bg-gradient-to-r from-yellow-400 to-orange-500 border-[1px] border-slate-100 rounded-md w-full py-3 text-2xl font-semibold">
            Log In
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShowPage;
