<template>
    <div class="exam">
      <!-- <questions /> -->
      <el-container class="my-container">
        <el-header class-name="inavbar">
          <INavbar />
          
        </el-header>
        <el-affix target=".my-container" >
            <ExamNavbar/>
          </el-affix>
        
        <div class="exam">
          <el-row>
            <el-col :span="17" class="col-left" :gutter="10" >
              <el-main>
                <GetExamInfo/>
              </el-main>
            </el-col>
           
          </el-row>
        </div>
      </el-container>
    </div>
  </template>

  <style lang="less" scoped>
  .my-container {
    height: auto;
    background-color: #f7f8f8;
  }
  /deep/.el-header{
    .navbar{
        position:absolute;
        top: 0;
    }
 
  }
  .el-row {
    justify-content: center;
  }
</style>