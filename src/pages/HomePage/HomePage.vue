<template>
  <div class="Home-page">
    <HeroSection />
    <HeroSectionSecond />
    <WasytSection />
    <ApplicationSection />
    <ApplicationSecondSection />
    <SettingsSection />
    <SettingsSecondSection />
    <SettingsThirdSection />
    <CarouselSection />
    <CarouselSecondSection />
  </div>
</template>
<script>
import HeroSection from "./HomeSections/HeroSection.vue";
import HeroSectionSecond from "./HomeSections/HeroSectionSecond.vue";
import WasytSection from "./HomeSections/WasytSection.vue";
import ApplicationSection from "./HomeSections/ApplicationSection.vue";
import ApplicationSecondSection from "./HomeSections/ApplicationSecondSection.vue";
import SettingsSection from "./HomeSections/SettingsSection.vue";
import SettingsSecondSection from "./HomeSections/SettingsSecondSection.vue";
import SettingsThirdSection from "./HomeSections/SettingsThirdSection.vue";
import CarouselSection from "./HomeSections/CarouselSection.vue";
import CarouselSecondSection from "./HomeSections/CarouselSecondSection.vue";
export default {
  components: {
    HeroSection,
    HeroSectionSecond,
    WasytSection,
    ApplicationSection,
    ApplicationSecondSection,
    SettingsSection,
    SettingsSecondSection,
    SettingsThirdSection,
    CarouselSection,
    CarouselSecondSection,
  },
};
</script>
