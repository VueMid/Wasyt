<template>
  <div>
    <button @click="toogleDark()" class="w-10 block">
      <img
        v-if="isDark"
        src="@/assets/icons/sun.svg"
        alt="sun"
        width="64"
        height="64"
      />
      <img
        v-else
        src="@/assets/icons/moon.svg"
        alt="moon"
        width="64"
        height="64"
      />
    </button>
  </div>
</template>
<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toogleDark = useToggle(isDark);
</script>
<style></style>
