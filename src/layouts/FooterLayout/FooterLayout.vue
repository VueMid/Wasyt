<template>
  <footer class="footer mt-[40px] md:mt-[30px]">
    <div
      class="container footer__container flex flex-row justify-between items-start lg:flex lg:flex-row lg:justify-between lg:items-start"
    >
      <div
        class="footer__top flex flex-col justify-center items-start gap-4 md:flex md:flex-col md:justify-center md:items-start md:gap-[30px] lg:flex lg:flex-row lg:justify-center lg:items-start lg:gap-[100px]"
      >
        <FooterLoaction class="FooterLoaction" />
        <FooterEmail class="FooterEmail" />
      </div>
      <div
        class="footer__bottom flex flex-col justify-center items-start gap-[34px] md:flex md:flex-col md:justify-center md:items-start md:gap-[62px] lg:flex lg:flex-row lg:justify-center lg:items-start lg:gap-[100px]"
      >
        <FooterNumbers class="FooterNumbers" />
        <FooterIcons class="FooterIcons" />
      </div>
    </div>
  </footer>
</template>
<script>
import FooterEmail from "./components/FooterEmail.vue";
import FooterLoaction from "./components/FooterLoaction.vue";
import FooterNumbers from "./components/FooterNumbers.vue";
import FooterIcons from "./components/FooterIcons.vue";
export default {
  components: { FooterEmail, FooterLoaction, FooterNumbers, FooterIcons },
};
</script>
<style>
@media (max-width: 1260px) {
  .footer__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .footer__top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .footer__bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
