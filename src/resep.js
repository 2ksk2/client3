import tuna from "./images/tuna.jpg";

export default function resep() {
  const blogs = [
    {
      title: "resep tuna paling enak",
      image: tuna,
      badge: "resep",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusanda dolores,",
      date: "20 desember 2023",
    },
    {
      title: "Tuna juga tapi di pepes",
      image: tuna,
      badge: "resep",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusanda dolores,",
      link: "https://unsplash.com/photos/SHJMuYQSRn8?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
      date: "20 desember 2023",
    },
    {
      title: "Sama tuna juga tapi dibuat sushi",
      image: tuna,
      badge: "resep",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusanda dolores,",
      link: "https://unsplash.com/photos/OyCl7Y4y0Bk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
      date: "20 desember 2023",
    },
    {
      title: "ini tuna juga",
      image: tuna,
      badge: "curhat",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusanda dolores,",
      link: "https://unsplash.com/photos/Io2Zgb3_kdk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
      date: "20 desember 2023",
    },
  ];

  return (
    <>
      <div class="max-w-2xl mx-auto">
        <nav class="border-gray-200 px-2 mb-10 mt-4">
          <div class="container mx-auto flex flex-wrap items-center justify-between">
            <div class="back w-14 b-14 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="relative flex-1 mx-3 md:mx-0">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  class="w-5 h-5 text-black font-extrabold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="email-adress-icon"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
                placeholder="Search..."
              />
            </div>
          </div>
        </nav>
      </div>
      <h1 class="text-2xl font-bold text-blue-600 mt-8 ml-4 mb-6 text-center">
        resep
      </h1>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4  bg-[#fff]">
        {blogs.map((blog) => {
          return (
            <article class="overflow-hidden mb-6 rounded-lg border border-gray-100 bg-white shadow-sm relative">
              <img
                alt={blog.image}
                src={blog.image}
                class="h-56 w-full object-cover"
              />
              <span class="bg-[#00ff0d] text-black py-1 px-2 rounded-full absolute top-2 right-2">
                {blog.badge}
              </span>
              <div class="p-4 sm:p-6">
                <a href={blog.link}>
                  <h3 class="text-lg font-medium text-gray-900">
                    {blog.title}
                  </h3>
                </a>

                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {blog.desc}
                </p>

                <a
                  href={blog.link}
                  class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Lebih Lengkap
                  <span
                    aria-hidden="true"
                    class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
                <div>
                  <h1 class="text-sm mt-4">{blog.date}</h1>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
