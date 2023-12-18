<template>
  <div class="fixed top-0 left-0 right-0 w-full">
    <div class="left__box"></div>
    <div class="right__box">
      <h3 class="right__title">Готовы сотрудничать с нами?</h3>
      <ul class="right__main-list">
        <li class="right__lists">
          <h5 class="right__mini-titles">Подразделения, отделы, франчайзи</h5>
          <p class="right__mini-texts">
            Объедините несколько юрлиц, офисов или складов в одной системе.
            Ограничьте доступ к данным для разных подразделений
          </p>
        </li>
        <li class="right__lists">
          <h5 class="right__mini-titles">Разграничение доступа</h5>
          <p class="right__mini-texts">
            Разделите права пользователей на меню и функции, скройте ненужные
            данные. Полная запись действий сотрудников.
          </p>
        </li>
        <li class="right__lists">
          <h5 class="right__mini-titles">Аналитика</h5>
          <p class="right__mini-texts">
            Смотрите отчеты со смартфона или в почте: обороты, остатки, продажи
            и рентабельность по товарам и клиентам, движение денег.
          </p>
        </li>
      </ul>
      <form
        class="form__bottom"
        @submit.prevent="sendInformation"
        action="https://echo.htmlacademy.ru"
        method="get"
      >
        <div class="form__main-inputs">
          <input
            type="text"
            name="text"
            v-model.trim="username"
            id="username"
            autocomplete="off"
            class="form__number-text"
            placeholder="Имя"
            required
          />
          <div class="w-full">
            <span class="form__span"></span>
            <input
              type="tel"
              name="number"
              v-model.number="tel"
              id="tel"
              autocomplete="off"
              class="form__number-input"
              placeholder="Телефон номер"
              maxlength="13"
              required
            />
          </div>
          <button type="submit" class="form__button">
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

<style></style>
