<template>
  <section
    class="wasyt bg-[#F4FDFE] mt-[180px] md:mt-[100px] dark:bg-tailwind-dark"
  >
    <div
      class="container wasyt__container lg:flex lg:flex-row lg:justify-between lg:items-center lg:py-10 lg:px-0"
    >
      <div class="flex flex-col">
        <h3
          class="wasyt__title mr-auto md:hidden text-[24px] mb-3 text-dark-cyan font-bold leading-[120%] lg:text-[30px] dark:text-white"
        >
          Что такое Wasyt?
        </h3>
        <p
          class="wasyt__texts md:hidden mb-[50px] dark:text-white text-[#5D5D5F] font-normal leading-[150%] lg:w-[728px] lg:text-[16px] lg:mb-10"
        >
          Wasyt sizga yuridik va jismoniy shaxslar bilan nasiya savdo va o’zaro
          shar’iy shartnoma imzolash imkonini beradi. ⚡ ️Shartnoma bir vaqtning
          o’zida yuridik kuchga ham ega bo’ladi. 🤗
        </p>
      </div>

      <img
        class="wasyt__image mb-10 md:mb-0 lg:w-[440px]"
        src="@/assets/images/card.png"
        alt="card__image"
      />
      <div class="wasyt__right-box">
        <h3
          class="wasyt__title hidden md:block text-[24px] mb-3 text-dark-cyan font-bold leading-[120%] lg:text-[30px] dark:text-white"
        >
          Что такое Wasyt?
        </h3>
        <p
          class="wasyt__texts hidden md:block dark:text-white text-[#5D5D5F] font-normal leading-[150%] lg:w-[728px] lg:text-[16px] lg:mb-10"
        >
          Wasyt sizga yuridik va jismoniy shaxslar bilan nasiya savdo va o’zaro
          shar’iy shartnoma imzolash imkonini beradi. ⚡ ️Shartnoma bir vaqtning
          o’zida yuridik kuchga ham ega bo’ladi. 🤗
        </p>
        <p
          class="wasyt__second-texts dark:text-white text-[#5D5D5F] font-normal leading-[150%] lg:w-[728px] lg:text-[16px] lg:mb-[30px]"
        >
          Ilova qulay va foydalanishga oson interfeysga ega bo’lib, sizga hech
          qanday qiyinchiliklarsiz shartnoma imzolash imkoniyatini beradi.
          Endilikda, siz shartnoma tuzish uchun hamkoringiz bilan yuzma-yuz
          uchrashishingiz shart emas, masofadan turib ham bemalol shartnomalar
          tuzishingiz mumkin
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
              Активно работаем в Центральной Азии и странах СНГ
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
              Активно работаем в Центральной Азии и странах СНГ
            </p>
          </div>
        </div>
        <TheButton class="wasyt__button w-full md:w-max">
          Свяжется с нами
        </TheButton>
      </div>
    </div>
  </section>
</template>
<script>
import TheButton from "../../../MaterialUI/TheButton.vue";
export default {
  components: { TheButton },
};
</script>
<style lang="scss" scoped>
.wasyt {
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 56px;
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
