<template>
    <div class="app">
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
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'App',
    // 组件代码
  }
  </script>
  
  <style lang="less">
  /* 导航栏样式 */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    height: 50px;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #6fbaa2;
    margin-left: 140px; /* 添加 margin-left 属性 */
  }
  .nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .nav-links li {
    margin-right: 20px;
  }
  .nav-links li:last-child {
    margin-right: 0;
  }
  .nav-links a {
    color: #333;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
  }
  .nav-links a:hover {
    color: #32ca99
  }
  .search-box {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .search-box input[type="text"] {
    height: 40px;
    border: none;
    border-radius: 20px;
    padding: 0 20px;
    font-size: 16px;
    background-color: #f5f5f5;
  }
  .search-box button {
    height: 40px;
    padding: 0 20px;
    border: none;
    border-radius: 20px;
    margin-left: 10px;
    background-color: #32ca99;
    color: #fff;
  }
  .search-box button:hover {
    cursor: pointer;
    background-color: #6fbaa2;
  }
  .user button {
    height: 35px;
    padding: 0 20px;
    border: none;
    border-radius: 20px;
    background-color: #32ca99;
    color: #fff;
    margin-right: 140px; /* 添加 margin-left 属性 */
  }
  .user button:hover {
    cursor: pointer;
    background-color: #6fbaa2;
  }
  
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