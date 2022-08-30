<template>
  <div class="employee-card">
    <div class="employee-presentation">
      <div class="employee-avatar">
        <img class="no-avatar"></img>
      </div>
      <div class="employee-info">
        <ul>
          <li class="employee-fullname">{{employee.Fullname}}</li>
          <li class="employee-position">{{employee.Position}}</li>
          <li class="employee-title">{{employee.Title}}</li>
          <li class="employee-degree">{{employee.Degree}}</li>
        </ul>
      </div>
    </div>
    <div class="employee-about">
      <p>{{employee.About}}</p>
    </div>


  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import {
  DxForm,
  DxSimpleItem,
  DxGroupItem,
  DxLabel,
} from 'devextreme-vue/form';

import { DxTextArea } from 'devextreme-vue/text-area';

@Component({
  components: {
    DxForm,
    DxTextArea,
    DxGroupItem,
    DxSimpleItem,
    DxLabel,
  },
})
export default class EmployeeCard extends Vue {
  @Prop()
  public employee!: any;
};
</script>

