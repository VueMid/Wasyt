<template>
  <button
    type="button"
    @click="$emit('action')"
    class="link flex flex-row justify-center w-max-[612px] font-bold text-[14px] items-center px-[32px] py-[14px] md:px-[25px] md:py-[14px] lg:py-[16px] lg:px-[32px] md:w-[213px] bg-white text-blue rounded-[85px] md:text-[14px] lg:text-[16px] lg:w-[239px] lg:not-italic lg:font-semibold lg:leading-[150%] border-[1px] border-blue active:bg-blue active:text-white duration-200 lg:w-auto"
  >
    <i class="fa-solid fa-phone mr-4"></i>
    <slot />
  </button>
</template>
<style>
.link {
  font-family: "TT Interfaces" !important;
}
</style>
