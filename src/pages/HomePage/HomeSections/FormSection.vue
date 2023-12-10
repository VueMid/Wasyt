<template>
  <section
    id="partnership"
    class="form mt-[80px] px-4 md:mt-[100px] md:px-[30px] lg:px-[56px] lg:mt-[120px]"
  >
    <div
      class="container form__container flex flex-col justify-center items-start rounded-[32px] px-6 pt-6 pb-[137px] md:flex md:flex-col md:justify-center md:items-start md:rounded-[28px] md:px-6 md:pt-[30px] md:pb-[30px] lg:rounded-[38px] lg:px-[50px] lg:pt-[50px] lg:pb-[50px]"
    >
      <div class="form__top-box flex flex-col justify-center items-start">
        <h2
          class="form__title mb-4 text-white w-max-[312px] text-[24px] font-bold leading-[130%] md:text[20px] md:w-[317px] lg:text-[30px] lg:w-[399px]"
        >
          Форма для обратной связи
        </h2>
        <p
          class="form__text text-white/80 mb-6 w-max-[312px] text-sm font-normal leading-[140%] md:w-[361px] md:mb-[40px] lg:w-[570px] lg:leading-[150%]"
        >
          Описываем любые сложные цифровые системы с точки зрения требований,
          составляем подробную проектную документацию
        </p>
      </div>
      <form
        class="form__bottom w-full flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center"
        @submit.prevent="sendInformation"
        action="https://echo.htmlacademy.ru"
        method="get"
      >
        <div
          class="form__main-inputs w-full flex flex-col justify-center items-center gap-2 md:flex md:flex-row md:justify-center md:items-center md:gap-0"
        >
          <input
            type="text"
            name="text"
            v-model.trim="username"
            id="username"
            autocomplete="off"
            class="form__number-text w-full bg-blue text-white border-[1px] border-[#70D2DF] rounded-[57px] py-4 pl-[18px] outline-none md:py-[18px] md:pl-6 md:border-e-0 md:rounded-e-none md:w-max md:pr-10 lg:pr-20"
            placeholder="Имя"
            required
          />

          <div class="w-full">
            <span
              class="form__span hidden md:block md:w-[1px] md:h-[31px] md:absolute md:bg-[#70D2DF] md:mt-4"
            ></span>
            <input
              type="tel"
              name="number"
              v-model.number="tel"
              id="tel"
              autocomplete="off"
              class="form__number-input w-full text-white bg-blue border-[1px] border-[#70D2DF] rounded-[57px] py-4 pl-[18px] outline-none md:py-[18px] md:pl-6 md:border-s-0 md:rounded-s-none lg:w-max lg:pr-48"
              placeholder="Телефон номер"
              maxlength="13"
              required
            />
          </div>
          <button
            type="submit"
            class="form__button w-full bg-white rounded-[85px] py-[14px] flex flex-row justify-center items-center gap-4 text-blue active:opacity-80 duration-200 md:w-max md:absolute md:py-[14px] md:px-6 md:right-[30px] lg:right-0 lg:left-[550px]"
          >
            Отправить
            <i class="icon fa-solid fa-arrow-right-long fa-beat"></i>
          </button>
        </div>
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
      margin: 0 auto;
      position: absolute;
      content: "";
      display: block;
      width: 700px;
      height: 240px;
      bottom: 30px;
      right: -125px;
      background-image: url("@/assets/images/main__ipad-pro.png");
      background-position: center;
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

  &__main-inputs {
  }

  &__number-text {
    font-family: "TT Interfaces";
  }

  &__span {
  }

  &__number-input {
    font-family: "TT Interfaces";
  }

  &__button {
    font-family: "TT Interfaces";
  }
}
@media (max-width: 1315px) {
  .form {
    &__container {
      background: linear-gradient(101deg, #2db7ca 0.41%, #01889a 108.74%);
      position: relative;
      &::after {
        margin: 0 auto;
        position: absolute;
        content: "";
        display: block;
        width: 700px;
        height: 152px;
        bottom: 150px;
        right: -150px;
        background-image: url("@/assets/images/main__ipad-pro.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }

    &__top-box {
    }

    &__title {
      width: 361px;
    }

    &__text {
      width: 361px;
    }

    &__bottom {
    }

    &__main-inputs {
    }

    &__number-text {
      font-family: "TT Interfaces";
    }

    &__span {
    }

    &__number-input {
      font-family: "TT Interfaces";
    }

    &__button {
      font-family: "TT Interfaces";
    }
  }
}
@media (max-width: 1023px) {
  .form {
    &__container {
      background: linear-gradient(101deg, #2db7ca 0.41%, #01889a 108.74%);
      position: relative;
      &::after {
        margin: 0 auto;
        position: absolute;
        content: "";
        display: block;
        width: 700px;
        height: 142px;
        bottom: 100px;
        right: -185px;
        background-image: url("@/assets/images/main__ipad-pro.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }

    &__top-box {
    }

    &__title {
      width: 361px;
    }

    &__text {
      width: 361px;
    }

    &__bottom {
    }

    &__main-inputs {
    }

    &__number-text {
      font-family: "TT Interfaces";
    }

    &__span {
    }

    &__number-input {
      font-family: "TT Interfaces";
    }

    &__button {
      font-family: "TT Interfaces";
      left: auto;
    }
  }
}
@media (max-width: 767px) {
  .form {
    &__container {
      background: linear-gradient(101deg, #2db7ca 0.41%, #01889a 108.74%);
      position: relative;
      &::after {
        margin: 0 auto;
        position: absolute;
        content: "";
        display: inline-block;
        width: 100%;
        max-width: 330px;
        height: 160px;
        bottom: -55px;
        left: 0;
        right: 0;
        background-image: url("@/assets/images/ipad__pro.png");
        background-position: center;
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

    &__main-inputs {
    }

    &__number-text {
    }

    &__span {
    }

    &__number-input {
    }

    &__button {
    }
  }
}
</style>
