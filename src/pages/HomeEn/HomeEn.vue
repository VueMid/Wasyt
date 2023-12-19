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
    <CarouselSection />
    <CarouselSecondSection />
    <FormSection />
    <PartnershipSection />
    <MapSection />
    <FooterLayout />
    <FooterBottomLayout />
  </div>
</template>
<script>
import HeaderLayoutEn from "../../layouts/HeaderLayoutEn/HeaderLayoutEn.vue";
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
    CarouselSection,
    CarouselSecondSection,
    FormSection,
    PartnershipSection,
    MapSection,
    FooterLayout,
    FooterBottomLayout,
  },
  mounted() {
    document.title = `WASYT ERP | Digitalization of Warehouse for Small and Medium Businesses`;
  },
};
</script>
