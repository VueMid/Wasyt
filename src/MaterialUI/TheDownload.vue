<template>
  <a
    href="#"
    download
    class="link flex flex-row justify-center items-center bg-white text-blue w-[230px] h-[52px] rounded-[85px] border-[1px] border-blue text-[16px] leading-[150%] font-semibold md:text-[14px] md:w-[190px] md:h-[48px] lg:w-[222px] lg:h-[56px] lg:text-[16px]"
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
