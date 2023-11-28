<template>
  <a
    href="tel:+998939825001"
    @click="$emit('action')"
    class="link w-full flex flex-row justify-center items-center px-6 py-4 md:px-6 md:py-6 lg:py-[16px] lg:px-[32px] bg-blue text-white rounded-[85px] lg:text-[16px] lg:not-italic lg:font-semibold lg:leading-[150%] border-[1px] border-blue active:bg-white active:text-blue duration-200"
  >
    <i class="fa-solid fa-phone mr-4"></i>
    <slot />
  </a>
</template>
<style>
.link {
  font-family: "TFIRSNEUE-REGULAR" !important;
}
</style>
