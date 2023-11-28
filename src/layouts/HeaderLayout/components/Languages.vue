<template>
  <div class="languageDiv">
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
            <p>Русский</p>
          </li>
        </router-link>

        <router-link to="/en">
          <li @click="selectLanguage('En')" value="En">
            <img
              alt=""
              src="@/assets/images/en.png"
              style="width: 20px; height: 20px"
            />
            <p>English</p>
          </li>
        </router-link>

        <router-link to="/uz">
          <li @click="selectLanguage('Uz')" value="Uz">
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
const defaultLanguage = storedLanguage ? storedLanguage : "Ru";
const selectedValue = ref(defaultLanguage);
const handleChange = () => {
  localStorage.setItem("selectedLanguage", selectedValue.value);
};
const languages = [
  { value: "Ру", label: "Русский", img: "/src/assets/images/language1.png" },
  { value: "En", label: "English", img: "/src/assets/images/language2.png" },
  { value: "Uz", label: "O’zbek", img: "/src/assets/images/language3.png" },
];
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
  font-family: "HALVARBREIT-MD";
  letter-spacing: -2.2px;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
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
  font-family: "HALVARBREIT-MD";
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
