<template>
  <div>
    {{employee.Fullname}}
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import { confirm } from 'devextreme/ui/dialog';
import notify from 'devextreme/ui/notify';

import DxButton from "devextreme-vue/button";


@Component({
  components: {
    DxButton
  },
})
export default class EmployeeCard extends Vue {
  @Prop()
  public employee!: any;
};
</script>

