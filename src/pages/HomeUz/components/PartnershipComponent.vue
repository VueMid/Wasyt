<template>
  <div
    class="partnership fixed w-full h-full top-0 backdrop-blur-sm bg-white/30 dark:backdrop-blur-sm dark:bg-tailwind-dark/30 px-4 overflow-y-auto overflow-x-hidden flex flex-col justify-center items-center md:flex md:flex-col md:justify-center md:items-center md:px-[30px] lg:flex lg:flex-row lg:justify-center lg:items-center lg:px-[56px]"
  >
    <div
      class="partnership__wrapper rounded-[32px] flex flex-col justify-center items-center gap-0 mt-[315px] relative md:w-full md:flex md:flex-col md:justify-center md:items-center md:rounded-[32px] md:mt-[250px] lg:flex lg:flex-row lg:justify-center lg:items-center lg:rounded-[48px] lg:w-auto"
    >
      <div
        class="partnership__left-box md:w-full hidden md:block lg:dark:border-[2px] lg:dark:border-dark-cyan lg:rounded-none lg:rounded-s-[48px] lg:w-auto"
      >
        <img
          class="partnership__left-image w-full rounded-t-[32px] object-contain hidden md:block lg:hidden"
          src="@/assets/images/boy__second.png"
          alt="guy"
        />
        <img
          class="partnership__left-image rounded-t-[32px] hidden lg:block lg:rounded-none lg:rounded-s-[48px] lg:h-[773px] object-cover"
          src="@/assets/images/guy.png"
          alt="guy"
        />
      </div>
      <div
        class="partnership__right-box flex flex-col justify-center items-start bg-white dark:bg-tailwind-dark dark:border-[2px] dark:border-dark-cyan px-6 py-[26px] rounded-[32px] md:w-full md:flex md:flex-col md:justify-center md:items-start md:px-[27px] md:py-[30px] md:rounded-none md:rounded-b-[32px] lg:py-[0px] lg:h-[773px] lg:rounded-none lg:rounded-e-[48px] lg:w-auto"
      >
        <h3
          class="partnership__right-title text-2xl font-bold leading-[130%] dark:text-white mb-4 md:text-[22px]"
        >
          Biz bilan hamkorlik qilishga tayyormisiz?
        </h3>
        <ul class="partnership__right-main-list">
          <li class="partnership__right-lists list-disc text-[#2DB7CA] ml-6">
            <h5
              class="partnership__right-mini-titles w-max-[292px] text-base font-semibold leading-[150%] mb-2 md:text-lg md:w-[310px]"
            >
              Bo'limlar, bo'limlar, franchayzilar
            </h5>
            <p
              class="partnership__right-mini-texts w-max-[292px] text-dark-cyan text-sm font-normal leading-[140%] dark:text-white mb-6 md:mb-6"
            >
              Bir nechta yuridik shaxslarni, ofislarni yoki omborlarni
              birlashtiring tizimi. Turli bo'limlar uchun ma'lumotlarga kirishni
              cheklash
            </p>
          </li>
          <li class="partnership__right-lists list-disc text-[#2DB7CA] ml-6">
            <h5
              class="partnership__right-mini-titles w-max-[292px] text-base font-semibold leading-[150%] mb-2 md:text-lg md:w-[310px]"
            >
              Kirish nazorati
            </h5>
            <p
              class="partnership__right-mini-texts w-max-[292px] text-dark-cyan text-sm font-normal leading-[140%] dark:text-white mb-6 md:mb-6"
            >
              Foydalanuvchi huquqlarini menyu va funksiyalarga ajrating,
              keraksizlarini yashiring ma'lumotlar. Xodimlarning harakatlarini
              to'liq qayd etish.
            </p>
          </li>
          <li class="partnership__right-lists list-disc text-[#2DB7CA] ml-6">
            <h5
              class="partnership__right-mini-titles w-max-[292px] text-base font-semibold leading-[150%] mb-2 md:text-lg md:w-[310px]"
            >
              Analitika
            </h5>
            <p
              class="partnership__right-mini-texts w-max-[292px] text-dark-cyan text-sm font-normal leading-[140%] dark:text-white mb-10 md:mb-8"
            >
              Hisobotlarni smartfon yoki pochta orqali ko'ring: aylanma,
              balanslar, mahsulot va mijoz bo'yicha sotish va rentabellik, naqd
              pul oqim.
            </p>
          </li>
        </ul>
        <form
          class="partnership__right-form w-full flex flex-col justify-center items-center gap-2 md:flex md:flex-col md:justify-center md:items-center md:gap-4"
          @submit.prevent="sendInformation"
          action="https://echo.htmlacademy.ru"
          method="get"
        >
          <button
            type="button"
            @click="$emit('closeModal')"
            class="partnership__right-buttons text-dark-cyan dark:text-white"
            data-modal-hide="staticModal"
          >
            <svg
              class="partnership__right-svg absolute w-5 h-5 top-9 right-6 md:w-7 md:h-7 md:top-5 md:right-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div
            class="partnership__right-main-input w-full flex flex-col justify-center items-center gap-2 md:flex md:flex-row md:justify-center md:items-center md:gap-0"
          >
            <input
              type="text"
              name="text"
              v-model.trim="username"
              id="username"
              autocomplete="off"
              class="partnership__right-username-input w-full outline-none bg-[#F9F9FB] text-dark-cyan text-sm font-medium leading-[140%] rounded-[57px] border-[1px] border-[#EBF0F0] py-4 pl-[18px] dark:bg-tailwind-dark dark:border-gray-500 dark:text-white md:border-e-0 md:rounded-e-none"
              placeholder="Ism"
              required
            />
            <div class="w-full">
              <span
                class="md:w-[1px] md:h-[30px] md:mt-3 absolute bg-[#EBF0F0] dark:bg-gray-500"
              ></span>
              <input
                type="tel"
                name="number"
                v-model.number="tel"
                id="tel"
                autocomplete="off"
                class="partnership__right-tel-input w-full outline-none bg-[#F9F9FB] text-dark-cyan text-sm font-medium leading-[140%] rounded-[57px] border-[1px] border-[#EBF0F0] py-4 pl-[18px] dark:bg-tailwind-dark dark:border-gray-500 dark:text-white md:border-s-0 md:rounded-s-none"
                placeholder="Telefon raqam"
                maxlength="13"
                max="13"
                required
              />
            </div>
          </div>
          <input
            type="text"
            name="text"
            v-model.trim="message"
            id="message"
            autocomplete="off"
            class="partnership__right-message-input w-full outline-none bg-[#F9F9FB] text-dark-cyan text-sm font-medium leading-[140%] rounded-[32px] border-[1px] border-[#EBF0F0] pt-4 pb-[201px] pl-[18px] dark:bg-tailwind-dark dark:border-gray-500 dark:text-white"
            placeholder="Xabar"
            required
          />
          <button
            type="submit"
            class="partnership__submit-button flex flex-row justify-center items-center gap-4 text-white w-full bg-[#2DB7CA] rounded-[85px] outline-none py-[14px] active:opacity-60 duration-100 text-base font-semibold leading-[150%]"
          >
            Yuborish
            <i class="icon fa-solid fa-arrow-right-long fa-beat"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      toast: useToast(),
      username: "",
      tel: "+998",
      message: "",
      error: {
        nameError: null,
      },
      errorSecond: {
        nameErrorSecond: null,
      },
      errorThird: {
        nameErrorThird: null,
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
      } else if (this.tel.length < 13) {
        isValidSecond = false;
        this.errorSecond.nameErrorSecond = "*At least 13 characters!";
      } else {
        isValidSecond = true;
        this.errorSecond.nameErrorSecond = null;
      }
      return isValidSecond;
    },
    validatedFormThird() {
      let isValid = true;
      if (this.message.length === 0) {
        isValid = false;
        this.errorThird.nameErrorThird = "*Enter here your fullname";
      } else {
        isValid = true;
        this.errorThird.nameErrorThird = null;
      }
      return isValid;
    },
    sendInformation() {
      if (
        this.validatedForm() &&
        this.validatedFormSecond() &&
        this.validatedFormThird()
      ) {
        this.sendData(this.username, this.tel, this.message);
      }
    },
    async sendData(name, tel, message) {
      const token = `6387339127:AAE-jmpwseGj0s3kpfOdx2bB827_PuolINg`;
      const bot_id = `-1001837026407`;
      const info = `User: %0A<strong>Full-name 🤖:</strong> ${name} %0A<strong>Phone Number ☎️:</strong> ${tel} %0A<strong>Message 📩:</strong> ${message}`;
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${bot_id}&text=${info}&parse_mode=html`
      );
      const data = await response.json();
      console.log(data);
      this.username = "";
      this.tel = "";
      this.message = "";
      this.toast.info("Your information has been sent");
      this.$emit("closeModal");
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
<style scoped lang="scss">
#username::placeholder {
  color: rgb(141, 138, 138) !important;
}
#tel::placeholder {
  color: rgb(141, 138, 138) !important;
}
#message::placeholder {
  color: rgb(141, 138, 138) !important;
}
.partnership {
  &__wrapper {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  &__left-box {
  }

  &__left-image {
  }

  &__right-box {
  }

  &__right-title {
  }

  &__right-main-list {
  }

  &__right-lists {
  }

  &__right-mini-titles {
  }

  &__right-mini-texts {
  }

  &__right-form {
  }

  &__right-buttons {
  }

  &__right-svg {
  }

  &__right-main-input {
  }

  &__right-username-input {
  }

  &__right-tel-input {
  }

  &__right-message-input {
  }

  &__submit-button {
  }
}
@media (max-width: 767px) {
  .partnership {
    &__wrapper {
    }
    &__left-box {
    }
    &__left-image {
    }
    &__right-box {
      box-shadow: rgb(0, 0, 0) 0px 5px 15px;
    }
    &__right-title {
      width: 100%;
      max-width: 305px;
    }
    &__right-main-list {
    }
    &__right-lists {
    }
    &__right-mini-titles {
    }
    &__right-mini-texts {
    }
    &__right-form {
    }
    &__right-buttons {
    }
    &__right-svg {
    }
    &__right-main-input {
    }
    &__right-username-input {
    }
    &__right-tel-input {
    }
    &__right-message-input {
    }
    &__submit-button {
    }
  }
}
@media (max-width: 374px) {
  .partnership {
    &__wrapper {
    }
    &__left-box {
    }
    &__left-image {
    }
    &__right-box {
    }
    &__right-title {
      width: 100%;
      max-width: 246px;
    }
    &__right-main-list {
    }
    &__right-lists {
    }
    &__right-mini-titles {
    }
    &__right-mini-texts {
    }
    &__right-form {
    }
    &__right-buttons {
    }
    &__right-svg {
    }
    &__right-main-input {
    }
    &__right-username-input {
    }
    &__right-tel-input {
    }
    &__right-message-input {
    }
    &__submit-button {
    }
  }
}
</style>
