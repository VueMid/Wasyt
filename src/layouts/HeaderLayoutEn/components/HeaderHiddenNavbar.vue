<template>
  <div
    class="main fixed top-[0px] w-full z-[999] h-[100vh] backdrop-blur-sm bg-white/30 dark:bg-tailwind-dark/30 overflow-x-hidden"
  >
    <nav
      class="nav w-full h-[595px] pt-[52px] z-[999] bg-white rounded-b-[40px] dark:bg-tailwind-dark fixed px-4 mx-auto top-0 md:px-10 md:py-[16px] md:h-[800px] md:pt-[68px] block lg:hidden"
    >
      <hr />
      <ul class="ul flex flex-col gap-3 md:flex md:flex-col md:gap-5">
        <li
          @click="$emit('closeMenu')"
          class="header__lists px-6 py-4 border-[1px] rounded-[88px] flex flex-row justify-start items-center duration-150 bg-white text-dark-cyan md:px-6 md:py-6 active:bg-[#2DB7CA] active:text-white dark:bg-tailwind-dark dark:text-white dark:active:bg-white dark:active:text-dark-cyan font-semibold"
        >
          <img class="" src="@/assets/icons/home.svg" alt="icon" />
          <a class="link ml-4 w-full" href="#">Home</a>
          <i class="fa-solid dark:text-white fa-arrow-right-long fa-beat ml-0">
          </i>
        </li>
        <li
          @click="$emit('closeMenu')"
          class="header__lists px-6 py-4 border-[1px] rounded-[88px] flex flex-row justify-start items-center duration-150 bg-white text-dark-cyan md:px-6 md:py-6 active:bg-[#2DB7CA] active:text-white dark:bg-tailwind-dark dark:text-white dark:active:bg-white dark:active:text-dark-cyan font-semibold"
        >
          <img class="" src="@/assets/icons/about.svg" alt="icon" />
          <a class="link ml-4 w-full" href="#wasyt">About the Product</a>
          <i class="fa-solid dark:text-white fa-arrow-right-long fa-beat ml-0">
          </i>
        </li>
        <li
          @click="$emit('closeMenu')"
          class="header__lists px-6 py-4 border-[1px] rounded-[88px] flex flex-row justify-start items-center duration-150 bg-white text-dark-cyan md:px-6 md:py-6 active:bg-[#2DB7CA] active:text-white dark:bg-tailwind-dark dark:text-white dark:active:bg-white dark:active:text-dark-cyan font-semibold"
        >
          <img class="" src="@/assets/icons/demo.svg" alt="icon" />
          <a class="link ml-4 w-full" href="#application">Demo</a>
          <i class="fa-solid dark:text-white fa-arrow-right-long fa-beat ml-0">
          </i>
        </li>
        <li
          @click="$emit('closeMenu')"
          class="header__lists px-6 py-4 border-[1px] rounded-[88px] flex flex-row justify-start items-center duration-150 bg-white text-dark-cyan md:px-6 md:py-6 active:bg-[#2DB7CA] active:text-white dark:bg-tailwind-dark dark:text-white dark:active:bg-white dark:active:text-dark-cyan font-semibold"
        >
          <img class="" src="@/assets/icons/partnership.svg" alt="icon" />
          <a class="link ml-4 w-full" href="#partnershipSecond">Partnership</a>
          <i class="fa-solid dark:text-white fa-arrow-right-long fa-beat ml-0">
          </i>
        </li>
        <LanguagesSecond />
        <div
          class="px-6 py-2 md:px-6 md:py-4 border-[1px] Interfaces rounded-[88px] bg-white dark:bg-tailwind-dark flex flex-row justify-between items-center w-full"
        >
          <TheDarkMode class="w-full" />
          <i class="fa-solid dark:text-white fa-arrow-right-long fa-beat"></i>
        </div>
        <TheButtonSecond class="TheButtonSecond">Contact us</TheButtonSecond>
      </ul>
    </nav>
  </div>
</template>
<script>
import TheDarkMode from "../../../MaterialUI/TheDarkMode.vue";
import TheButtonSecond from "../../../MaterialUI/TheButtonSecond.vue";
import LanguagesSecond from "./LanguagesSecond.vue";
export default {
  components: { TheDarkMode, TheButtonSecond, LanguagesSecond },
  data() {
    return {
      isModalOpened: false,
    };
  },
};
</script>
<style scoped>
.main {
  position: static;
}
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
  .main {
    position: fixed;
  }
  .nav {
    display: block;
  }
  .ul {
    margin-top: 40px;
  }
}
</style>
