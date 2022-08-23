<template>
  <h1>Вот тут должна быть информация о новостях лаборатории</h1>
</template>

<script lang="ts">
import DxButton from "devextreme-vue/button";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    DxButton,
  },
})
export default class About extends Vue {
  public sayHelloWorld(): void {
  }
}
</script>
