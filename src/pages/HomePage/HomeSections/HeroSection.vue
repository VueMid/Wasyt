<template>
  <section class="hero lg:mt-[64px] hidden md:block">
    <div class="container hero__container">
      <div
        class="hero__wrapper px-[24px] md:pt-[90px] md:px-[30px] lg:pt-[50px] lg:px-[40px]"
      >
        <h2
          class="hero__title text-white md:font-bold md:w-[477px] mb-4 md:mb-5 md:leading-[90%] md:text-[40px] lg:text-[58px] lg:w-[650px] lg:mb-4 not-italic"
        >
          Высокозащищённое и надежная складская система
        </h2>
        <p
          class="hero__text text-white/90 md:font-normal md:leading-[150%] md:mb-[34px] md:w-[444px] lg:w-[681px] lg:mb-[50px] md:text-[14px] lg:text-[16px ]"
        >
          Эта статья поможет вам быстро сравнить и оценить лучшую систему
          управления складом (WMS) и другие системы управления операциями.
        </p>
        <TheWhiteButton
          @click="openModal"
          class="hero__button md:m-0 mb-[25px] md:mb-[25px] lg:mb-[35px"
        >
          Свяжется с нами
        </TheWhiteButton>
        <img
          class="hero__icons"
          src="@/assets/icons/icon__images.svg"
          alt="first__icons"
        />
        <img
          class="hero__second-icons"
          src="@/assets/icons/icons__second.svg"
          alt="second__icons"
        />
        <img
          class="hero__third-icons"
          src="@/assets/icons/third__icons.svg"
          alt="third__icons"
        />
      </div>
    </div>
    <Transition name="modal" class="relative z-[1111]">
      <div v-if="isModalOpened">
        <HeaderComponent @closeModal="closeModal" />
      </div>
    </Transition>
  </section>
</template>
<script>
import TheWhiteButton from "../../../MaterialUI/TheWhiteButton.vue";
import HeaderComponent from "../../../layouts/HeaderLayout/components/HeaderComponent.vue";
export default {
  data() {
    return {
      isModalOpened: false,
    };
  },
  components: { TheWhiteButton, HeaderComponent },
  methods: {
    openModal() {
      this.isModalOpened = true;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.isModalOpened = false;
      document.body.style.overflow = "auto";
    },
  },
};
</script>
<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.hero {
  &__container {
  }
  &__wrapper {
    width: 100%;
    height: 550px;
    background-image: url("@/assets/images/hero__background.png");
    background-repeat: no-repeat;
    background-position: top;
    background-size: contain;
  }
  &__second-icons {
    display: none;
  }
  &__third-icons {
    display: none;
  }
  &__title {
    font-family: "TT Interfaces";
  }
  &__text {
    font-family: "TT Interfaces";
  }
}
@media (max-width: 1260px) {
  .hero {
    &__container {
    }
    &__wrapper {
      padding-top: 100px;
      width: 100%;
      height: 640px;
      background-image: url("@/assets/images/hero__second-background.png");
      background-repeat: no-repeat;
      background-position: top;
      background-size: contain;
    }
    &__icons {
      display: none;
    }
    &__second-icons {
      display: block;
    }
    &__third-icons {
      display: none;
    }
  }
}
@media (max-width: 1150px) {
  .hero {
    &__container {
    }
    &__wrapper {
      padding-top: 100px;
      width: 100%;
      height: 600px;
      background-image: url("@/assets/images/hero__second-background.png");
      background-repeat: no-repeat;
      background-position: top;
      background-size: contain;
    }
    &__icons {
      display: none;
    }
    &__second-icons {
      display: block;
    }
    &__third-icons {
      display: none;
    }
    &__title {
      width: 577px;
    }
    &__text {
      width: 484px !important;
    }
  }
}
@media (max-width: 1023px) {
  .hero {
    margin-top: 132px;
    &__wrapper {
      padding-top: 35px;
      width: 100%;
      height: 530px;
      background-image: url("@/assets/images/hero__second-background.png");
      background-repeat: no-repeat;
      background-position: top;
      background-size: contain;
    }
    &__title {
      width: 577px;
      font-size: 40px;
      margin-bottom: 26px;
    }
    &__text {
      width: 424px !important;
      font-size: 14px;
      margin-bottom: 54px;
    }
  }
}
@media (max-width: 820px) {
  .hero {
    margin-top: 132px;
    &__wrapper {
      padding-top: 35px;
      width: 100%;
      height: 430px;
      background-image: url("@/assets/images/hero__second-background.png");
      background-repeat: no-repeat;
      background-position: top;
      background-size: contain;
    }
    &__title {
      width: 577px;
      font-size: 40px;
      margin-bottom: 26px;
    }
    &__text {
      width: 424px !important;
      font-size: 14px;
      margin-bottom: 54px;
    }
  }
}
@media (max-width: 818px) {
  .hero {
    margin-top: 132px;
    &__wrapper {
      padding-top: 35px;
      width: 100%;
      height: 400px;
      background-image: url("@/assets/images/hero__second-background.png");
      background-repeat: no-repeat;
      background-position: top;
      background-size: contain;
    }
    &__title {
      width: 577px;
      font-size: 40px;
      margin-bottom: 16px;
    }
    &__text {
      width: 424px !important;
      font-size: 14px;
      margin-bottom: 34px;
    }
  }
}
</style>
