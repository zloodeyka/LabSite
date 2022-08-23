<template>
  <div id="root">
    <div>
      <DxToolbar id="toolbar">
        <DxItem widget="dxButton"
                :options="buttonOptions"
                location="before" />
      </DxToolbar>

      <DxDrawer :minSize="250"
                :height="250"
                template="list">
        <template #list>
          <div style="width: 500px" id="smth">Drawer content</div>
        </template>
        <div id="view">
          <div>View content</div>
        </div>
      </DxDrawer>
    </div>
  </div>
</template>

<script>
    import DxDrawer from 'devextreme-vue/drawer';

    export default {
        components: {
            DxDrawer
        }
    };
</script>

<style>

  #view {
    margin-left: 10px;
    margin-top: 10px;
  }
</style>
