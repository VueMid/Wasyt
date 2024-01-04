<template>
  <header
    class="header z-[1111] w-full bg-white"
    :class="isScrolled ? 'header-scrolled lg:pt-0' : 'lg:pt-0'"
  >
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
      isScrolled: false,
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
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    });
  },
  components: { HeaderNavbar, HeaderButton, HeaderHiddenNavbar },
};
</script>
<style>
.navbar-enter-active,
.navbar-leave-active {
  transition: 0.5s ease;
}
.navbar-enter-from,
.navbar-leave-to {
  transform: translateY(-100%);
}
.header {
  position: static;
}
@media (max-width: 1023px) {
  .header {
    position: fixed;
  }
  .header-scrolled {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(5px);
  }
}
</style>
