<template>
  <div class="languageDiv hidden lg:block">
    <div
      style="display: flex; align-items: center; gap: 5px; cursor: pointer"
      @click="toggleLanguage"
    >
      <p style="color: #172d33; font-size: 18px">{{ selectedValue }}</p>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
    <Transition name="fade">
      <ul v-if="showLanguage" class="chooseLanguage">
        <router-link to="/ru">
          <li @click="selectLanguage('Ру')" value="Ру">
            <img
              alt=""
              src="@/assets/images/ru.png"
              style="width: 20px; height: 20px"
            />
            <p>Ру</p>
          </li>
        </router-link>
        <router-link to="/en">
          <li @click="selectLanguage('En')" value="En">
            <img
              alt=""
              src="@/assets/images/en.png"
              style="width: 20px; height: 20px"
            />
            <p>En</p>
          </li>
        </router-link>
        <router-link to="/uz">
          <li @click="selectLanguage('Uz')" value="Uz">
            <img
              alt=""
              src="@/assets/images/uz.png"
              style="width: 20px; height: 20px"
            />
            <p>Uz</p>
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
<style>
p {
  font-family: "TT Interfaces";
  font-weight: 500;
  color: #172d33;
  font-size: 16px;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  transform: translateY(-5%);
  opacity: 0;
}
.languageDiv {
  display: flex;
  flex-direction: column;
  position: relative;
}
.chooseLanguage {
  position: absolute;
  top: 50px;
  z-index: 99;
  background: #fff;
  border-radius: 10px;
  padding-bottom: 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.chooseLanguage li {
  width: 130px;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 15px;
  list-style: none;
  cursor: pointer;
  margin-top: 5px;
  font-family: "TT Interfaces";
}
.chooseLanguage li p {
  font-size: 18px;
}
@media screen and (max-width: 1200px) {
  .languageDiv {
    padding: 5px 15px;
    border: 1px solid #fff;
    border-radius: 20px;
  }
}
</style>
