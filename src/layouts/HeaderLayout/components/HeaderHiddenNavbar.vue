<template>
  <div
    class="main fixed top-[0px] w-full z-[999] h-[100vh] backdrop-blur-sm bg-white/30 dark:bg-tailwind-dark/30"
  >
    <nav
      class="nav w-full h-[610px] pt-[62px] z-[999] bg-white rounded-b-[40px] dark:bg-tailwind-dark fixed px-4 mx-auto top-0 md:px-10 md:py-[16px] md:h-[800px] md:pt-[68px] block lg:hidden"
    >
      <hr class="mb-[24px]" />
      <ul class="ul flex flex-col gap-3 md:flex md:flex-col md:gap-5">
        <li
          class="header__lists px-6 py-4 border-[1px] rounded-[88px] flex flex-row justify-start items-center duration-150 bg-white text-dark-cyan md:px-6 md:py-6 active:bg-[#2DB7CA] active:text-white dark:bg-tailwind-dark dark:text-white dark:active:bg-white dark:active:text-dark-cyan font-medium"
        >
          <img class="" src="@/assets/icons/home.svg" alt="" />
          <a class="link ml-4" href="#"> Главная </a>
          <i class="fa-solid dark:text-white fa-arrow-right-long fa-beat ml-0">
          </i>
        </li>
        <li
          class="header__lists px-6 py-4 border-[1px] rounded-[88px] flex flex-row justify-start items-center duration-150 bg-white text-dark-cyan md:px-6 md:py-6 active:bg-[#2DB7CA] active:text-white dark:bg-tailwind-dark dark:text-white dark:active:bg-white dark:active:text-dark-cyan font-medium"
        >
          <img class="" src="@/assets/icons/about.svg" alt="" />
          <a class="link ml-4" href="#wasyt"> О Продукте </a>
          <i class="fa-solid dark:text-white fa-arrow-right-long fa-beat ml-0">
          </i>
        </li>
        <li
          class="header__lists px-6 py-4 border-[1px] rounded-[88px] flex flex-row justify-start items-center duration-150 bg-white text-dark-cyan md:px-6 md:py-6 active:bg-[#2DB7CA] active:text-white dark:bg-tailwind-dark dark:text-white dark:active:bg-white dark:active:text-dark-cyan font-medium"
        >
          <img class="" src="@/assets/icons/demo.svg" alt="" />
          <a class="link ml-4" href="#application"> Демо </a>
          <i class="fa-solid dark:text-white fa-arrow-right-long fa-beat ml-0">
          </i>
        </li>
        <li
          class="header__lists px-6 py-4 border-[1px] rounded-[88px] flex flex-row justify-start items-center duration-150 bg-white text-dark-cyan md:px-6 md:py-6 active:bg-[#2DB7CA] active:text-white dark:bg-tailwind-dark dark:text-white dark:active:bg-white dark:active:text-dark-cyan font-medium"
        >
          <img class="" src="@/assets/icons/partnership.svg" alt="" />
          <a class="link ml-4" href="#partnership"> Партнерство </a>
          <i class="fa-solid dark:text-white fa-arrow-right-long fa-beat ml-0">
          </i>
        </li>
        <div
          class="px-6 py-2 md:px-6 md:py-4 border-[1px] Interfaces rounded-[88px] bg-white dark:bg-tailwind-dark flex flex-row justify-between items-center"
        >
          <TheDarkMode />
          <i class="fa-solid dark:text-white fa-arrow-right-long fa-beat"> </i>
        </div>
        <TheButtonSecond class="TheButtonSecond">
          Свяжется с нами
        </TheButtonSecond>
      </ul>
    </nav>
  </div>
</template>
<script>
import TheDarkMode from "../../../MaterialUI/TheDarkMode.vue";
import TheButtonSecond from "../../../MaterialUI/TheButtonSecond.vue";
export default {
  components: { TheDarkMode, TheButtonSecond },
  data() {
    return {
      isModalOpened: false,
    };
  },
};
</script>
<style scoped>
.TheButtonSecond {
  font-family: "TT Interfaces" !important;
}
.link {
  margin-right: auto;
}
.nav {
  display: none;
}
.link {
  font-family: "TT Interfaces" !important;
}
@media (max-width: 1023px) {
  .nav {
    display: block;
  }
  .ul {
    margin-top: 40px;
  }
}
</style>
