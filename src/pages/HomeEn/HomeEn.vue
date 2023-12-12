<template>
  <HeaderLayoutEn />
  <div class="Home-en">
    <HeroSection />
    <HeroSectionSecond />
    <WasytSection />
    <ApplicationSection />
    <SettingsSection />
    <SettingsSecondSection />
    <SettingsThirdSection />
    <CarouselSecondSection />
    <CarouselSection />
    <FormSection />
    <MapSection />
    <FooterLayout />
    <FooterBottomLayout />
  </div>
</template>
<script>
import HeaderLayoutEn from "../../layouts/HeaderLayoutEn/HeaderLayoutEn.vue";
import HeroSection from "../HomeEn/HomeSections/HeroSection.vue";
import HeroSectionSecond from "../HomeEn/HomeSections/HeroSectionSecond.vue";
import WasytSection from "../HomeEn/HomeSections/WasytSection.vue";
import ApplicationSection from "../HomeEn/HomeSections/ApplicationSection.vue";
import SettingsSection from "../HomeEn/HomeSections/SettingsSection.vue";
import SettingsSecondSection from "../HomeEn/HomeSections/SettingsSecondSection.vue";
import SettingsThirdSection from "../HomeEn/HomeSections/SettingsThirdSection.vue";
import CarouselSecondSection from "../HomeEn/HomeSections/CarouselSecondSection.vue";
import CarouselSection from "../HomeEn/HomeSections/CarouselSection.vue";
import FormSection from "../HomeEn/HomeSections/FormSection.vue";
import MapSection from "../HomeEn/HomeSections/MapSection.vue";
import FooterLayout from "../../layouts/FooterLayoutEn/FooterLayout.vue";
import FooterBottomLayout from "../../layouts/FooterBottomLayoutEn/FooterBottomLayout.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    HeaderLayoutEn,
    HeroSection,
    HeroSectionSecond,
    WasytSection,
    ApplicationSection,
    SettingsSection,
    SettingsSecondSection,
    SettingsThirdSection,
    CarouselSecondSection,
    CarouselSection,
    FormSection,
    MapSection,
    FooterLayout,
    FooterBottomLayout,
  },
};
</script>
