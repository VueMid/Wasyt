<template>
  <div class="Home-page">
    <HeroSection />
    <HeroSectionSecond />
    <WasytSection />
  </div>
</template>
<script>
import HeroSection from "./HomeSections/HeroSection.vue";
import HeroSectionSecond from "./HomeSections/HeroSectionSecond.vue";
import WasytSection from "./HomeSections/WasytSection.vue";
export default {
  components: { HeroSection, HeroSectionSecond, WasytSection },
};
</script>
<style></style>
