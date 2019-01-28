<template>
  <div>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 0px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-radio-group class="flexible" v-model="isCollapse">
      <i class="el-icon-arrow-left" v-on:click="flexible"></i>
    </el-radio-group>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64" text-color="#fff">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location" text-color="#fff"></i>
          <span slot="title">动物家园</span>
        </template>
        <el-menu-item index="1-1" router-link="{path: '/firstpage'}">选项1</el-menu-item>
        <el-menu-item index="1-2" router-link="{path: '/secondpage'}">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-menu-item index="1-4">选项4</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">植物家园</span>
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-menu-item index="2-4">选项4</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  height: 100%;
}
.el-submenu .el-menu-item {
  padding-left: 0px;
}
.flexible {
  width: 200px;
  height: 50px;
  background: #41484e;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-icon-arrow-left {
  font-size: 16px;
  color: #fff;
}
</style>
<script>
export default {
  name: 'Slider',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    flexible () {
      console.log(11111)
      // isCollapse: true
    }
  }
}
</script>
