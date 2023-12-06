<template>
  <footer class="footer mt-[40px]">
    <div class="container footer__container">
      <div class="footer__top flex flex-row justify-between items-center mb-4">
        <FooterLoaction class="FooterLoaction" />
        <FooterNumbers class="FooterNumbers mr-[60px]" />
      </div>
      <div class="footer__bottom flex flex-row justify-between items-center">
        <FooterEmail />
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
@media (max-width: 350px) {
  .footer__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
    transform: translateX(-90px) !important;
  }
  .footer__top {
    margin: 0 auto !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
  }
  .footer__bottom {
    margin: 0 auto !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
  }
  .FooterNumbers {
    margin: 0 auto !important;
  }
  .FooterLoaction {
    transform: translateX(40px) !important;
  }
  .FooterIcons {
    transform: translateX(30px) !important;
  }
}
</style>
