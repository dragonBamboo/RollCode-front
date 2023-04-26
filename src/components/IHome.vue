<template>
    <div class="app">
<<<<<<< HEAD
      <!-- 导航栏 -->
      <nav class="navbar">
        <div class="logo">Your Logo</div>
        <ul class="nav-links">
          <li><a href="/">首页</a></li>
          <li><a href="/questions">题库</a></li>
          <li><a href="/interviews">面试</a></li>
        </ul>
        <div class="search-box">
          <input type="text" placeholder="搜索题目或面试相关信息">
          <button>搜索</button>
        </div>
        <div class="user">
          <button>登录/注册</button>
        </div>
      </nav>
      
      <!-- Banner -->
      <div class="banner">
        <div class="banner-text">
          <h1>您网站的主要功能或特点</h1>
          <p>用简洁的文字介绍您网站的主要功能或特点</p>
          <button>了解更多</button>
        </div>
        <div class="banner-image">
          <img src="banner.jpg" alt="Banner Image">
        </div>
      </div>
      
      <!-- 内容区域 -->
      <div class="content">
        <h2>热门题目</h2>
        <div class="popular-questions">
          <!-- 展示一些您网站上最受欢迎的题目 -->
        </div>
        
        <h2>最新面试题目</h2>
        <div class="latest-interview-questions">
          <!-- 展示最近添加的面试题目 -->
        </div>
        
        <h2>推荐</h2>
        <div class="recommendations">
          <!-- 提供一些推荐，例如相关文章或资源链接 -->
        </div>
        
        <h2>功能介绍</h2>
        <div class="features">
          <!-- 展示您网站的主要功能或特点 -->
        </div>
      </div>
      
      <!-- 页脚 -->
      <!-- <footer class="footer">
        <div class="copyright">
          <p>版权声明：Your Copyright</p>
        </div>
        <div class="privacy-policy">
          <a href="#">隐私政策</a>
        </div>
        <div class="contact-us">
          <a href="#">联系我们</a>
        </div>
      </footer> -->
=======
        <el-container>
            <!-- 导航栏 -->
            <el-header class="navbar">
                <el-row>
                    <el-col :span="8">
                        <!-- Logo -->
                        <div class="logo">Your Logo</div>
                    </el-col>
                    <el-col :span="5gitgit">
                        <!-- 导航栏 -->
                        <el-menu class="menu" default-active="1" mode="horizontal">
                            <el-menu-item index="1">首页</el-menu-item>
                            <el-menu-item index="2">题库</el-menu-item>
                            <el-menu-item index="3">面试</el-menu-item>
                        </el-menu>
                    </el-col>
                    <el-col :span="5">
                        <!-- 搜索栏 -->
                        <div class="menu-item-warpper">
                            <el-input class="search-input" placeholder="搜索题目或面试相关信息"
                                      suffix-icon="el-icon-search"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="2">
                        <!-- 登录按钮 -->
                        <div class="menu-item-warpper">
                            <el-button class="search-btn" round type="success" size="large">搜索</el-button>
                        </div>
                    </el-col>
                    <el-col :span="1"></el-col>
                    <el-col :span="4">
                        <div class="menu-item-warpper">
                            <el-button class="login-btn" round type="success" size="large">登录/注册</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-header>

            <!-- Banner -->
            <el-main>
                <div class="banner">
                    <div class="banner-text">
                        <h1>您网站的主要功能或特点</h1>
                        <p>用简洁的文字介绍您网站的主要功能或特点</p>
                        <button>了解更多</button>
                    </div>
                    <div class="banner-image">
                        <img src="banner.jpg" alt="Banner Image">
                    </div>
                </div>
                <!-- 内容区域 -->
                <div class="content">
                    <h2>热门题目</h2>
                    <div class="popular-questions">
                        <!-- 展示一些您网站上最受欢迎的题目 -->
                    </div>

                    <h2>最新面试题目</h2>
                    <div class="latest-interview-questions">
                        <!-- 展示最近添加的面试题目 -->
                    </div>

                    <h2>推荐</h2>
                    <div class="recommendations">
                        <!-- 提供一些推荐，例如相关文章或资源链接 -->
                    </div>

                    <h2>功能介绍</h2>
                    <div class="features">
                        <!-- 展示您网站的主要功能或特点 -->
                    </div>
                </div>
            </el-main>

            <!-- 页脚 -->
            <el-footer class="footer">
                <div class="copyright">
                    <p>版权声明：Your Copyright</p>
                </div>
                <div class="privacy-policy">
                    <a href="#">隐私政策</a>
                </div>
                <div class="contact-us">
                    <a href="#">联系我们</a>
                </div>
            </el-footer>

        </el-container>
>>>>>>> eba10b9f98c0401cefdd1127857008aac1eca186
    </div>


</template>

<!--<script lang="ts">-->
<!--import { ref } from 'vue'-->

<!--const activeIndex = ref('1')-->
<!--const handleSelect = (key: string, keyPath: string[]) => {-->
<!--    console.log(key, keyPath)-->
<!--}-->
<!--export default {-->
<!--    name: 'App',-->
<!--    // 组件代码-->
<!--}-->
<!--</script>-->
<script>
export default {
    name: 'App',
    data() {
        return {
            activeIndex: 1,
        }
    }
}
</script>

<style lang="less">
/* 导航栏样式 */
.logo {
  font-size: 24px;
  font-weight: bold;
  color: #6fbaa2;
  line-height: 58px;
}

.menu /deep/ {
  width: 300px;
  border-bottom: none !important;
}

.el-input__wrapper /deep/ {
  border-radius: 20px !important;
  height: 38px;
}

.menu-item-warpper {
  display: flex;
  align-items: center;
  height: 58px;
  box-sizing: border-box;
}

.search-btn {
  margin-left: 10px;
  background-color: #32ca99 !important;
}

.login-btn {
  background-color: #32ca99 !important;
}

/* 导航栏样式结束 */
/* Banner样式 */
.banner {
  display: flex;
  justify-content: space-between;
  margin-top: 20px; /* 添加间距 */
  align-items: center;
  background-image: linear-gradient(to right, #ff416c, #ff4b2b);
  color: #fff;
  height: 330px;
  width: 76%;
  padding: 0 20px;
  border-radius: 40px;
  margin: 40px auto; /* 使用 margin 属性和 auto 值 */
}

.banner-text {
  flex: 1;
  max-width: 50%;
}

.banner-text h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
}

.banner-text p {
  font-size: 24px;
  margin-bottom: 40px;
}

.banner-text button {
  height: 60px;
  padding: 0 40px;
  border: none;
  border-radius: 30px;
  background-color: #fff;
  color: #ff416c;
  font-size: 24px;
  font-weight: bold;
}

.banner-text button:hover {
  cursor: pointer;
  background-color: #f5f5f5;
}

.banner-image img {
  max-width: 50%;
}


/* 内容区域样式 */
.content {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
}

.content h2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
}

.popular-questions {
  /* 添加样式 */
}

.latest-interview-questions {
  /* 添加样式 */
}

.recommendations {
  /* 添加样式 */
}

.features {
  /* 添加样式 */
}

/* 页脚样式 */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  height: 80px;
  padding: 0 20px;
}

.footer a {
  color: #fff;
  text-decoration: none;
}
</style>