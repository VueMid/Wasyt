<template>
  <div class="flex flex-row justify-between items-center w-full md:hidden">
    <div
      class="w-full px-6 py-4 border-[1px] rounded-[88px] flex flex-row justify-start items-center duration-150 bg-white text-dark-cyan md:px-6 md:py-6 active:bg-[#2DB7CA] active:text-white dark:bg-tailwind-dark dark:text-white dark:active:bg-white dark:active:text-dark-cyan font-semibold"
      @click="toggleLanguage"
    >
      <i class="fa-solid fa-globe fa-2xl" style="color: #038579"></i>
      <p
        class="ml-4 w-full text-dark-cyan dark:text-white active:text-white active:dark:text-dark-cyan text-base font-medium leading-[150%]"
      >
        {{ selectedValue }}
      </p>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
    <Transition name="fade">
      <ul v-if="showLanguage" class="chooseLanguage mt-[555px]">
        <router-link to="/ru">
          <li @click="selectLanguage('Русский')" value="Русский">
            <img
              alt=""
              src="@/assets/images/ru.png"
              style="width: 20px; height: 20px"
            />
            <p>Русский</p>
          </li>
        </router-link>
        <router-link to="/en">
          <li @click="selectLanguage('English')" value="English">
            <img
              alt=""
              src="@/assets/images/en.png"
              style="width: 20px; height: 20px"
            />
            <p>English</p>
          </li>
        </router-link>
        <router-link to="/uz">
          <li @click="selectLanguage(`O'zbek`)" value="O'zbek">
            <img
              alt=""
              src="@/assets/images/uz.png"
              style="width: 20px; height: 20px"
            />
            <p>O’zbek</p>
          </li>
        </router-link>
      </ul>
    </Transition>
  </div>
</template>
<script setup>
import { ref } from "vue";
const storedLanguage = localStorage.getItem("selectedLanguage");
const defaultLanguage = storedLanguage ? storedLanguage : "Ру";
const selectedValue = ref(defaultLanguage);
const handleChange = () => {
  localStorage.setItem("selectedLanguage", selectedValue.value);
};
const showLanguage = ref(false);
const toggleLanguage = () => {
  showLanguage.value = !showLanguage.value;
};
const selectLanguage = (language) => {
  selectedValue.value = language;
  handleChange();
  toggleLanguage();
};
</script>
<style></style>
