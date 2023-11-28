<template>
  <main class="overflow-x-hidden bg-white dark:bg-tailwind-dark">
    <HeaderLayout />
    <RouterView />
  </main>
</template>
<script>
import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout.vue";
export default {
  components: { HeaderLayout },
};
</script>
<style>
body {
}
</style>
