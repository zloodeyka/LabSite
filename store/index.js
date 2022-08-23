export const state = () => ({
  loadingVisible: null
})

export const mutations = {
  showLoading(state) {
    state.loadingVisible = true
  },
  hideLoading(state) {
    state.loadingVisible = false
  }
}
