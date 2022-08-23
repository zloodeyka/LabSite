<template>
    <div>
    </div>
</template>

<script lang="ts">
  import DxButton from "devextreme-vue/button";
  import { Component, Vue } from "vue-property-decorator";
  @Component({
    components: {
      DxButton,
    },
    head() {
      return {
        bodyAttrs: {
          class: "contacts"
        }
      }
    }
  })
  export default class Contacts extends Vue {
  }
</script>

<style>
  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
