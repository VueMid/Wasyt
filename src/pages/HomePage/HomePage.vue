<template>
  <HeaderLayout />
  <div class="Home-page">
    <HeroSection />
    <HeroSectionSecond />
    <WasytSection />
    <ApplicationSection />
    <SettingsSection />
    <SettingsSecondSection />
    <SettingsThirdSection />
    <!-- <CarouselSection /> -->
    <CarouselSecondSection />
    <FormSection />
    <PartnershipSection />
    <MapSection />
    <FooterLayout />
    <FooterBottomLayout />
  </div>
</template>
<script>
import HeaderLayout from "../../layouts/HeaderLayout/HeaderLayout.vue";
import HeroSection from "./HomeSections/HeroSection.vue";
import HeroSectionSecond from "./HomeSections/HeroSectionSecond.vue";
import WasytSection from "./HomeSections/WasytSection.vue";
import ApplicationSection from "./HomeSections/ApplicationSection.vue";
import SettingsSection from "./HomeSections/SettingsSection.vue";
import SettingsSecondSection from "./HomeSections/SettingsSecondSection.vue";
import SettingsThirdSection from "./HomeSections/SettingsThirdSection.vue";
import CarouselSection from "./HomeSections/CarouselSection.vue";
import CarouselSecondSection from "./HomeSections/CarouselSecondSection.vue";
import FormSection from "./HomeSections/FormSection.vue";
import PartnershipSection from "./HomeSections/PartnershipSection.vue";
import MapSection from "./HomeSections/MapSection.vue";
import FooterLayout from "../../layouts/FooterLayout/FooterLayout.vue";
import FooterBottomLayout from "../../layouts/FooterBottomLayout/FooterBottomLayout.vue";
export default {
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
    PartnershipSection,
    MapSection,
    FooterLayout,
    FooterBottomLayout,
  },
};
</script>
