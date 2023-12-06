<template>
  <div
    class="fixed top-0 left-0 right-0 w-full p-4 duration-100 overflow-y-auto h-full max-h-full backdrop-blur-sm bg-white/30 dark:backdrop-blur-sm dark:bg-tailwind-dark/30 flex justify-center items-center xl:px-[0px]"
  >
    <div
      class="bg-white card dark:bg-tailwind-dark flex flex-col justify-center items-center w-[360px] h-[620px] px-[24px] xl:w-[748px] xl:h-[570px] xl:px-[106px] xl:py-12 rounded-[32px] relative dark:border-[2px] dark:border-dark-cyan"
    >
      <form
        class="w-full flex flex-col gap-4"
        @submit.prevent="sendInformation"
        action="https://echo.htmlacademy.ru"
        method="get"
      >
        <h5
          class="text text-xl font-bold text-dark-cyan dark:text-white title xl:mb-[0px]"
        >
          Свяжется с нами
        </h5>
        <hr class="hr w-full xl:mb-[20px] border opacity-30" />
        <div class="form-control" :class="error.nameError ? 'invalid' : ''">
          <button
            type="button"
            @click="$emit('closeModal')"
            class="text-[#020105] font-bold top-[16px] right-[16px] xl:top-[23px] xl:right-[23px] absolute"
            data-modal-hide="staticModal"
          >
            <svg
              class="w-[17px] h-[17px] xl:w-[20px] xl:h-[20px] dark:text-white"
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
          <input
            type="text"
            name="text"
            v-model.trim="username"
            id="username"
            autocomplete="off"
            class="bg-gray-50 border border-gray-300 rounded-[32px] text-sm text-[#8d8a8a] focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 py-4 pl-[18px] xl:py-4 xl:pl-[30px] outline-none"
            placeholder="Имя"
          />
          <small class="text-red-600 font-black text-[14px]">
            {{ error.nameError }}
          </small>
        </div>
        <div
          class="form-control"
          :class="errorSecond.nameErrorSecond ? 'invalid' : ''"
        >
          <input
            type="tel"
            name="number"
            v-model.number="tel"
            id="tel"
            autocomplete="off"
            class="bg-gray-50 border border-gray-300 rounded-[32px] text-sm text-[#8d8a8a] focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 py-4 pl-[18px] xl:py-4 xl:pl-[30px] outline-none"
            maxlength="13"
          />
          <small class="text-red-600 font-black text-[14px]">
            {{ errorSecond.nameErrorSecond }}
          </small>
        </div>
        <div
          class="form-control"
          :class="errorThird.nameErrorThird ? 'invalid' : ''"
        >
          <input
            type="text"
            name="text"
            v-model.trim="message"
            id="message"
            autocomplete="off"
            class="bg-gray-50 border border-gray-300 rounded-[32px] text-[#8d8a8a] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 pt-4 pl-4 pb-[200px] xl:pt-[20px] xl:pb-[134px] xl:pl-[30px] outline-none"
            placeholder="Сообщение"
          />
          <small class="text-red-600 font-black text-[14px]">
            {{ errorThird.nameErrorThird }}
          </small>
        </div>

        <button
          type="submit"
          class="modal-button flex flex-row justify-center items-center gap-4 bg-blue text-white px-[32px] py-[14px] rounded-[85px] active:opacity-60"
        >
          <span class="">Отправить</span>
          <i class="icon fa-solid fa-arrow-right-long fa-beat"></i>
        </button>
      </form>
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
      } else if (this.tel.length > 13) {
        isValidSecond = false;
        this.errorSecond.nameErrorSecond = "*At least 13 characters!";
      } else {
        isValidSecond = true;
        this.errorSecond.nameErrorSecond = null;
      }
      return isValidSecond;
    },
    validatedFormThird() {
      let isValidThird = true;
      if (this.message.length === 0) {
        isValidThird = false;
        this.errorThird.nameErrorThird = "*Enter your message here";
      } else {
        isValidThird = true;
        this.errorThird.nameErrorThird = null;
      }
      return isValidThird;
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
    async sendData(name, email, tel) {
      const token = `6387339127:AAE-jmpwseGj0s3kpfOdx2bB827_PuolINg`;
      const bot_id = `-1001837026407`;
      const info = `User: %0A<strong>Username:</strong> ${name} %0A<strong>Email Address:</strong> ${email} %0A<strong>Phone Number:</strong> ${tel}`;
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
<style scoped>
#username::placeholder {
  color: rgb(141, 138, 138) !important;
}
#tel::placeholder {
  color: rgb(141, 138, 138) !important;
}
#message::placeholder {
  color: rgb(141, 138, 138) !important;
}
.form-control.invalid input {
  border-color: red;
}
.card {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
