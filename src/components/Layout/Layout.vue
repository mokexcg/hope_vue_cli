<template>
  <el-container>
    <el-header>
      header
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Slider></Slider>
      </el-aside>
      <el-container>
        <el-main>
          <FirstPage></FirstPage>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-container {
  /* margin-bottom: 40px; */
  height: 100%;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
<script>
import Slider from './Slider'
import FirstPage from '../content/FirstPage'
export default {
  name: 'Layout',
  components: { Slider, FirstPage }
}
</script>
