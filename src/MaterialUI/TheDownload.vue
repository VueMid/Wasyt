<template>
  <a
    href="#"
    download
    class="link flex flex-row justify-center items-center font-bold bg-white text-blue w-[234px] h-[52px] rounded-[85px] border-[1px] border-blue text-[16px] leading-[150%] md:text-[14px] md:w-[196px] md:h-[48px] lg:w-[223px] lg:h-[56px] lg:text-[16px]"
  >
    <img class="mr-4" src="@/assets/icons/download.svg" alt="download" />
    <slot />
  </a>
</template>
<style>
.link {
  font-family: "TT Interfaces" !important;
}
</style>
