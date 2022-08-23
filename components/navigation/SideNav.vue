<template>
  <div class="side-nav">
    <slot />
    <div v-if="$auth.loggedIn">
      <DxTreeView
        ref="treeViewRef"
        :items="menuItems"
        selection-mode="single"
        :focus-state-enabled="false"
        width="100%"
        @item-click="onMenuItemClick"
      >
        <template #item="item">
          <div>
            {{$t(item.data.Text)}}
          </div>
        </template>
      </DxTreeView>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import DxTreeView from "devextreme-vue/tree-view";

import { MenuItem } from "@/models/navigation/MenuItems";

import { ref } from "@nuxtjs/composition-api";

@Component({
  components: { DxTreeView },
})
export default class SideNav extends Vue {
  @Prop()
  public compactMode!: Boolean;

  @Prop()
  public toggleMenuFunc!: Function;

  public treeViewRef = ref(null);
  public menuItems: MenuItem[] = [
    new MenuItem("EduPrograms", "/", true),
    new MenuItem("profile","Profile", true),
    new MenuItem("MyPrograms", "MyPrograms", true),
    new MenuItem("contacts", "Contacts", true),
  ];

  public onMenuItemClick(e: any): void{
    var selectedItem = this.menuItems[e.itemIndex];
    this.$router.push(this.localePath(selectedItem.Path))
    this.toggleMenuFunc();
  }
}
</script>
