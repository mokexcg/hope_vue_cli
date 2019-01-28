<template>
  <div class="father">
        <h3>这里是父组件</h3>
        <son>
            <div class="tmpl">
              <span>菜单1</span>
              <span>菜单2</span>
              <span>菜单3</span>
              <span>菜单4</span>
              <span>菜单5</span>
              <span>菜单6</span>
            </div>
        </son>
    </div>
</template>
<script>
import son from './son'
export default {
  name: 'test',
  components: {
    son
  }
}
</script>

<style>

</style>
