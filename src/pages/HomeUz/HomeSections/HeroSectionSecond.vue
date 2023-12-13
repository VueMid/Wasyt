<template>
  <section class="hero md:hidden mt-[103px]">
    <div class="container hero__container">
      <div
        class="hero__wrapper flex flex-col justify-between items-center rounded-[32px] px-[24px] pt-[40px] pb-[274px]"
      >
        <h2
          class="hero__title text-white w-max-[312px] text-[26px] font-bold leading-[90%] mb-6"
        >
          Yuqori darajada xavfsiz va ishonchli ombor tizimi
        </h2>
        <p
          class="hero__text text-white/90 w-max-[312px] text-[16px] not-italic font-normal leading-[140%] mb-[40px]"
        >
          Ushbu maqola sizga eng yaxshi tizimni tezda solishtirish va baholashga
          yordam beradi omborlarni boshqarish tizimi (WMS) va boshqa
          operatsiyalarni boshqarish tizimlari.
        </p>
        <TheWhiteButton @click="openModal" class="hero__button mb-5 w-full">
          Biz bilan bog'lanish
        </TheWhiteButton>
        <img
          class="hero__icons w-max-[371px]"
          src="@/assets/icons/third__icons.svg"
          alt="third__icons"
        />
      </div>
    </div>
    <Transition name="modal" class="relative z-[3333]">
      <div v-if="isModalOpened">
        <HeaderComponent @closeModal="closeModal" />
      </div>
    </Transition>
  </section>
</template>
<script>
import TheWhiteButton from "../../../MaterialUI/TheWhiteButton.vue";
import HeaderComponent from "../../../layouts/HeaderLayoutUz/components/HeaderComponent.vue";
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
  position: relative;
  &::after {
    margin: 0 auto !important;
    position: absolute;
    content: "";
    display: inline-block;
    width: 100%;
    max-width: 444px;
    height: 350px;
    left: 0;
    right: 0;
    bottom: -100px;
    background-image: url("@/assets/images/small__macbookair.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  &__container {
  }
  &__wrapper {
    background: linear-gradient(104deg, #01889a 0.21%, #2db7ca 102.26%);
  }
  &__title {
    font-family: "TT Interfaces";
  }
  &__text {
    font-family: "TT Interfaces";
  }
}
</style>
