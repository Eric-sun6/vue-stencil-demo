<template>
  <div id="app">
    <img src="./assets/logo.png">       
    <input type="text" :value="name"/>
    <jimo-badge></jimo-badge>
    <router-view/>
  </div>
</template>

<script>
import Validator from "./validator"
export default {
  name: 'App',
  data () {
    return {
      name: '1321'
    }
  },
  mounted() {
    let validator = new Validator();
    validator.add([
      {
        strategy: !/\S+@\S+\.\S+/.test(this.name),
        errMsg: "请巴拉巴拉",
      },
      {
        strategy: !/\S/,
        errMsg: "不能为空",
      },
    ]);
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
