export default function Login() {
  return (
    <>
      <div class="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
        <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div class="rounded-xl bg-white shadow-xl">
              <div class="p-6 sm:p-16">
                <div class="space-y-4">
                  <h2 class="mb-8 text-2xl text-cyan-900 font-bold">
                    Masuk untuk pengalaman yang lebih baik
                  </h2>
                </div>
                <div class="mt-16 grid space-y-4">
                  <button
                    class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                  >
                    <div class="relative flex items-center space-x-4 justify-center">
                      <img
                        src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                        class="absolute left-0 w-5"
                        alt="google logo"
                      />
                      <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                        Continue with Google
                      </span>
                    </div>
                  </button>
                  <button
                    class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                  >
                    <div class="relative flex items-center space-x-4 justify-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                        class="absolute left-0 w-5"
                        alt="Facebook logo"
                      />
                      <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                        Continue with Facebook
                      </span>
                    </div>
                  </button>
                </div>
                <div class="mt-8">
                  <div class="md:col-span-5">
                    <label for="full_name">
                      nama pengguna atau email{" "}
                      <span class="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                    />
                  </div>
                </div>
                <div class="mt-2">
                  <div class="md:col-span-5">
                    <label for="full_name">
                      Kata sandi
                      <span class="text-red-400">*</span>
                    </label>
                    <input
                      type="password"
                      name="full_name"
                      id="full_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                    />
                  </div>
                  <span class="float-right underline text-blue-700">
                    Lupa sandi?
                  </span>
                  <div class="md:col-span-5">
                    <div class="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="billing_same"
                        id="billing_same"
                        class="form-checkbox"
                      />
                      <label for="billing_same" class="ml-2">
                        Ingat saya?
                      </label>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-5 text-right mt-10">
                  <div class="inline-flex items-end">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Masuk
                    </button>
                  </div>
                </div>
                <div class="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                  <p class="text-xs">
                    By proceeding, you agree to our{" "}
                    <a href="ads" class="underline">
                      Terms of Use
                    </a>{" "}
                    and confirm you have read our{" "}
                    <a href="asd" class="underline">
                      Privacy and Cookie Statement
                    </a>
                    .
                  </p>
                  <p class="text-xs">
                    This site is protected by reCAPTCHA and the{" "}
                    <a href="asd" class="underline">
                      Google Privacy Policy
                    </a>
                    and
                    <a href="asd" class="underline">
                      Terms of Service
                    </a>{" "}
                    apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
