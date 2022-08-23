<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">{{ $t("pageNotFound") }}</h1>
    <h1 v-else>{{ $t("error") }}</h1>
    <br />
    <nuxt-link :to="localePath('index')">{{ $t("homePage") }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "blog", // you can set a custom layout for the error page
 
};
</script>
