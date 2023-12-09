<template>
  <section id="partnership" class="form mt-[80px] px-4 md:hidden">
    <div
      class="container form__container flex flex-col justify-between items-center rounded-[32px] px-6 pt-6 pb-[137px]"
    >
      <div class="form__top-box flex flex-col justify-center items-center">
        <h2
          class="form__title text-white text-[24px] font-bold leading-[130%] w-max-[312px]"
        >
          Форма для обратной связи
        </h2>
        <p
          class="form__text text-white/80 text-sm font-normal leading-[140%] mt-4 w-max-[312px]"
        >
          Описываем любые сложные цифровые системы с точки зрения требований,
          составляем подробную проектную документацию
        </p>
      </div>
      <form
        class="form__bottom w-full flex flex-col justify-center items-center gap-2 mt-6"
        @submit.prevent="sendInformation"
        action="https://echo.htmlacademy.ru"
        method="get"
      >
        <div class="w-full">
          <input
            type="text"
            name="text"
            v-model.trim="username"
            id="username"
            autocomplete="off"
            class="form__number-text py-4 pr-[18px] pl-[30px] border-[1px] border-[#70D2DF] text-sm font-normal leading-[140%] text-white bg-blue rounded-[57px] outline-none w-full"
            placeholder="Имя"
            required
          />
        </div>
        <div class="w-full">
          <input
            type="tel"
            name="number"
            v-model.number="tel"
            id="tel"
            autocomplete="off"
            class="form__number-input py-4 pr-[18px] pl-[30px] border-[1px] border-[#70D2DF] text-sm font-normal leading-[140%] text-white bg-blue rounded-[57px] outline-none w-full"
            placeholder="Телефон номер"
            maxlength="13"
            required
          />
        </div>
        <button
          type="submit"
          class="form__button w-full px-8 py-[14px] bg-white flex flex-row justify-center items-center gap-4 text-blue rounded-[85px] text-base font-semibold leading-[150%]"
        >
          Отправить
          <i class="icon fa-solid fa-arrow-right-long fa-beat"></i>
        </button>
      </form>
    </div>
  </section>
</template>
<script>
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      toast: useToast(),
      username: "",
      tel: "",
      error: {
        nameError: null,
      },
      errorSecond: {
        nameErrorSecond: null,
      },
    };
  },
  methods: {
    validatedForm() {
      let isValid = true;
      if (this.username.length === 0) {
        isValid = false;
        this.error.nameError = "*Enter here your fullname";
      } else {
        isValid = true;
        this.error.nameError = null;
      }
      return isValid;
    },
    validatedFormSecond() {
      let isValidSecond = true;
      if (this.tel.length <= 4) {
        isValidSecond = false;
        this.errorSecond.nameErrorSecond = "*Enter your number here";
      } else if (this.tel.length > 13) {
        isValidSecond = false;
        this.errorSecond.nameErrorSecond = "*At least 13 characters!";
      } else {
        isValidSecond = true;
        this.errorSecond.nameErrorSecond = null;
      }
      return isValidSecond;
    },
    sendInformation() {
      if (this.validatedForm() && this.validatedFormSecond()) {
        this.sendData(this.username, this.tel);
      }
    },
    async sendData(name, tel) {
      const token = `6387339127:AAE-jmpwseGj0s3kpfOdx2bB827_PuolINg`;
      const bot_id = `-1001837026407`;
      const info = `User: %0A<strong>Username:</strong> ${name} %0A<strong>Phone Number:</strong> ${tel}`;
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${bot_id}&text=${info}&parse_mode=html`
      );
      const data = await response.json();
      console.log(data);
      this.username = "";
      this.tel = "";
      this.toast.info("Your information has been sent");
    },
  },
  watch: {
    tel(val) {
      if (val) {
        const str = String(val);
        this.tel = "+" + str.replace(/\D/g, "");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#username::placeholder {
  color: #fff !important;
}
#tel::placeholder {
  color: #fff !important;
}
.form {
  &__container {
    background: linear-gradient(101deg, #2db7ca 0.41%, #01889a 108.74%);
    position: relative;
    &::after {
      margin: 0 auto !important;
      position: absolute;
      content: "";
      display: inline-block;
      width: 100%;
      max-width: 328px;
      height: 154px;
      bottom: -55px;
      left: 0;
      right: 0;
      background-image: url("@/assets/images/ipad__pro.png");

      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  &__top-box {
  }
  &__title {
  }
  &__text {
  }
  &__bottom {
  }
  &__number-text {
    font-family: "TT Interfaces";
  }
  &__number-input {
    font-family: "TT Interfaces";
  }
  &__button {
    font-family: "TT Interfaces";
  }
}
</style>
