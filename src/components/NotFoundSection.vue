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
        <div>
          <img
            class="icon w-[288px] h-[148px] dark:hidden"
            src="@/assets/icons/ghost.svg"
            alt="ghost__image"
          />
        </div>
        <div class="">
          <img
            class="icon w-[288px] h-[148px] hidden dark:block"
            src="@/assets/icons/white__ghost.svg"
            alt="ghost__image"
          />
        </div>
        <span
          class="notFound__numbers text-[165px] text-[#172D33] dark:text-white"
          >4
        </span>
      </div>
      <div
        class="notFound__bottom-box flex flex-col justify-center items-center gap-10"
      >
        <h4
          class="text text-[30px] font-semibold text-[#172D33] dark:text-white"
        >
          Страница не найдена!
        </h4>
        <router-link to="/">
          <button
            class="btn primary w-max bg-blue text-white py-[14px] px-[32px] text-base font-semibold leading-[150%] rounded-[85px] active:opacity-60 duration-100"
          >
            <i
              class="fa-solid dark:text-white fa-arrow-right-long fa-beat mr-4"
            />
            Вернуться на главную
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>
<style scoped>
.btn {
  font-family: "TT Interfaces";
}
.text {
  font-family: "Hauora";
}

.icon {
  animation: animate 2s infinite !important;
}
@keyframes animate {
  0% {
    margin-top: 0;
  }
  50% {
    margin-bottom: 30px;
  }
  100% {
    margin-top: 0;
  }
}

@media (max-width: 500px) {
  .notFound__numbers {
    font-size: 100px;
  }
  .icon {
    width: 140px;
    animation: animate 2s infinite !important;
  }
  .text {
    margin-top: 20px;
    font-size: 18px;
  }
  .btn {
  }
  @keyframes animate {
    0% {
      margin-top: 0;
    }
    50% {
      margin-bottom: 30px;
    }
    100% {
      margin-top: 0;
    }
  }
}
</style>
