<template>
  <HeaderLayout />
  <div class="Home-uz">
    <HeroSection />
    <HeroSectionSecond />
    <WasytSection />
    <ApplicationSection />
    <SettingsSection />
    <SettingsSecondSection />
    <SettingsThirdSection />
    <CarouselSection />
    <CarouselSecondSection />
    <FormSection />
    <MapSection />
    <FooterLayout />
    <FooterBottomLayout />
  </div>
</template>
<script>
import HeaderLayout from "../../layouts/HeaderLayoutUz/HeaderLayout.vue";
import HeroSection from "../HomeUz/HomeSections/HeroSection.vue";
import HeroSectionSecond from "../HomeUz/HomeSections/HeroSectionSecond.vue";
import WasytSection from "../HomeUz/HomeSections/WasytSection.vue";
import ApplicationSection from "../HomeUz/HomeSections/ApplicationSection.vue";
import SettingsSection from "../HomeUz/HomeSections/SettingsSection.vue";
import SettingsSecondSection from "../HomeUz/HomeSections/SettingsSecondSection.vue";
import SettingsThirdSection from "../HomeUz/HomeSections/SettingsThirdSection.vue";
import CarouselSection from "../HomeUz/HomeSections/CarouselSection.vue";
import CarouselSecondSection from "../HomeUz/HomeSections/CarouselSecondSection.vue";
import FormSection from "../HomeUz/HomeSections/FormSection.vue";
import MapSection from "../HomeUz/HomeSections/MapSection.vue";
import FooterLayout from "../../layouts/FooterLayoutUz/FooterLayout.vue";
import FooterBottomLayout from "../../layouts/FooterBottomLayoutUz/FooterBottomLayout.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    HeaderLayout,
    HeroSection,
    HeroSectionSecond,
    WasytSection,
    ApplicationSection,
    SettingsSection,
    SettingsSecondSection,
    SettingsThirdSection,
    CarouselSection,
    CarouselSecondSection,
    FormSection,
    MapSection,
    FooterLayout,
    FooterBottomLayout,
  },
};
</script>
