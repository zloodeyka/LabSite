<template>
  <div id="root" class="dx-viewport">
    <div class="content">
      <div class="container">
        <NavToolbarTop></NavToolbarTop>

        <Nuxt />
        <DxLoadPanel :position="position"
                     :visible="$store.state.loadingVisible"
                     :show-indicator="true"
                     :show-pane="false"
                     :shading="true"
                     :close-on-outside-click="false"
                     shading-color="rgba(0,0,0,0.4)" />
      </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import NavToolbarTop from "@/components/navigation/NavToolbarTop.vue";
import NavToolbarBottom from "@/components/navigation/NavToolbarBottom.vue";

import Footer from "@/components/navigation/Footer.vue";

import { DxLoadPanel } from 'devextreme-vue/load-panel';

@Component({
  components: {
    NavToolbarBottom, NavToolbarTop,
    Footer,
    DxLoadPanel
  }
})

export default class Default extends Vue {
  public position: any = { of: '.container' };
  public loadingVisible: boolean = true;

  mounted(): void {
    var wind = this;

    window.addEventListener('storage', function (event) {
      if (event.key == 'auth._token.local') {
        if (event.newValue == "false") {
          wind.$auth.logout();
          wind.$router.push('/Login');
        } else {
          window.location.reload(true);
          wind.$router.push('/');
        }
      }

    });
  }
}
</script>

