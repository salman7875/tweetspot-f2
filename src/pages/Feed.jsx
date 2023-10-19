const Feed = () => {
  return (
    <div className="h-screen text-white bg-gray-950 overflow-x-hidden">
      <header className="bg-gray-900">
        <section className="flex justify-between px-5 pt-8 pb-5">
          <h1 className="text-2xl">Logo</h1>
          <div className="flex gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </div>
        </section>
        <section className="px-5 flex gap-5 pb-5 overflow-x-scroll scrollbar-hide">
          <div className="flex flex-col items-center">
            <img
              src="https://avatars.githubusercontent.com/u/78205495?v=4"
              alt=""
              className="w-20 h-20 rounded-full object-cover border-[3px] border-orange-500"
            />
            <span>Salman_76</span>
          </div>
        </section>
      </header>

      <section className="bg-gray-900 m-5 p-5 rounded-2xl">
        <div className="flex items-center gap-2">
          <img
            src="https://avatars.githubusercontent.com/u/78205495?v=4"
            alt="image url"
            className="w-14 h14 rounded-full border-2 border-orange-500 object-cover"
          />
          <input
            type="text"
            placeholder="Write Something..."
            className="p-2 text-lg text-slate-100 bg-inherit outline-none"
          />
        </div>
        <hr className="bg-slate-200 h-[0.2px] my-3" />
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <div className="h-8 w-8 rounded-full border-[1px] flex items-center justify-center">
              😀
            </div>
            <div className="h-8 w-8 rounded-full border-[1px] flex items-center justify-center">
              🗺️
            </div>
            <div className="h-8 w-8 rounded-full border-[1px] flex items-center justify-center">
              📌
            </div>
          </div>
          <button className="py-1 px-5 text-2xl bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
            Share
          </button>
        </div>
      </section>

      <article className="bg-gray-900 m-5 p-5 rounded-2xl">
        <section className="flex items-center justify-between">
          <div className="flex gap-2">
            <img
              src="https://avatars.githubusercontent.com/u/78205495?v=4"
              alt="test img"
              className="w-14 h14 rounded-full border-[1px] border-orange-500 object-cover"
            />
            <div className="flex flex-col">
              <span className="text-xl font-medium">Salman Ansari</span>
              <span className="text-slate-400">@salman_76</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full border-[1px] border-red-600 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </div>
        </section>
        <section className="py-2">
          <p>This is Londan...</p>
          <p>I'll ask again, If anybody wants to come to mars with me!</p>
          <img
            src="https://avatars.githubusercontent.com/u/78205495?v=4"
            alt=""
            className="my-2 w-full min-h-[12rem] max-h-[15rem] rounded-2xl object-fit"
          />
        </section>
        <section className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
        </section>
      </article>
    </div>
  );
};

export default Feed;
