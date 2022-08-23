<template>
      <DxDropDownButton
        :items="locales"
        key-expr="code"
        display-expr="code"
        @item-click="changeLang"
        :drop-down-options="dropDownOptions"
        :use-select-mode="true"
        :selected-item-key="activeLang"
        :styling-mode="dropDownOptions.stylingMode"
      />
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import DxDropDownButton from "devextreme-vue/drop-down-button";
import ruMessages from "devextreme/localization/messages/ru.json";
import enMessages from "devextreme/localization/messages/en.json";
import {
  locale,
  loadMessages,
  formatMessage,
  formatDate,
} from "devextreme/localization";

@Component({
    components: {
     DxDropDownButton
  },
  head(){
    return {
      title: this.$t('WebsiteTitle').toString()
    }
  }
})

export default class LangSwitch extends Vue {
  private activeLang = "";

  private locales = this.$i18n.locales;
  private title = this.$t('WebsiteTitle')
  private dropDownOptions = {
    stylingMode: "text",
  };

  mounted() {
    this.activeLang = this.$i18n.locale;
    loadMessages(ruMessages);
    loadMessages(enMessages);
    locale(this.activeLang);

  }

  private changeLang(e:any) {
    this.$i18n.setLocale(e.itemData.code);
    locale(e.itemData.code);
  }
};
</script>

