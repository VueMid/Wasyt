<template>
  <swiper
    ref="{swiperRef}"
    :initialSlides="true"
    :loop="true"
    :slidesPerView="1"
    :centeredSlides="true"
    :spaceBetween="20"
    :pagination="{
      type: 'none',
    }"
    :navigation="false"
    :modules="modules"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    class="mySwiper"
  >
    <swiper-slide
      class="carousel__swiper-slide cursor-grab lg:pt-[90px] mr-[300px] w-[268px] duration-[400ms]"
      v-for="item in galleryArray"
      :key="item"
      v-motion-slide-visible-once-right
    >
      <img
        class="lg:w-[479px] lg:h-[319px] object-cover rounded-[12px] img-block__img-show"
        :src="item.image"
        alt="carousel__images"
      />
      <p
        class="carousel__swiper-texts mt-[26px] text-[18px] font-medium leading-[140%] text-[#7F9B9B]"
      >
        {{ item.name }}
      </p>
      <h3
        class="carousel__swiper-titles text-[18px] w-[220px] text-[#010E38] mt-[8px] font-bold leading-[120%] lg:text-[20px] lg:mt-[12px] lg:w-[313px] dark:text-white"
      >
        {{ item.title }}
      </h3>
    </swiper-slide>
  </swiper>
</template>
<script>
import boy from "@/assets/images/boy.png";
import girl1 from "@/assets/images/girl.png";
import girl2 from "@/assets/images/girl__second.png";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      counter: 0,
      modules: [Pagination, Autoplay, Navigation],
      galleryArray: [
        {
          name: `May 17, 2023`,
          title: `Полное руководство по работе из дома`,
          image: boy,
        },
        {
          name: `May 17, 2023`,
          title: `Полное руководство по работе из дома`,
          image: girl1,
        },
        {
          name: `May 17, 2023`,
          title: `Полное руководство по работе из дома`,
          image: girl2,
        },
      ],
    };
  },
};
</script>
<style scoped>
.carousel__swiper-texts {
  font-family: "TT Interfaces";
}
.carousel__swiper-titles {
  font-family: "TT Interfaces";
}
@media (max-width: 412px) {
  .mySwiper {
    padding-right: 0px;
  }
}
</style>
