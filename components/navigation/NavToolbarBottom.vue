<template>
  <div class="side-nav-toolbar--bottom">
    <dx-drawer class="layout-body"
               position="before"
               template="menuTemplate"
               :opened="menuOpened"
               :opened-state-mode="drawerOptions.menuMode"
               :reveal-mode="drawerOptions.menuRevealMode"
               :min-size="drawerOptions.minMenuSize"
               :max-size="drawerOptions.maxMenuSize"
               :shading="drawerOptions.shaderEnabled"
               :close-on-outside-click="drawerOptions.closeOnOutsideClick">
      <dx-scroll-view ref="scrollViewRef" class="with-footer">
        <slot />
        <slot name="footer" />
      </dx-scroll-view>
      <template #menuTemplate>
        <SideNav :compact-mode="!menuOpened"
                 @click="handleSideBarClick" />
      </template>
    </dx-drawer>


    <Header class="layout-header"
            :menu-toggle-enabled="true"
            :toggle-menu-func="toggleMenu"/>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue, Watch  } from 'vue-property-decorator';
  import { DrawerOptions } from '@/models/navigation/DrawerOptions'
  import DxDrawer from "devextreme-vue/drawer";
  import DxScrollView from "devextreme-vue/scroll-view";
  import Header from '@/components/navigation/Header.vue';
  import SideNav from "@/components/navigation/SideNav.vue";
  import { ref, watch } from '@nuxtjs/composition-api';

  @Component({
    components: {
      DxDrawer, DxScrollView,
      Header, SideNav
    }
  })

  export default class NavToolbarBottom extends Vue {

    public drawerOptions: DrawerOptions = new DrawerOptions(this);
    private scrollViewRef = ref(null);
    private menuOpened: Boolean = false;

    private menuTemporaryOpened = ref(false);

    public toggleMenu(e: any): void {
        const pointerEvent = e.event;
        pointerEvent.stopPropagation();
        if (this.menuOpened) {
          this.menuTemporaryOpened.value = false;
        }
      this.menuOpened = !this.menuOpened;
    }

    public handleSideBarClick() : void {
        if (this.menuOpened === false) {
          this.menuTemporaryOpened.value = true;
        }
        this.menuOpened = true;
    }

    mounted() {
      //this.menuOpened = this.isLarge;
    }
  }
</script>
<style lang="scss">


</style>
