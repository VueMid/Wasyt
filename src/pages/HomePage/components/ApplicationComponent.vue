<template>
  <div
    class="fixed top-0 left-0 right-0 w-full p-4 duration-100 overflow-x-hidden overflow-y-auto h-full max-h-full backdrop-blur-sm bg-white/30 dark:backdrop-blur-sm dark:bg-tailwind-dark/30 flex justify-center items-center xl:px-[0px]"
  >
    <div
      class="relative card w-full max-w-2xl max-h-full card dark:border-[2px] dark:border-dark-cyan rounded-[32px]"
    >
      <div class="relative bg-white shadow dark:bg-gray-700 rounded-[32px]">
        <div
          class="flex items-start justify-between p-4 border-b dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Static modal
          </h3>
          <button
            @click="$emit('closeModal')"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="static-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <iframe
          class="w-full rounded-b-[32px]"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Qcd1oOlz6DU?si=5rtOD75YJSSuHT1V"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  </div>
</template>
<style>
.card {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
