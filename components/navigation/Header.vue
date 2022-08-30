<template>
  <div class="header-component">
    <DxToolbar class="header-component__header-toolbar">

      <DxItem location="before"
              locate-in-menu="never">
        <template #default>
          <div class="header-component__name">
            <div class="name">
              <NuxtLink :to="localePath('/')"><h1>{{$t('WebsiteTitle')}}</h1></NuxtLink></div>
            <div class="name-lk" v-if="$auth.loggedIn"><NuxtLink :to="localePath('/')"><h2>{{$t('FurtherEduOffice')}}</h2></NuxtLink></div>
          </div>
        </template>
      </DxItem>

      <DxItem location="after"
              locate-in-menu="never">
        <template #default>
          <DxTreeView
            ref="treeViewRef"
            :items="menuItems"
            selection-mode="single"
            :focus-state-enabled="false"
            width="100%"
          >
            <template #item="item">
              <div>

                <DxButton :class="item.data.ClassName"
                          height="100%"
                          styling-mode="text"
                          @click="redirect(item.data.Path)"
                :text="$t(item.data.Text)"/>
                  <DxContextMenu
                                 :target="item.data.ClassNameTarget"
                                 :items="item.data.Items"
                                 show-event="dxhoverstart"
                                 :hover-state-enabled="true"
                                 :data-source="item.data.Items"
                                 accessKey="text"
                                 @item-click="itemClick">
                    <dx-position my="top center" at="bottom center" />
                  </DxContextMenu>
              </div>

            </template>
          </DxTreeView>
        </template>
      </DxItem>

      <DxItem location="after"
              locate-in-menu="never">
        <template #default>
          <div class="header-component__lang">
            <LangSwitch />
          </div>
        </template>
      </DxItem>

    </DxToolbar>
  </div>
</template>

<script lang="ts">
import LangSwitch from "@/components/LangSwitch.vue";
import { Component, Vue, Prop } from "vue-property-decorator";
import DxToolbar, { DxItem } from 'devextreme-vue/toolbar';
import DxButton from "devextreme-vue/button";
import DxTreeView from "devextreme-vue/tree-view";
import DxContextMenu, { DxPosition } from "devextreme-vue/context-menu";
import {MenuItem} from "~/models/navigation/MenuItems";
import {ContextMenuItem} from "~/models/navigation/ContextMenuItem";
import {ref} from "@nuxtjs/composition-api";

@Component({
  components: {
    DxToolbar,
    DxItem,
    DxButton,
    DxTreeView,
    LangSwitch,
    DxContextMenu, DxPosition,
  },
})
export default class Header extends Vue {

  public menuItems: MenuItem[] = [
    new MenuItem("Science", "Science", true, [
      new ContextMenuItem(this.$t("ResearchDirections").toString(), "ResearchDirections"),
      new ContextMenuItem(this.$t("Publications").toString(), "Publications"),
      new ContextMenuItem(this.$t("Workshops").toString(), "Workshops")
      ]),
    new MenuItem("Education","Education", true),
    new MenuItem("News","News", true),
    new MenuItem("About","About", true, [
      new ContextMenuItem(this.$t("Employees").toString(), "Employees")
    ])
  ];

  @Prop()
  public compactMode!: Boolean;

  @Prop()
  public toggleMenuFunc!: Function;

  public treeViewRef = ref(null);

  public redirect(pageName: any): void{
    this.$router.push(this.localePath(pageName))
  }

  public itemClick(e: any): void {
    this.$router.push(this.localePath(e.itemData.value))
  }
}
</script>

