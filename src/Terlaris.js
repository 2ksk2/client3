import tuna from "./images/tuna.jpg";

export default function Terlaris() {
  const produk = [
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

  return (
    <>
      <h1 className="text-2xl font-bold text-blue-600 mt-8 ml-4">
        produk terlaris
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {produk.map((product, index) => (
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
    </>
  );
}
