<template>
  <div
    class="header__main lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[40px]"
  >
    <div class="header__main-logo" @click="$router.push('/')">
      <img
        class="header__logo active:opacity-50 cursor-pointer duration-200"
        src="@/assets/icons/logo__image.svg"
        alt="logo__image"
      />
      <img
        class="header__second-logo active:opacity-50 cursor-pointer duration-200"
        src="@/assets/icons/logo__second-image.svg"
        alt="logo__image"
      />
    </div>
    <nav class="header__navbar">
      <ul
        class="lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-3"
      >
        <li
          class="header__lists lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[14px] bg-white text-dark-cyan active:bg-blue active:text-white lg:px-[10px] lg:py-[10px] border-[1px] border-[#F5F5F7] rounded-[85px] duration-200 cursor-pointer"
        >
          <img src="@/assets/icons/home.svg" alt="" />
          <a href="#">Главная</a>
        </li>
        <li
          class="header__lists lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[14px] bg-white text-dark-cyan active:bg-blue active:text-white lg:px-[10px] lg:py-[10px] border-[1px] border-[#F5F5F7] rounded-[85px] duration-200 cursor-pointer"
        >
          <img src="@/assets/icons/about.svg" alt="" />
          <a href="#wasyt">О Продукте</a>
        </li>
        <li
          class="header__lists lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[14px] bg-white text-dark-cyan active:bg-blue active:text-white lg:px-[10px] lg:py-[10px] border-[1px] border-[#F5F5F7] rounded-[85px] duration-200 cursor-pointer"
        >
          <img src="@/assets/icons/demo.svg" alt="" />
          <a href="#application">Демо</a>
        </li>
        <li
          class="header__lists lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[14px] bg-white text-dark-cyan active:bg-blue active:text-white lg:px-[10px] lg:py-[10px] border-[1px] border-[#F5F5F7] rounded-[85px] duration-200 cursor-pointer"
        >
          <img src="@/assets/icons/partnership.svg" alt="" />
          <a href="#partnership">Партнерство</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style>
.header__logo {
  vertical-align: middle;
}
.header__second-logo {
  display: none;
  vertical-align: middle;
}
.header__lists {
  font-family: "TFIRSNEUE-REGULAR";
  letter-spacing: -2px !important;
}
@media (max-width: 1250px) {
  .header__main {
    display: flex;
    gap: 20px;
  }
  .header__navbar {
    display: block;
  }
}
@media (max-width: 1023px) {
  .header__navbar {
    display: none;
  }
}
</style>
