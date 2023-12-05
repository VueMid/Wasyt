<template>
  <section
    class="map mt-[80px] md:mt-[100px] lg:mt-[120px] dark:bg-tailwind-dark md:px-[10px] duration-[400ms]"
    v-motion-pop-visible-once
  >
    <div class="container map__container">
      <iframe
        class="map w-full h-[405px] md:w-full md:h-[608px] lg:w-full lg:h-[608px] rounded-[16px] md:rounded-[32px] lg:rounded-[40px]"
        src="https://yandex.com/map-widget/v1/?ll=69.301593%2C41.321279&mode=routes&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTQwNTM0EjdPyrt6YmVraXN0b24sIFRvc2hrZW50LCBNdXN0YXFpbGxpayBzaG9oIGtvyrtjaGFzaSwgNzlBIgoNR5qKQhX_SCVC&z=17.12"
      >
      </iframe>
    </div>
  </section>
</template>
<style scoped>
.map__container {
  width: 100% !important;
  filter: grayscale(30%) sepia(15%) hue-rotate(185deg) brightness(97%);
}
</style>
