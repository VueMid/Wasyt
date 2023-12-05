<template>
  <section class="carousel hidden md:block md:mt-[100px] lg:mt-[120px]">
    <div
      class="container carousel__container md:flex md:flex-col md:justify-between md:gap-[20px] lg:flex lg:flex-col lg:justify-between lg:gap-[50px]"
    >
      <div
        class="carousel__top-box md:flex md:flex-row md:justify-between md:items-center"
      >
        <h1
          class="carousel__top-title md:text-dark-cyan md:text-[30px] md:font-bold md:leading-[120%] dark:text-white"
        >
          Все новости
        </h1>
        <div
          class="carousel__top-buttons md:flex md:flex-row md:justify-between md:items-center md:gap-4"
        >
          <button
            style="
              background: #f5f5f5;
              font-size: 18px;
              width: 50px;
              height: 50px;
              border-radius: 50%;
            "
            @click="prevSlide"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button
            style="
              background: #f5f5f5;
              font-size: 18px;
              width: 50px;
              height: 50px;
              border-radius: 50%;
            "
            @click="nextSlide"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="owl-carousel owl-theme cursor-grab">
          <div
            class="carousel__mini-boxes md:flex md:flex-col md:justify-center md:items-start md:gap-[14px]"
          >
            <img
              class="carousel__bottom-images md:w-[249px] md:rounded-[16px]"
              src="@/assets/images/girl.png"
              alt="carousel__images"
            />
            <p
              class="carousel__bottom-date md:text-[#7F9B9B] md:text-[14px] md:font-medium md:leading-[140%] dark:text-white"
            >
              17 мая 2023 г
            </p>
            <h5
              class="carousel__bottom-titles md:text-[#010E38] md:text-[15px] md:font-bold md:leading-[120%] md:w-[226px] lg:w-[250px] lg:text-[16px] dark:text-white"
            >
              Полное руководство по работе из дома
            </h5>
          </div>
          <div
            class="carousel__mini-boxes md:flex md:flex-col md:justify-center md:items-start md:gap-[14px]"
          >
            <img
              class="carousel__bottom-images md:w-[249px] md:rounded-[16px]"
              src="@/assets/images/girl__second.png"
              alt="carousel__images"
            />
            <p
              class="carousel__bottom-date md:text-[#7F9B9B] md:text-[14px] md:font-medium md:leading-[140%] dark:text-white"
            >
              17 мая 2023 г
            </p>
            <h5
              class="carousel__bottom-titles md:text-[#010E38] md:text-[15px] md:font-bold md:leading-[120%] md:w-[226px] lg:w-[250px] lg:text-[16px] dark:text-white"
            >
              Полное руководство по работе из дома
            </h5>
          </div>
          <div
            class="carousel__mini-boxes md:flex md:flex-col md:justify-center md:items-start md:gap-[14px]"
          >
            <img
              class="carousel__bottom-images md:w-[249px] md:rounded-[16px]"
              src="@/assets/images/boy.png"
              alt="carousel__images"
            />
            <p
              class="carousel__bottom-date md:text-[#7F9B9B] md:text-[14px] md:font-medium md:leading-[140%] dark:text-white"
            >
              17 мая 2023 г
            </p>
            <h5
              class="carousel__bottom-titles md:text-[#010E38] md:text-[15px] md:font-bold md:leading-[120%] md:w-[226px] lg:w-[250px] lg:text-[16px] dark:text-white"
            >
              Полное руководство по работе из дома
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const owlCarousel = ref(null);
    onMounted(() => {
      owlCarousel.value = $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 16,
        nav: false,
        responsive: {
          768: {
            items: 3,
          },
          820: {
            items: 3,
          },
          900: {
            items: 3,
          },
          1000: {
            items: 3,
          },
          1150: {
            items: 3,
          },
          1200: {
            items: 3,
          },
          1400: {
            items: 3,
          },
          1500: {
            items: 3,
          },
        },
      });
    });
    const nextSlide = () => {
      owlCarousel.value.trigger("next.owl.carousel");
    };
    const prevSlide = () => {
      owlCarousel.value.trigger("prev.owl.carousel");
    };
    return {
      nextSlide,
      prevSlide,
    };
  },
};
</script>
<style lang="scss" scoped></style>
