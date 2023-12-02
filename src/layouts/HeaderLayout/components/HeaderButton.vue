<template>
  <div
    class="div lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-4"
  >
    <div class="z-30 absolute mr-[356px]">
      <Languages class="languages" />
    </div>
    <TheDarkMode class="TheDarkMode" />
    <TheButton class="TheButton">Свяжется с нами</TheButton>
    <div class="menu">
      <div class="flex flex-row justify-center items-center" v-if="!isOpen">
        <p class="uppercase text-[16px] font-medium">Меню</p>
        <button class="open-second-menu" @click="$emit('openMenu')">
          <img
            class="w-[40px] h-[40px]"
            src="@/assets/icons/open__second-menu.svg"
            alt="close__menu"
          />
        </button>
      </div>
      <button
        class="close-menu flex justify-center items-center"
        v-else
        @click="$emit('closeMenu')"
      >
        <img
          class="w-[40px] h-[40px]"
          src="@/assets/icons/close_burger.svg"
          alt="close__menu"
        />
      </button>
    </div>
    <div class="menus flex flex-row justify-center items-center">
      <button class="open-menu" v-if="!isOpen" @click="$emit('openMenu')">
        <img
          class="w-[40px] h-[40px]"
          src="@/assets/icons/open_burger.svg"
          alt="open__menu"
        />
      </button>
      <button class="close-menu" v-else @click="$emit('closeMenu')">
        <img
          class="w-[40px] h-[40px]"
          src="@/assets/icons/close_burger.svg"
          alt="close__menu"
        />
      </button>
    </div>
  </div>
</template>
<script>
import TheDarkMode from "../../../MaterialUI/TheDarkMode.vue";
import TheButton from "../../../MaterialUI/TheButton.vue";
import Languages from "../components/Languages.vue";
export default {
  data() {
    return {};
  },
  components: { TheDarkMode, TheButton, Languages },
  props: {
    isOpen: {
      type: Boolean,
    },
  },
};
</script>
<style scoped>
.uppercase {
  font-family: "TT Interfaces";
}
.menu {
  display: none;
}
.menus {
  display: none;
}
@media (max-width: 1250px) {
  .menu {
    display: block;
  }
  .languages {
    display: none;
  }
  .TheDarkMode {
    display: none;
  }
  .menu {
    display: none;
  }
}
@media (max-width: 1023px) {
  .menu {
    display: block;
  }
  .TheButton {
    display: none;
  }
}
@media (max-width: 767px) {
  .menu {
    display: none;
  }
  .menus {
    display: block;
  }
}
</style>
