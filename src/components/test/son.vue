<template>
  <div class="child">
    <p>这里是子组件</p>
    <h3>test-slot</h3>
    //父组件里的span会替换掉slot所以这里的123是看不见的
    //如果父组件在使用子组件testSlot的时候不在里面加内容则这里的slot会显示出来
    <slot>123</slot>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
