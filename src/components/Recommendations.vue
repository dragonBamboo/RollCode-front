<template>
    <div class="recommendations">
        <div class="recommendations-header">
            <el-row class="row-bg" justify="space-between">
                <el-col :span="2">
                    <div class="r-btn-parent ">
                        <el-button class="my-button recommend-text" text type="primary" style="">推荐</el-button>
                    </div>
                </el-col>
                <el-col :span="2">
                    <div class="r-btn-parent">
                        <el-button class="my-button" text type="primary">刷新
                            <el-icon>
                                <RefreshRight/>
                            </el-icon>
                        </el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="content">
            <!-- 提供一些推荐，例如相关文章或资源链接 -->
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Recommendations'
}
</script>

<style lang="less" scoped>
/* Recommendations 样式 */
.recommendations {
  margin-top: 20px;
  padding: 10px;
  //background-color: rgba(23, 187, 68, 0.17);
    background-color: #ffffff;
  border-radius: 25px;

  .recommendations-header {
    display: flex;
    height: 64px;
    align-items: center;
    border-bottom: #f8f8f8 solid 1px;
    box-sizing: border-box;

    .recommend-text /deep/ {
      font-size: 30px !important;
      font-weight: bold;
      font-family: '新宋体', Avenir, Helvetica, Arial, sans-serif;
      color: #333333 !important;
    }

    .r-btn-parent {
      display: flex;
      justify-content: center; /* 可选：水平居中 */
      align-items: center; /* 垂直居中 */
      height: 64px;

      .my-button /deep/ {
        background-color: transparent !important;
        color: #32ca99;
        font-size: 18px; /* 可选：设置字体大小 */
      }
    }
  }

  .content {
    min-height: 800px;
  }
}


</style>