<template>
  <section class="carousel mt-[80px] md:hidden">
    <div class="container carousel__container">
      <div
        class="carousel__top lg:flex lg:flex-row lg:justify-between lg:items-center mb-[24px] lg:mb-12 flex flex-col justify-center items-start"
      >
        <h2
          class="carousel__main-title text-[30px] lg:text-[40px] text-[#172D33] font-bold leading-[120%] dark:text-white duration-[410ms]"
        >
          Все новости
        </h2>
        <div
          class="carousel__btns hidden md:flex md:flex-row md:justify-center md:items-center md:gap-6 duration-[400ms]"
        >
          <button
            class="carousel__btns prev bg-[#F5F5F7] lg:w-[56px] lg:h-[56px] flex justify-center items-center rounded-[100%] dark:border-[1px] dark:border-white dark:bg-tailwind-dark dark:text-white"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button
            class="carousel__btns next bg-[#F5F5F7] lg:w-[56px] lg:h-[56px] flex justify-center items-center rounded-[100%] dark:border-[1px] dark:border-white dark:bg-tailwind-dark dark:text-white"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <SwiperComponent class="flex flex-col justify-center items-center" />
    </div>
  </section>
</template>
<script>
import SwiperComponent from "../components/SwiperComponent.vue";
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { SwiperComponent },
};
</script>
<style lang="scss" scoped>
.carousel {
  &__container {
  }

  &__top {
  }

  &__main-title {
    font-family: "TT Interfaces";
  }

  &__btns {
  }
}
</style>
