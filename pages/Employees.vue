<template>
  <div class="employees-row">
    <div v-for="item in employees">
      <EmployeeCard :employee="item"></EmployeeCard>
    </div>
  </div>
</template>

<script lang="ts">
import DxButton from "devextreme-vue/button";
import { Component, Vue } from "vue-property-decorator";
import {EmployeesService} from '~/data/employees.js';
import EmployeeCard from '@/components/EmployeeCard.vue';

@Component({
  components: {
    DxButton,
    EmployeeCard
  },
})

export default class Employees extends Vue {
  private employees : any = EmployeesService.getEmployees();


}
</script>
