<template>
  <header class="header fixed z-[999] w-full lg:static bg-white">
    <div
      class="container header__containe flex flex-row justify-between items-center py-[16px] md:flex md:flex-row md:justify-between md:items-center md:py-[14px] lg:flex lg:flex-row lg:justify-between lg:items-center lg:py-[25px]"
    >
      <HeaderNavbar />
      <HeaderButton
        @openMenu="openMenu"
        :isOpen="isOpen"
        @closeMenu="closeMenu"
      />
    </div>
  </header>
  <Transition name="navbar">
    <HeaderHiddenNavbar v-if="isOpen" @closeMenu="closeMenu" />
  </Transition>
</template>
<script>
import HeaderNavbar from "./components/HeaderNavbar.vue";
import HeaderButton from "./components/HeaderButton.vue";
import HeaderHiddenNavbar from "./components/HeaderHiddenNavbar.vue";
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.isOpen = true;
      document.body.style.overflow = "hidden";
    },
    closeMenu() {
      this.isOpen = false;
      document.body.style.overflow = "auto";
    },
  },
  components: { HeaderNavbar, HeaderButton, HeaderHiddenNavbar },
};
</script>
<style>
.navbar-enter-active,
.navbar-leave-active {
  transition: 0.4s ease;
}
.navbar-enter-from,
.navbar-leave-to {
  transform: translateY(-100%);
}
</style>
