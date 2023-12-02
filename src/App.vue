<template>
  <main class="overflow-x-hidden bg-white dark:bg-tailwind-dark">
    <HeaderLayout />
    <Transition name="fade">
      <RouterView />
    </Transition>
    <!-- <FooterLayout /> -->
    <!-- <FooterBottomLayout /> -->
    <a
      href="#"
      class="scrollup cursor-pointer w-[60px] h-[60px] leading-[60px] text-[20px] md:w-[60px] md:h-[60px] md:leading-[60px] md:text-[30px] lg:w-[45px] lg:h-[45px] lg:leading-[45px] lg:text-[15px] bg-[#FCB72B] dark:bg-dark-navy duration-300"
      id="scroll-up"
    >
      <i
        class="fa-solid fa-arrow-up fa-beat scroll__icon"
        style="color: #ffffff"
      >
      </i>
    </a>
  </main>
</template>
<script>
import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout.vue";
import FooterLayout from "./layouts/FooterLayout/FooterLayout.vue";
import FooterBottomLayout from "./layouts/FooterBottomLayout/FooterBottomLayout.vue";
export default {
  components: { HeaderLayout, FooterLayout, FooterBottomLayout },
  mounted() {
    window.addEventListener("scroll", () => {
      const scrollUp = document.querySelector(".scrollup");
      if (scrollY > 760) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    });
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 3s ease;
  transform: scale(1);
  pointer-events: none;
}
.fade-enter-from,
.fade-leave-to {
  pointer-events: all;
  opacity: 0;
}
</style>
