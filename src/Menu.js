import freshfish from "./images/freshfish.png";
import seafood from "./images/seafood.png";
import filletfish from "./images/filletfish.jpg";
import olahanikan from "./images/olahanikan.jpg";
export default function Menu() {
  return (
    <>
      <h1 class="text-2xl font-bold text-blue-600 mt-4 ml-4">Menu</h1>
      <div class="grid grid-cols-4 gap-4 w-[90%] mx-auto">
        <div class="text-center flex flex-col items-center">
          <a href="asdas" class="block p-2 rounded-lg" alt="...">
            <img
              class="w-12 h-12 rounded-full mb-2"
              src={freshfish}
              alt="Flowbite logo"
            />
            <span class="font-semibold">ikan&nbsp;segar</span>
          </a>
        </div>
        <div class="text-center flex flex-col items-center">
          <a href="asdas" class="block p-2 rounded-lg" alt="...">
            <img
              class="w-12 h-12 rounded-full mb-2"
              src={seafood}
              alt="Flowbite logo"
            />
            <span class="font-semibold">seafood</span>
          </a>
        </div>
        <div class="text-center flex flex-col items-center">
          <a href="asdas" class="block p-2 rounded-lg" alt="...">
            <img
              class="w-12 h-12 rounded-full mb-2"
              src={filletfish}
              alt="Flowbite logo"
            />
            <span class="font-semibold">ikan&nbsp;filet</span>
          </a>
        </div>
        <div class="text-center flex flex-col items-center">
          <a href="asdas" class="block p-2 rounded-lg" alt="...">
            <img
              class="w-12 h-12 rounded-full mx-auto mb-2"
              src={olahanikan}
              alt="Flowbite logo"
            />
            <span class="font-semibold">olahan&nbsp;ikan</span>
          </a>
        </div>
      </div>
    </>
  );
}
