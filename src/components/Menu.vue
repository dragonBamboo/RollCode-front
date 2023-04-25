<template>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
    >
        <el-menu-item index="1">
            首页
        </el-menu-item>
        <el-sub-menu index="2">
            <template #title>题库</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3" >面试disabled</el-menu-item>
        <el-menu-item index="4">求职</el-menu-item>
        <el-menu-item index="5">学习</el-menu-item>
        <el-menu-item index="6">竞赛</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: "Menu",
    data() {
        return {
            activeIndex: '1'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key,keyPath)
        },
    }
}
</script>

<style scoped>
  #index-img{
      height: 56px;
  }
  .el-menu-demo/deep/{
      height: 56px;
      width: auto;
  }


</style>