<template>
  <button
    @click="$emit('action')"
    class="button px-6 py-4 font-medium leading-[150%] border-[1px] text-[16px] border-blue lg:py-[16px] lg:px-[32px] bg-blue text-white rounded-[85px] lg:not-italic active:bg-white active:text-blue duration-200"
  >
    <i class="fa-solid fa-phone mr-4"></i>
    <slot />
  </button>
</template>
<style>
.button {
  font-family: "TT Interfaces";
}
</style>
