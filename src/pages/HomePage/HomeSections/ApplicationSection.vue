<template>
  <section
    id="application"
    class="application mt-[80px] md:mt-[100px] lg:mt-[120px]"
  >
    <div class="container application__container">
      <div
        class="application__main-wrapper flex flex-col justify-center items-center rounded-[32px] px-[24px] pt-[40px] pb-[275px] py-[0px] md:flex md:flex-row md:justify-between md:items-center md:rounded-[28px] md:px-[30px] md:py-[30px] lg:flex lg:flex-row lg:justify-between lg:items-center lg:rounded-[38px] lg:px-[54px] lg:py-[59px]"
      >
        <div
          class="application__left-box flex flex-col justify-center items-center md:flex md:flex-col md:justify-start md:items-start lg:flex lg:flex-col lg:justify-start lg:items-start"
        >
          <h3
            class="application__title text-white w-max-[312px] text-[24px] font-bold leading-[120%] mb-[16px] md:w-[365px] md:text-[20px] md:font-bold md:leading-[120%] md:mb-[14px] lg:w-[664px] lg:text-[30px] lg:font-bold lg:leading-[120%] lg:mb-4"
          >
            Как использовать наше приложение?
          </h3>
          <p
            class="application__text text-white/90 w-max-[312px] text-[14px] font-normal leading-[140%] mb-[14px] md:w-[325px] md:text-[14px] md:font-normal md:leading-[140%] md:mb-[14px] lg:text-[16px] lg:font-normal lg:leading-[150%] lg:w-[664px] lg:mb-4"
          >
            Wasyt позволяет торговать и взаимодействовать с юридическими и
            физическими лицами позволяет подписать шариатский договор. ⚡
            ️Договор заключается разово. он также будет иметь юридическую силу.
            🤗
          </p>
          <p
            class="application__second-text text-white/90 w-max-[312px] text-[14px] font-normal leading-[140%] mb-[40px] md:w-[325px] md:text-[14px] md:font-normal md:leading-[140%] md:mb-[30px] lg:text-[16px] lg:font-normal lg:leading-[150%] lg:w-[664px] lg:mb-12"
          >
            Приложение имеет удобный и простой в использовании интерфейс,
            поэтому вам не придется дает возможность подписать договор без
            каких-либо затруднений. 🥇 Теперь вы находитесь лицом к лицу со
            своим партнером, чтобы заключить сделку. вам не обязательно
            встречаться, договориться легко даже удаленно ты можешь сделать
          </p>
          <div
            class="application__bottom-box flex flex-row justify-center items-center gap-[26px] md:flex md:flex-row md:justify-center md:items-center md:gap-[26px] lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[36px]"
          >
            <TheDownload class="application__button">
              Получить Демо
            </TheDownload>
            <div
              @click="openModals"
              class="application__multimedia active:opacity-75 cursor-pointer duration-100"
            >
              <img src="@/assets/icons/multimedia.svg" alt="multimedia" />
            </div>
          </div>
        </div>
        <div class="application__right-box w-full"></div>
      </div>
    </div>
  </section>
  <Transition name="modal" class="relative z-[1111]">
    <div class="header__main-modal" v-if="isModalOpened">
      <ApplicationComponent @closeModal="closeModal" />
    </div>
  </Transition>
</template>
<script>
import ApplicationComponent from "../components/ApplicationComponent.vue";
import TheDownload from "../../../MaterialUI/TheDownload.vue";
export default {
  data() {
    return {
      isModalOpened: false,
    };
  },
  methods: {
    openModals() {
      this.isModalOpened = true;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.isModalOpened = false;
      document.body.style.overflow = "auto";
    },
  },
  components: { ApplicationComponent, TheDownload },
};
</script>
<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.application {
  &__container {
  }
  &__main-wrapper {
    background: linear-gradient(101deg, #2db7ca 0.41%, #01889a 108.74%);
  }
  &__left-box {
    width: 100%;
  }

  &__title {
    width: 664px;
  }

  &__text {
    width: 664px;
  }

  &__second-text {
    width: 664px;
  }

  &__bottom-box {
  }

  &__button {
  }

  &__multimedia {
  }

  &__right-box {
    position: relative;
    &::after {
      position: absolute;
      content: "";
      display: inline-block;
      width: 600px;
      height: 350px;
      bottom: -180px;
      right: -100px;
      background-image: url("@/assets/images/main__macbookpro.png");
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
@media (max-width: 1320px) {
  .application {
    &__container {
    }
    &__main-wrapper {
      background: linear-gradient(101deg, #2db7ca 0.41%, #01889a 108.74%);
    }
    &__left-box {
    }

    &__title {
      width: 664px;
    }

    &__text {
      width: 410px;
    }

    &__second-text {
      width: 410px;
    }

    &__bottom-box {
    }

    &__button {
    }

    &__multimedia {
    }

    &__right-box {
      position: relative;
      &::after {
        position: absolute;
        content: "";
        display: block;
        width: 600px;
        height: 350px;
        bottom: -180px;
        right: -100px;
        background-image: url("@/assets/images/main__macbookpro.png");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
}
@media (max-width: 1023px) {
  .application {
    &__container {
    }
    &__main-wrapper {
      background: linear-gradient(101deg, #2db7ca 0.41%, #01889a 108.74%);
    }
    &__left-box {
    }

    &__title {
      width: 365px;
    }

    &__text {
      width: 325px;
    }

    &__second-text {
      width: 325px;
    }

    &__bottom-box {
    }

    &__button {
    }

    &__multimedia {
    }

    &__right-box {
      position: relative;
      &::after {
        position: absolute;
        content: "";
        display: block;
        width: 600px;
        height: 260px;
        bottom: -130px;
        right: -200px;
        background-image: url("@/assets/images/main__macbookpro.png");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
}
@media (max-width: 819px) {
  .application {
    &__container {
    }
    &__main-wrapper {
      background: linear-gradient(101deg, #2db7ca 0.41%, #01889a 108.74%);
    }
    &__left-box {
    }

    &__title {
      width: 365px;
    }

    &__text {
      width: 325px;
    }

    &__second-text {
      width: 325px;
    }

    &__bottom-box {
    }

    &__button {
    }

    &__multimedia {
    }

    &__right-box {
      position: relative;
      &::after {
        position: absolute;
        content: "";
        display: block;
        width: 600px;
        height: 235px;
        bottom: -120px;
        right: -240px;
        background-image: url("@/assets/images/main__macbookpro.png");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
}
@media (max-width: 767px) {
  .application {
    &__container {
    }
    &__main-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(101deg, #2db7ca 0.41%, #01889a 108.74%);
    }
    &__left-box {
    }

    &__title {
      width: 100%;
      max-width: 312px;
    }

    &__text {
      width: 100%;
      max-width: 312px;
    }

    &__second-text {
      width: 100%;
      max-width: 312px;
    }

    &__bottom-box {
    }

    &__button {
    }

    &__multimedia {
    }

    &__right-box {
      position: relative;
      &::after {
        margin: 0 auto !important;
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        max-width: 392px;
        height: 250px;
        top: 84px;
        right: 0px;
        left: 0px;
        background-image: url("@/assets/images/macbookpro.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
    }
  }
}
</style>
