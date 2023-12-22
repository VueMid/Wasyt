<template>
  <section
    id="wasyt"
    class="wasyt bg-[#F4FDFE] mt-[180px] md:mt-[100px] dark:bg-tailwind-dark"
  >
    <div
      class="container wasyt__container lg:flex lg:flex-row lg:justify-between lg:items-center lg:py-10 lg:px-0"
    >
      <div class="flex flex-col">
        <h3
          class="wasyt__title mr-auto md:hidden text-[24px] mb-3 text-dark-cyan font-bold leading-[120%] lg:text-[30px] dark:text-white"
        >
          What is Wasyt?
        </h3>
        <p
          class="wasyt__texts md:hidden mb-[0px] dark:text-white text-[#5D5D5F] font-normal leading-[150%] lg:w-[728px] lg:text-[16px] lg:mb-10"
        >
          Wasyt allows you to sign commercial and mutual Shariah agreements with
          legal entities and individuals. ⚡️At the same time, the agreement
          will have legal force. 🤗
        </p>
      </div>
      <img
        class="wasyt__image mb-10 mt-[30px] md:mb-0 lg:w-[440px]"
        src="@/assets/images/card.png"
        alt="card__image"
      />
      <div class="wasyt__right-box">
        <h3
          class="wasyt__title hidden md:block text-[24px] mb-3 text-dark-cyan font-bold leading-[120%] lg:text-[30px] dark:text-white"
        >
          What is Wasyt?
        </h3>
        <p
          class="wasyt__texts hidden md:block dark:text-white text-[#5D5D5F] font-normal leading-[150%] lg:w-[728px] lg:text-[16px] lg:mb-10"
        >
          Wasyt allows you to sign commercial and mutual Shariah agreements with
          legal entities and individuals. ⚡️At the same time, the agreement
          will have legal force. 🤗
        </p>
        <p
          class="wasyt__second-texts dark:text-white text-[#5D5D5F] mb-10 font-normal leading-[150%] lg:w-[728px] lg:text-[16px] lg:mb-[30px]"
        >
          The application has a convenient and easy to use interface that allows
          you to sign an agreement without any difficulty. Now you can't you
          need to meet your partner in person to conclude a contract, you you
          can easily conclude contracts remotely.
        </p>
        <div
          class="wasyt__main-mini-box flex flex-row justify-between items-center mb-10 md:flex md:flex-row md:justify-between md:items-center md:mb-[16px] lg:flex lg:flex-row lg:justify-between lg:items-center lg:mb-[38px]"
        >
          <div
            class="wasyt__main-mini-boxes flex flex-col justify-center items-start gap-4 md:flex md:flex-col md:justify-center md:items-start md:gap-4 lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-4"
          >
            <p
              class="wasyt__numbers leading-[120%] text-[40px] font-bold md:text-[28px] lg:text-[38px]"
            >
              17+
            </p>
            <p
              class="wasyt__mini-titles dark:text-white leading-[150%] w-max-[176px] font-semibold md:w-[182px] md:text-[14px] lg:text-[16px] lg:w-[299px]"
            >
              We actively work in Central Asia and the CIS countries
            </p>
          </div>
          <div
            class="wasyt__main-mini-boxes flex flex-col justify-center items-start gap-4 md:flex md:flex-col md:justify-center md:items-start md:gap-4 lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-4"
          >
            <p
              class="wasyt__numbers leading-[120%] text-[40px] font-bold md:text-[28px] lg:text-[38px]"
            >
              270+
            </p>
            <p
              class="wasyt__mini-titles dark:text-white leading-[150%] w-max-[176px] font-semibold md:w-[182px] md:text-[14px] lg:text-[16px] lg:w-[299px]"
            >
              We actively work in Central Asia and the CIS countries
            </p>
          </div>
        </div>
        <TheButton @click="openModal" class="wasyt__button w-full md:w-[230px]">
          Contact us
        </TheButton>
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
import TheButton from "../../../MaterialUI/TheButton.vue";
import HeaderComponent from "../../../layouts/HeaderLayoutEn/components/HeaderComponent.vue";
export default {
  data() {
    return {
      isModalOpened: false,
    };
  },
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
  components: { TheButton, HeaderComponent },
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
.wasyt {
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 75px 56px;
  }

  &__image {
  }

  &__right-box {
  }

  &__title {
    font-family: "TT Interfaces";
  }

  &__texts {
  }

  &__main-mini-box {
  }

  &__main-mini-boxes {
  }

  &__numbers {
    background: linear-gradient(101deg, #01889a 0.41%, #2db7ca 108.74%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__mini-titles {
  }

  &__button {
  }
}
@media (max-width: 1300px) {
  .wasyt {
    &__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 30px;
    }

    &__image {
    }

    &__right-box {
    }

    &__title {
    }

    &__texts {
      font-size: 14px;
      width: 437px;
      margin-bottom: 40px;
    }
    &__second-texts {
      font-size: 14px;
      width: 437px;
    }

    &__main-mini-box {
    }

    &__main-mini-boxes {
    }

    &__numbers {
    }

    &__mini-titles {
      font-size: 14px;
      width: 182px;
    }

    &__button {
    }
  }
}
@media (max-width: 1030px) {
  .wasyt {
    &__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 30px;
    }

    &__image {
      width: 350px;
    }

    &__right-box {
    }

    &__title {
    }

    &__texts {
      font-size: 14px;
      width: 437px;
      margin-bottom: 40px;
    }
    &__second-texts {
      font-size: 14px;
      width: 437px;
    }

    &__main-mini-box {
    }

    &__main-mini-boxes {
    }

    &__numbers {
    }

    &__mini-titles {
      font-size: 14px;
      width: 182px;
    }

    &__button {
    }
  }
}
@media (max-width: 1023px) {
  .wasyt {
    &__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 30px;
    }

    &__image {
      width: 300px;
    }

    &__right-box {
    }

    &__title {
    }

    &__texts {
      font-size: 14px;
      width: 437px;
      margin-bottom: 40px;
    }
    &__second-texts {
      font-size: 14px;
      width: 437px;
    }
    &__main-mini-box {
    }

    &__main-mini-boxes {
    }

    &__numbers {
    }

    &__mini-titles {
      font-size: 14px;
      width: 182px;
    }

    &__button {
    }
  }
}
@media (max-width: 820px) {
  .wasyt {
    &__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 30px;
    }

    &__image {
      width: 280px !important;
    }

    &__right-box {
    }

    &__title {
    }

    &__texts {
      font-size: 14px;
      width: 437px;
      margin-bottom: 30px;
    }
    &__second-texts {
      font-size: 14px;
      width: 437px;
    }
    &__main-mini-box {
    }

    &__main-mini-boxes {
    }

    &__numbers {
    }

    &__mini-titles {
      font-size: 14px;
      width: 182px;
    }

    &__button {
    }
  }
}
@media (max-width: 818px) {
  .wasyt {
    &__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 30px;
    }

    &__image {
      width: 240px !important;
    }

    &__right-box {
    }

    &__title {
    }

    &__texts {
      font-size: 14px;
      width: 437px;
      margin-bottom: 30px;
    }
    &__second-texts {
      font-size: 14px;
      width: 437px;
    }

    &__main-mini-box {
    }

    &__main-mini-boxes {
    }

    &__numbers {
    }

    &__mini-titles {
      font-size: 14px;
      width: 182px;
    }

    &__button {
    }
  }
}
@media (max-width: 767px) {
  .wasyt {
    &__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 40px 16px;
    }

    &__image {
      width: 400px !important;
    }

    &__right-box {
    }

    &__title {
    }

    &__texts {
      font-size: 14px;
      width: 100%;
      max-width: 360px;
      margin-bottom: 30px;
    }
    &__second-texts {
      width: 100%;
      max-width: 360px;
    }

    &__main-mini-box {
    }

    &__main-mini-boxes {
    }

    &__numbers {
    }

    &__mini-titles {
      font-size: 14px;
      width: 100%;
      max-width: 176px;
    }

    &__button {
    }
  }
}
</style>
