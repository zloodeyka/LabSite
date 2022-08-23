<template>
  <div class="side-nav-toolbar--top">
    <Header class="layout-header"
                    :menu-toggle-enabled="true"
                    :toggle-menu-func="toggleMenu"
                    />
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
                 :toggleMenuFunc="handleSideBarClick" />
      </template>
    </dx-drawer>
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

  export default class NavToolbarTop extends Vue {

    public drawerOptions: DrawerOptions = new DrawerOptions(this);
    private menuOpened: Boolean = false;


    public toggleMenu(e: any): void {
        const pointerEvent = e.event;
        pointerEvent.stopPropagation();
        this.menuOpened = !this.menuOpened;
    }

    public handleSideBarClick(): void {
      this.menuOpened = this.isLarge();
    }

    mounted() {
      this.menuOpened = this.isLarge();
    }

    isLarge(): boolean {
      return window.innerWidth > 900;
    }
  }
</script>
