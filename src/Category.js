import React, { useState } from "react";
import tuna from "./images/tuna.jpg";
export default function Category() {
  const [activeTab, setActiveTab] = useState("ikan_segar"); // Menggunakan 'ikan_segar' sebagai tab awal yang aktif

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const produkIkanSegar = [
    {
      tag: "produkIkanSegar",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
    {
      tag: "produkIkanSegar",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
    {
      tag: "produkIkanSegar",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
    {
      tag: "produkIkanSegar",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
    {
      tag: "produkIkanSegar",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
  ];
  const Seafood = [
    {
      tag: "Seafood",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
    {
      tag: "Seafood",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
    {
      tag: "Seafood",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
    {
      tag: "Seafood",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
    {
      tag: "Filet ikan",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
  ];
  const filletikan = [
    {
      tag: "Filet ikan",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
    {
      tag: "Filet ikan",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
    {
      tag: "Filet ikan",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
    {
      tag: "Filet ikan",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
    {
      tag: "Filet ikan",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
  ];
  const olahanikan = [
    {
      tag: "olahanikan",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
    {
      tag: "olahanikan",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
    {
      tag: "olahanikan",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
    {
      tag: "olahanikan",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
    },
    {
      tag: "olahanikan",
      title: "Fresh meat tuna",
      price: "Rp. 60.000.00",
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
      <div className="bg-white">
        <nav className="flex justify-center mx-auto border-b-2 border-gray-500">
          <button
            className={`py-4 px-3 block focus:outline-none font-medium ${
              activeTab === "ikan_segar"
                ? "bg-blue-500 text-white"
                : "text-black"
            }`}
            onClick={() => handleTabClick("ikan_segar")}
          >
            ikan&nbsp;segar
          </button>
          <button
            className={`py-4 px-3 block focus:outline-none font-medium ${
              activeTab === "Seafood" ? "bg-blue-500 text-white" : "text-black"
            }`}
            onClick={() => handleTabClick("Seafood")}
          >
            Seafood
          </button>
          <button
            className={`py-4 px-3 block focus:outline-none font-medium ${
              activeTab === "Fillet_ikan"
                ? "bg-blue-500 text-white"
                : "text-black"
            }`}
            onClick={() => handleTabClick("Fillet_ikan")}
          >
            Fillet&nbsp;ikan
          </button>
          <button
            className={`py-4 px-3 block focus:outline-none font-medium ${
              activeTab === "olahan_ikan"
                ? "bg-blue-500 text-white"
                : "text-black"
            }`}
            onClick={() => handleTabClick("olahan_ikan")}
          >
            olahan&nbsp;ikan
          </button>
        </nav>

        {/* Konten sesuai dengan tab yang aktif */}
        {/* Isi konten untuk ikan segar */}
        {activeTab === "ikan_segar" && (
          <div className="grid grid-cols-2 gap-4">
            {produkIkanSegar.map((product, index) => (
              <div
                key={index}
                className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
              >
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <img src={tuna} alt="ui/ux review check" />
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                  <button
                    className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-dark="true"
                  ></button>
                </div>
                <div className="p-6">
                  <h1 className="font-thin text-sm text-slate-500">
                    {product.tag}
                  </h1>
                  <h1 className="font-extrabold text-sm ">{product.title}</h1>
                  <h1 className="font-bold text-slate-600 mt-2 text-sm">
                    {product.price}
                  </h1>
                </div>
                <div className="p-6 pt-3">
                  <button
                    className="css-button-rounded--blue"
                    type="button"
                    data-ripple-light="true"
                  >
                    Beli sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Isi konten untuk Seafood */}
        {activeTab === "Seafood" && (
          <div className="grid grid-cols-2 gap-4">
            {Seafood.map((product, index) => (
              <div
                key={index}
                className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
              >
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <img src={tuna} alt="ui/ux review check" />
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                  <button
                    className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-dark="true"
                  ></button>
                </div>
                <div className="p-6">
                  <h1 className="font-thin text-sm text-slate-500">
                    {product.tag}
                  </h1>
                  <h1 className="font-extrabold text-sm ">{product.title}</h1>
                  <h1 className="font-bold text-slate-600 mt-2 text-sm">
                    {product.price}
                  </h1>
                </div>
                <div className="p-6 pt-3">
                  <button
                    className="css-button-rounded--blue"
                    type="button"
                    data-ripple-light="true"
                  >
                    Beli sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {/*Isi konten untuk Fillet ikan  */}
        {activeTab === "Fillet_ikan" && (
          <div className="grid grid-cols-2 gap-4">
            {filletikan.map((product, index) => (
              <div
                key={index}
                className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
              >
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <img src={tuna} alt="ui/ux review check" />
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                  <button
                    className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-dark="true"
                  ></button>
                </div>
                <div className="p-6">
                  <h1 className="font-thin text-sm text-slate-500">
                    {product.tag}
                  </h1>
                  <h1 className="font-extrabold text-sm ">{product.title}</h1>
                  <h1 className="font-bold text-slate-600 mt-2 text-sm">
                    {product.price}
                  </h1>
                </div>
                <div className="p-6 pt-3">
                  <button
                    className="css-button-rounded--blue"
                    type="button"
                    data-ripple-light="true"
                  >
                    Beli sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Isi konten untuk olahan ikan */}
        {activeTab === "olahan_ikan" && (
          <div className="grid grid-cols-2 gap-4">
            {olahanikan.map((product, index) => (
              <div
                key={index}
                className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
              >
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <img src={tuna} alt="ui/ux review check" />
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                  <button
                    className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-dark="true"
                  ></button>
                </div>
                <div className="p-6">
                  <h1 className="font-thin text-sm text-slate-500">
                    {product.tag}
                  </h1>
                  <h1 className="font-extrabold text-sm ">{product.title}</h1>
                  <h1 className="font-bold text-slate-600 mt-2 text-sm">
                    {product.price}
                  </h1>
                </div>
                <div className="p-6 pt-3">
                  <button
                    className="css-button-rounded--blue"
                    type="button"
                    data-ripple-light="true"
                  >
                    Beli sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
