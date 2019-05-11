export default {
  changeCity (state, city) {
    state.city = city
    try {
      // 将用户选择的信息存储在localStorage中
      localStorage.city = city
    } catch (e) {}
  }
}
