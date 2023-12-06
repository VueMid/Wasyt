<template>
  <div class="footerIcons__main-box flex flex-col justify-center items-start">
    <h6
      class="footer__title text-[#4B5E5E] font-normal leading-[130%] text-[12px] dark:text-white lg:text-[14px]"
    >
      Социальная сеть
    </h6>
    <div
      class="footer__icon flex flex-row justify-center items-center gap-[18px] lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[25px]"
    >
      <a href="#" class="footer__icons">
        <i
          class="fa-brands cursor-pointer fa-instagram text-dark-cyan dark:text-white text-[14px] md:text-[24px]"
        >
        </i>
      </a>
      <span
        class="w-[1px] h-[18px] mt-2 lg:w-[1px] lg:h-5 lg:mt-0 bg-[#A2BDBD] lg:bg-[#1A3636]"
      >
      </span>
      <a href="#" class="footer__icons">
        <i
          class="fa-brands cursor-pointer fa-youtube text-dark-cyan dark:text-white text-[14px] md:text-[24px]"
        >
        </i>
      </a>
      <span
        class="w-[1px] h-[18px] mt-2 lg:w-[1px] lg:h-5 lg:mt-0 bg-[#A2BDBD] lg:bg-[#1A3636]"
      >
      </span>
      <a href="#" class="footer__icons">
        <i
          class="fa-brands cursor-pointer fa-linkedin-in text-dark-cyan dark:text-white text-[14px] md:text-[24px]"
        >
        </i>
      </a>
      <span
        class="w-[1px] h-[18px] mt-2 lg:w-[1px] lg:h-5 lg:mt-0 bg-[#A2BDBD] lg:bg-[#1A3636]"
      >
      </span>
      <a href="#" class="footer__icons">
        <i
          class="fa-brands cursor-pointer fa-twitter text-dark-cyan dark:text-white text-[14px] md:text-[24px]"
        >
        </i>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footerIcons__main-box {
  margin-top: 0px;
}
.footer__icons {
  font-size: 24px;
  transition: 400ms ease all;
}
.footer__icons:hover {
  transition: 400ms ease all;
  transform: translateY(-4px);
}
.fa-instagram {
  transition: 400ms ease all;
}
.fa-instagram:hover {
  color: #01889a !important;
  transition: 400ms ease all;
}
.fa-youtube {
  transition: 400ms ease all;
}
.fa-youtube:hover {
  color: #01889a !important;
  transition: 400ms ease all;
}
.fa-linkedin-in {
  transition: 400ms ease all;
}
.fa-linkedin-in:hover {
  color: #01889a !important;
  transition: 400ms ease all;
}
.fa-twitter {
  transition: 400ms ease all;
}
.fa-twitter:hover {
  color: #01889a !important;
  transition: 400ms ease all;
}
</style>
