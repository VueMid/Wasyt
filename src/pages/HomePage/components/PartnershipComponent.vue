<template>
  <div
    class="right fixed top-0 w-full h-full backdrop-blur-sm bg-white/30 dark:backdrop-blur-sm dark:bg-tailwind-dark/30 flex flex-col justify-center items-center px-4 overflow-auto"
  >
    <div class="left__box md:hidden"></div>
    <div
      class="right__box flex flex-col justify-center items-start bg-white card dark:bg-tailwind-dark rounded-[32px] relative dark:border-[2px] dark:border-dark-cyan px-6 py-[26px]"
    >
      <h3
        class="right__title text-dark-cyan text-2xl font-bold leading-[130%] dark:text-white mb-4"
      >
        Готовы сотрудничать с нами?
      </h3>
      <ul class="right__main-list">
        <li class="right__lists list-disc text-[#2DB7CA] ml-6">
          <h5
            class="right__mini-titles text-base font-semibold leading-[150%] mb-2"
          >
            Подразделения, отделы, франчайзи
          </h5>
          <p
            class="right__mini-texts dark:text-white text-sm font-normal leading-[140%] w-max-[292px] mb-6"
          >
            Объедините несколько юрлиц, офисов или складов в одной системе.
            Ограничьте доступ к данным для разных подразделений
          </p>
        </li>
        <li class="right__lists list-disc text-[#2DB7CA] ml-6">
          <h5
            class="right__mini-titles text-base font-semibold leading-[150%] mb-2"
          >
            Разграничение доступа
          </h5>
          <p
            class="right__mini-texts dark:text-white text-sm font-normal leading-[140%] w-max-[292px] mb-6"
          >
            Разделите права пользователей на меню и функции, скройте ненужные
            данные. Полная запись действий сотрудников.
          </p>
        </li>
        <li class="right__lists list-disc text-[#2DB7CA] ml-6">
          <h5
            class="right__mini-titles text-base font-semibold leading-[150%] mb-2"
          >
            Аналитика
          </h5>
          <p
            class="right__mini-texts dark:text-white text-sm font-normal leading-[140%] w-max-[292px] mb-10"
          >
            Смотрите отчеты со смартфона или в почте: обороты, остатки, продажи
            и рентабельность по товарам и клиентам, движение денег.
          </p>
        </li>
      </ul>
      <form
        class="right__form-bottom w-full"
        @submit.prevent="sendInformation"
        action="https://echo.htmlacademy.ru"
        method="get"
      >
        <button
          type="right__form-button"
          @click="$emit('closeModal')"
          class="text-[#020105] font-bold top-[35px] right-[24px] absolute"
          data-modal-hide="staticModal"
        >
          <svg
            class="w-[17px] h-[17px] dark:text-white"
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
        <div class="right__main-inputs w-full">
          <input
            type="text"
            name="text"
            v-model.trim="username"
            id="username"
            autocomplete="off"
            class="right__form-text w-full bg-gray-50 border border-gray-300 rounded-[32px] text-sm text-[#8d8a8a] dark:text-white dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 py-4 pl-[18px] outline-none mb-2"
            placeholder="Имя"
            required
          />
          <div class="right__mini-inputs w-full">
            <span class="form__span"></span>
            <input
              type="tel"
              name="number"
              v-model.number="tel"
              id="tel"
              autocomplete="off"
              class="right__form-number w-full bg-gray-50 border border-gray-300 rounded-[32px] text-sm text-[#8d8a8a] dark:text-white dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 py-4 pl-[18px] outline-none mb-2"
              placeholder="Телефон номер"
              maxlength="13"
              required
            />
          </div>
          <input
            type="text"
            name="text"
            v-model.trim="message"
            id="message"
            autocomplete="off"
            class="right__form-message w-full bg-gray-50 border border-gray-300 rounded-[32px] text-[#8d8a8a] text-sm dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 pt-4 pl-4 pb-[200px] outline-none mb-2"
            placeholder="Сообщение"
          />
          <button
            type="submit"
            class="w-full right__button-submit flex flex-row justify-center items-center gap-4 bg-blue text-white px-[32px] py-[14px] rounded-[85px] active:opacity-60"
          >
            Отправить
            <i class="icon fa-solid fa-arrow-right-long fa-beat"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
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
.right {
  &__box {
  }
  &__title {
    font-family: "TT Interfaces";
  }
  &__main-list {
  }
  &__lists {
  }
  &__mini-titles {
  }
  &__mini-texts {
  }
  &__form-bottom {
  }
  &__main-inputs {
  }
  &__form-text {
  }
  &__mini-inputs {
  }
  &__form-number {
  }
  &__form-message {
  }
  &__button-submit {
  }
}
@media (max-width: 767px) {
  .right {
    &__box {
    }
    &__title {
      width: 100%;
      max-width: 260px;
      font-family: "TT Interfaces";
    }
    &__main-list {
    }
    &__lists {
    }
    &__mini-titles {
    }
    &__mini-texts {
    }
    &__form-bottom {
    }
    &__main-inputs {
    }
    &__form-text {
    }
    &__mini-inputs {
    }
    &__form-number {
    }
    &__form-message {
    }
    &__button-submit {
    }
  }
}
</style>
