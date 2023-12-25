<template>
  <div class="lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-4">
    <div class="z-30 absolute mr-[356px]">
      <Languages class="languages" />
    </div>
    <TheDarkMode class="TheDarkMode" />
    <TheButton @click="openModal" class="TheButton">Contact us</TheButton>
    <div class="menu">
      <div class="flex flex-row justify-center items-center" v-if="!isOpen">
        <p class="uppercase text-[16px] font-medium">Menu</p>
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
  <Teleport to="body">
    <Transition name="modal" class="relative z-[1111]">
      <div v-if="isModalOpened">
        <HeaderComponent teleport="body" @closeModal="closeModal" />
      </div>
    </Transition>
  </Teleport>
</template>
<script>
import TheDarkMode from "../../../MaterialUI/TheDarkMode.vue";
import TheButton from "../../../MaterialUI/TheButton.vue";
import Languages from "../components/Languages.vue";
import HeaderComponent from "./HeaderComponent.vue";
export default {
  data() {
    return { isModalOpened: false };
  },
  methods: {
    openModal() {
      this.isModalOpened = true;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.isModalOpened = false;
      document.body.style.overflow = "auto";
    },
  },
  components: { TheDarkMode, TheButton, Languages, HeaderComponent },
  props: {
    isOpen: {
      type: Boolean,
    },
  },
};
</script>
<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.uppercase {
  font-family: "TT Interfaces";
}
.menu {
  display: none;
}
.menus {
  display: none;
}
.languages {
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
