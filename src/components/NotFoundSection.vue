<template>
  <section class="notFound dark:bg-tailwind-dark w-full h-[100vh]">
    <div
      class="container notFound__container flex flex-col justify-center items-center min-h-screen"
    >
      <div
        class="notFound__main flex flex-row justify-center items-center h-full max-h-full"
      >
        <span
          class="notFound__numbers text-[165px] text-[#172D33] dark:text-white"
          >4
        </span>
        <img
          class="icon w-[288px] h-[148px]"
          src="@/assets/icons/ghost.svg"
          alt="ghost__image"
        />
        <span
          class="notFound__numbers text-[165px] text-[#172D33] dark:text-white"
          >4
        </span>
      </div>
      <div
        class="notFound__bottom-box flex flex-col justify-center items-center gap-10"
      >
        <h4 class="text-[30px] text-[#172D33] dark:text-white">
            Страница не найдена!
        </h4>
        <router-link to="/">
          <button
            class="btn primary bg-blue text-white py-[14px] px-[32px] text-base font-semibold leading-[150%] rounded-[85px] active:opacity-60 duration-100"
          >
            <i
              class="fa-solid dark:text-white fa-arrow-right-long fa-beat mr-4"
            />
            Back to main
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>
