import notify from "devextreme/ui/notify";

export default ({ $axios, app }) => {
  $axios.onRequest(config => {
    config.headers.common['Accept-Language'] = app.i18n.locale;
  });

  $axios.onError(error => {
    if (error.response) {
      var errorMsg = error.response.data.message;
      notify(errorMsg, "error", 2000);
    } else {
      notify(this.$t('UndefinedError'), "error", 2000);
    }
  });
}
