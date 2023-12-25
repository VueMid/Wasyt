<template>
  <button
    type="button"
    class="link flex flex-row font-bold justify-center items-center px-[32px] py-[14px] md:px-[30px] md:py-[14px] lg:py-[16px] lg:px-[32px] bg-blue text-white rounded-[85px] lg:text-[16px] lg:not-italic lg:leading-[150%] border-[1px] border-blue active:bg-white active:text-blue duration-200"
  >
    <i class="fa-solid fa-phone mr-4"></i>
    <slot />
  </button>
</template>
<style>
.button {
  font-family: "TT Interfaces" !important;
}
</style>
