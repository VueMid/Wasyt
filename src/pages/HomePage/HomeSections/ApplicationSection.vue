<template>
  <section class="application overflow-y-hidden">
    <div class="container application__container">
      <div
        class="application__wrapper flex flex-col justify-center items-center px-[24px] pt-[40px] pb-[275px] rounded-[32px]"
      >
        <h3
          class="application__title text-[24px] leading-[120%] font-bold w-max-[312px] text-white mb-4"
        >
          Как использовать наше приложение?
        </h3>
        <p
          class="application__text text-white/80 text-[14px] leading-[140%] font-normal w-max-[312px] mb-5"
        >
          Васыт позволяет торговать и взаимодействовать с юридическими и
          физическими лицами позволяет подписать шариатский договор. ⚡ ️Договор
          заключается разово. он также будет иметь юридическую силу. 🤗
        </p>
        <p
          class="application__second-text text-white/80 text-[14px] leading-[140%] font-normal w-max-[312px] mb-10"
        >
          Приложение имеет удобный и простой в использовании интерфейс, поэтому
          вам не придется дает возможность подписать договор без каких-либо
          затруднений. 🥇 Теперь вы находитесь лицом к лицу со своим партнером,
          чтобы заключить сделку. вам не обязательно встречаться, договориться
          легко даже удаленно ты можешь сделать
        </p>
        <div
          class="application__bottom-box w-full flex flex-row justify-between items-center gap-4"
        >
          <TheDownload class="application__button w-full">
            Получить Демо
          </TheDownload>
          <div
            @click="openModals"
            class="application__multimedia cursor-pointer"
          >
            <img src="@/assets/icons/multimedia.svg" alt="multimedia" />
          </div>
        </div>
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
.application {
  &__container {
  }

  &__wrapper {
    background: linear-gradient(101deg, #2db7ca 0.41%, #01889a 108.74%);
    position: relative;
    &::after {
      margin: 0 auto !important;
      position: absolute;
      content: "";
      display: inline-block;
      width: 100%;
      max-width: 340px;
      height: 232px;
      left: 0;
      right: 0;
      bottom: -40px;
      background-image: url("@/assets/images/macbookpro.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }

  &__title {
    font-family: "TT Interfaces" !important;
  }

  &__text {
    font-family: "TT Interfaces" !important;
  }

  &__second-text {
    font-family: "TT Interfaces" !important;
  }

  &__bottom-box {
  }

  &__demo {
  }

  &__multimedia {
  }
}
</style>
