<template>
  <footer class="nk-footer">
    <div class="nk-container">
      <div class="nk-footer-row">
        <div class="nk-footer-col">
          <h4 class="nk-footer-title">关于我们</h4>
          <ul class="nk-footer-list">
            <li><a href="#">RollCode简介</a></li>
            <li><a href="#">RollCode公告</a></li>
            <li><a href="#">招贤纳士</a></li>
          </ul>
        </div>
        <div class="nk-footer-col">
          <h4 class="nk-footer-title">合作伙伴</h4>
          <ul class="nk-footer-list">
            <li><a href="#">RollCode公司</a></li>
            <li><a href="#">RollCode公司</a></li>
            <li><a href="#">RollCode公司</a></li>
          </ul>
        </div>
        <div class="nk-footer-col">
          <h4 class="nk-footer-title">联系我们</h4>
          <ul class="nk-footer-list">
            <li><a href="#">联系方式</a></li>
            <li><a href="#">客服中心</a></li>
          </ul>
        </div>
        <div class="nk-footer-col">
          <h4 class="nk-footer-title">联系我们</h4>
          <ul class="nk-footer-list">
            <li><a href="#">联系方式</a></li>
            <li><a href="#">客服中心</a></li>
          </ul>
        </div>
      </div>
    </div>
    <br>
    <p class="nk-footer-copy" >版权所有 © 2023 RollCode代码滚动</p>
    <br>
  </footer>
</template>

<style>
.nk-footer {
  background-color: #312e2e;
  padding: 0 0;
  font-size: 14px;
  line-height: 1.5;
}

.nk-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 0px;
}

.nk-footer-row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0px;
}

.nk-footer-col {
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 0px;
  margin-bottom: 0px;
}

.nk-footer-title {
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.nk-footer-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nk-footer-list li {
  margin-bottom: 10px;
}

.nk-footer-list a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s;
}

.nk-footer-list a:hover {
  color: #11e88b;
}

.nk-footer-copy {
  flex-wrap: wrap;
  color: #8a8a9a;
  margin-top: 20px ;
  font-size: 14px;
  text-align: center;
}
</style>


<script>
export default {
  name: "Footer"
}
</script>

