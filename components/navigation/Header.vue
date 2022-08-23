<template>
  <div class="header-component">
    <DxToolbar class="header-component__header-toolbar">

      <DxItem location="before"
              locate-in-menu="never">
        <template #default>
          <div class="header-component__logo">
            <ul>
              <li class="small ru"><a v-if="$i18n.locale == 'RU'" href="https://www.susu.ru/" target="_blank"><img src="@/assets/pic/logo-susu.png"></a></li>
              <li class="large ru"><a v-if="$i18n.locale == 'RU'" href="https://www.susu.ru/" target="_blank"><img src="@/assets/pic/logo-susu-large.png"></a></li>
              <li class="small en"><a v-if="$i18n.locale == 'EN'" href="https://www.susu.ru/" target="_blank"><img src="@/assets/pic/logo-susu-en.png"></a></li>
              <li class="large en"><a v-if="$i18n.locale == 'EN'" href="https://www.susu.ru/" target="_blank"><img src="@/assets/pic/logo-susu-large-en.png"></a></li>
            </ul>
          </div>
        </template>
      </DxItem>


      <DxItem location="center"
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
                :text="$t(item.data.Text)"/>
                  <DxContextMenu
                                 :target="item.data.ClassNameTarget"
                                 :items="item.data.Items"
                                 show-event="dxclick"
                                 :data-source="item.data.Items"
                                 accessKey="text">
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
    new MenuItem("About","About", true),
    new MenuItem("News","News", true)
  ];

  @Prop()
  public compactMode!: Boolean;

  @Prop()
  public toggleMenuFunc!: Function;

  public treeViewRef = ref(null);

  public onMenuItemClick(e: any): void{
    var selectedItem = this.menuItems[e.itemIndex];
    this.$router.push(this.localePath(selectedItem.Path))
    this.toggleMenuFunc();
  }
}
</script>

