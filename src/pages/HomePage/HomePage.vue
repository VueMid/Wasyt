<template>
  <div class="Home-page">
    <HeroSection />
    <HeroSectionSecond />
    <WasytSection />
    <ApplicationSection />
    <ApplicationSecondSection />
    <SettingsSection />
  </div>
</template>
<script>
import HeroSection from "./HomeSections/HeroSection.vue";
import HeroSectionSecond from "./HomeSections/HeroSectionSecond.vue";
import WasytSection from "./HomeSections/WasytSection.vue";
import ApplicationSection from "./HomeSections/ApplicationSection.vue";
import ApplicationSecondSection from "./HomeSections/ApplicationSecondSection.vue";
import SettingsSection from "./HomeSections/SettingsSection.vue";
export default {
  components: {
    HeroSection,
    HeroSectionSecond,
    WasytSection,
    ApplicationSection,
    ApplicationSecondSection,
    SettingsSection,
  },
};
</script>
<style></style>
