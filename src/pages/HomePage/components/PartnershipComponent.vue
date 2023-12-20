<template>
  <div
    class="partnership fixed w-full h-full top-0 backdrop-blur-sm bg-white/30 dark:backdrop-blur-sm dark:bg-tailwind-dark/30 px-4 overflow-y-auto overflow-x-hidden flex flex-col justify-center items-center"
  >
    <div
      class="partnership__wrapper flex flex-col justify-center items-center gap-0 mt-[315px] relative"
    >
      <div class="partnership__left-box hidden md:block">
        <img
          class="partnership__left-image"
          src="@/assets/images/boy__second.png"
          alt="guy"
        />
      </div>
      <div
        class="partnership__right-box flex flex-col justify-center items-start bg-white dark:bg-tailwind-dark dark:border-[2px] dark:border-dark-cyan px-6 py-[26px] rounded-[32px]"
      >
        <h3
          class="partnership__right-title text-2xl font-bold leading-[130%] dark:text-white mb-4"
        >
          Готовы сотрудничать с нами?
        </h3>
        <ul class="partnership__right-main-list">
          <li class="partnership__right-lists list-disc text-[#2DB7CA] ml-6">
            <h5
              class="partnership__right-mini-titles w-max-[292px] text-base font-semibold leading-[150%] mb-2"
            >
              Подразделения, отделы, франчайзи
            </h5>
            <p
              class="partnership__right-mini-texts w-max-[292px] text-dark-cyan text-sm font-normal leading-[140%] dark:text-white mb-6"
            >
              Объедините несколько юрлиц, офисов или складов в одной системе.
              Ограничьте доступ к данным для разных подразделений
            </p>
          </li>
          <li class="partnership__right-lists list-disc text-[#2DB7CA] ml-6">
            <h5
              class="partnership__right-mini-titles w-max-[292px] text-base font-semibold leading-[150%] mb-2"
            >
              Разграничение доступа
            </h5>
            <p
              class="partnership__right-mini-texts w-max-[292px] text-dark-cyan text-sm font-normal leading-[140%] dark:text-white mb-6"
            >
              Разделите права пользователей на меню и функции, скройте ненужные
              данные. Полная запись действий сотрудников.
            </p>
          </li>
          <li class="partnership__right-lists list-disc text-[#2DB7CA] ml-6">
            <h5
              class="partnership__right-mini-titles w-max-[292px] text-base font-semibold leading-[150%] mb-2"
            >
              Аналитика
            </h5>
            <p
              class="partnership__right-mini-texts w-max-[292px] text-dark-cyan text-sm font-normal leading-[140%] dark:text-white mb-10"
            >
              Смотрите отчеты со смартфона или в почте: обороты, остатки,
              продажи и рентабельность по товарам и клиентам, движение денег.
            </p>
          </li>
        </ul>
        <form
          class="partnership__right-form w-full flex flex-col justify-center items-center gap-2"
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
              class="partnership__right-svg absolute w-5 h-5 top-9 right-6"
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
            class="partnership__right-main-input w-full flex flex-col justify-center items-center gap-2"
          >
            <input
              type="text"
              name="text"
              v-model.trim="username"
              id="username"
              autocomplete="off"
              class="partnership__right-username-input w-full outline-none bg-[#F9F9FB] text-dark-cyan text-sm font-normal leading-[140%] rounded-[57px] border-[1px] border-[#EBF0F0] py-4 pl-[18px] dark:bg-tailwind-dark dark:border-gray-500 dark:text-white"
              placeholder="Имя"
              required
            />
            <div class="w-full">
              <span class=""></span>
              <input
                type="tel"
                name="number"
                v-model.number="tel"
                id="tel"
                autocomplete="off"
                class="partnership__right-tel-input w-full outline-none bg-[#F9F9FB] text-dark-cyan text-sm font-normal leading-[140%] rounded-[57px] border-[1px] border-[#EBF0F0] py-4 pl-[18px] dark:bg-tailwind-dark dark:border-gray-500 dark:text-white"
                placeholder="Телефон номер"
                maxlength="13"
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
            class="partnership__right-message-input w-full outline-none bg-[#F9F9FB] text-dark-cyan text-sm font-normal leading-[140%] rounded-[32px] border-[1px] border-[#EBF0F0] pt-4 pb-[201px] pl-[18px] dark:bg-tailwind-dark dark:border-gray-500 dark:text-white"
            placeholder="Сообщение"
          />
          <button
            type="submit"
            class="partnership__submit-button flex flex-row justify-center items-center gap-4 text-white w-full bg-[#2DB7CA] rounded-[85px] outline-none py-[14px] active:opacity-60 duration-100"
          >
            Отправить
            <i class="icon fa-solid fa-arrow-right-long fa-beat"></i>
          </button>
        </form>
      </div>
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
@media (max-width: 767px) {
  .partnership {
    &__wrapper {
    }
    &__left-box {
    }
    &__left-image {
    }
    &__right-box {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    &__right-title {
      width: 312px;
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
