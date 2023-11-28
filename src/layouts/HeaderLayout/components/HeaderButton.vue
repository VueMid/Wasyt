<template>
  <div
    class="div lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-4"
  >
    <TheDarkMode class="hidden lg:block" />
    <select class="uppercase cursor-pointer hidden lg:block">
      <option v-for="item in selection" :key="item">
        {{ item.name }}
      </option>
    </select>
    <TheButton class="hidden lg:block">Свяжется с нами</TheButton>
    <button
      class="open-menu md:hidden"
      v-if="!isOpen"
      @click="$emit('openMenu')"
    >
      <img
        class="w-[40px] h-[40px]"
        src="@/assets/icons/open_burger.svg"
        alt="open__menu"
      />
    </button>
    <button class="close-menu lg:hidden" v-else @click="$emit('closeMenu')">
      <img
        class="w-[40px] h-[40px]"
        src="@/assets/icons/close_burger.svg"
        alt="close__menu"
      />
    </button>
  </div>
</template>
<script>
import TheDarkMode from "../../../MaterialUI/TheDarkMode.vue";
import TheButton from "../../../MaterialUI/TheButton.vue";
import languagesJs from "../../languages";
export default {
  data() {
    return {
      selection: languagesJs,
    };
  },
  components: { TheDarkMode, TheButton },
  props: {
    isOpen: {
      type: Boolean,
    },
  },
};
</script>

<style>
.uppercase {
  font-family: "HALVARBREIT-MD";
  letter-spacing: -1px;
  font-size: 18px;
}
</style>
