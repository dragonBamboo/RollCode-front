<template>
  <div class="recommendations">
    <div class="content">
      <div class="content-css">
        
        <ul>
          <li v-for="link in links" :key="link.id">
            <div class="link-items">

              <div class="link-header">
                <img :src="link.user_icon" target="_blank" />
                <a :href="link.url" target="_blank">{{ link.title }}</a>
                <span></span>
              </div>
              <div class="link-body">

                <!-- 论坛标题下行 -->
                <div class="link-body-box">
                  <div>
                    <!-- 论坛标签 -->
                    <div class="link-box-label">{{ link.labels }}</div>
                    <!-- 论坛内容 -->
                    <div class="link-box-content">{{ link.content }}</div>
                  </div>
                </div>

                <!-- 论坛内容下行item -->
                <div class="link-body-item">
                  <div class="link-item-views">
                    <el-icon content="浏览量">
                      <View />
                    </el-icon>
                    <span class="views-count">{{ link.views }}</span>
                  </div>
                  <div class="link-item-comments">
                    <el-icon content="评论数">
                      <ChatRound />
                    </el-icon>
                    <span class="comments-count">{{ link.comments }}</span>
                  </div>
                  <div class="link-item-likes">
                    <el-icon content="点赞数">
                      <Star />
                    </el-icon>
                    <span class="likes-count">{{ link.likes }}</span>
                  </div>

                </div>
              </div>

            </div>
          </li>
          <li v-if="!links.length">暂无数据</li>
        </ul>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

const activeName = ref('first')
const title = ref('');

const links = ref([
  { id: 1, user_icon: 'https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png', title: '如何在「求职面试」中发布一篇帖子？', url: 'http://example.com/1', labels: '笔试', likes: 10, comments: 30, content: "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900", time: "", views: "30" },
  { id: 2, user_icon: 'https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png', title: '请问除了大厂外企还有哪些厂考算法？', url: 'http://example.com/2', labels: '面试', likes: 20, comments: 30, content: "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900", time: "", views: "30" },
  { id: 3, user_icon: 'https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png', title: '什么是Java中的Lambda表达式？如何使用它简化代码？', url: 'http://example.com/3', labels: '面试', likes: 30, comments: 30, content: "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900", time: "", views: "30" },
  { id: 3, user_icon: 'https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png', title: '如何在Java中使用正则表达式进行字符串匹配？', url: 'http://example.com/3', labels: '笔试', likes: 30, comments: 30, content: "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900", time: "", views: "30" },
  { id: 3, user_icon: 'https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png', title: 'Java中的泛型是什么？如何使用它来提高代码的复用性？', url: 'http://example.com/3', labels: '面试', likes: 30, comments: 30, content: "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900", time: "", views: "30" },
  { id: 3, user_icon: 'https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png', title: '如何在Java中使用注解来标记和描述程序元素？', url: 'http://example.com/3', labels: 'JAVA', likes: 30, comments: 30, content: "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900", time: "", views: "30" },
  { id: 3, user_icon: 'https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png', title: 'Java中的面向对象编程是什么？如何使用它来编写可维护的代码？', url: 'http://example.com/3', labels: 'JAVA', likes: 30, comments: 30, content: "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900", time: "", views: "30" },
  { id: 3, user_icon: 'https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png', title: '如何在Java中使用线程池来提高程序的并发性能？', url: 'http://example.com/3', labels: '面试', likes: 30, comments: 30, content: "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900", time: "", views: "30" },
  { id: 3, user_icon: 'https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png', title: 'Java中的网络编程是什么？如何使用它来构建网络应用程序？', url: 'http://example.com/3', labels: '', likes: 30, comments: 30, content: "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900", time: "", views: "30" },
  { id: 3, user_icon: 'https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png', title: '如何在Java中使用JDBC来访问关系型数据库？', url: 'http://example.com/3', labels: '面试', likes: 30, comments: 30, content: "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900", time: "", views: "30" },
  { id: 3, user_icon: 'https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png', title: '请问一下，二本院校有参加华为od笔试的资格吗？', url: 'http://example.com/3', labels: '面试', likes: 30, comments: 30, content: "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900", time: "", views: "30" },
  { id: 3, user_icon: 'https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png', title: '请问一下，二本院校有参加华为od笔试的资格吗？', url: 'http://example.com/3', labels: '面试', likes: 30, comments: 30, content: "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900", time: "", views: "30" },
  { id: 3, user_icon: 'https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png', title: '请问一下，二本院校有参加华为od笔试的资格吗？', url: 'http://example.com/3', labels: '面试', likes: 30, comments: 30, content: "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900", time: "", views: "30" },
  { id: 3, user_icon: 'https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png', title: '请问一下，二本院校有参加华为od笔试的资格吗？', url: 'http://example.com/3', labels: '面试', likes: 30, comments: 30, content: "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900", time: "", views: "30" },

]);

const fetchRecommendations = async () => {
  try {
    const response = await axios.get('/api/recommendations');
    title.value = response.data.title;
    links.value = response.data.links;
  } catch (error) {
    console.error(error);
  }
};

const refreshData = () => {
  fetchRecommendations();
};

onMounted(() => {
  fetchRecommendations();
});

</script>

<style lang="less" scoped>
/* Recommendations 样式 */
.recommendations {
  border-radius: 25px;

  .recommendations-header {
    display: flex;
    height: 60px;
    margin-left: 10px;
    align-items: center;
    border-bottom: #f8f8f8 solid 1px;
    box-sizing: border-box;



    .r-btn-parent {
      display: flex;
      justify-content: center;
      /* 可选：水平居中 */
      align-items: center;
      /* 可选：垂直居中 */
      margin-right: 20px;

      .my-button {
        width: 120px;
        height: 30px;
        font-size: 20px;
        border-radius: 20px;
        margin-left: 10px;
        color: #474747;
        
      }
      .my-button:hover {
 
        --el-link-hover-text-color: none !important;
        transition: color 0.3s;
        color: #44c89e;

    }
    }
  }

  .recommendations-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }

  .content {
    margin-top: 20px;

    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 10px;
        font-size: 14px;

        .link-items {
          a {
            color: #333;
            text-decoration: none;
            cursor: pointer;
            transition: color 0.3s;

            &:hover {
              color: #47e2b1;
            }
          }


        }
      }
    }
  }
}

.link-items {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
  /* 隐藏溢出部分 */
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);

  .link-header {
    display: flex;
    align-items: left;
    margin-bottom: 10px;

    a {
      margin-top: 17px;
      margin-left: 17px;
      font-size: 16px;
      font-weight: bold;
      color: #333;
      margin-left: 10px;
    }

    img {
      width: 20px;
      height: 20px;
      border-radius: 10px;
      margin-top: 18px;
      margin-left: 18px;

    }

    span {

      height: 2px; // 修改分割线的高度
      background-color: #dcdfe6;
      margin-left: 10px;
    }
  }
}




.link-body {
  text-align: left;
  margin-left: 18px;

  .link-body-box {
    display: flex;
    margin-right: 10px;
    flex-direction: column;


    .link-box-label {
      display: inline-flex !important;
      justify-content: flex-start !important;
      align-items: center !important;
      border-radius: 13px;
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
      background-color: rgba(0, 10, 32, 0.05);
      color: #8e8e8e;
      padding: 3px 10px;
      margin-bottom: 10px;
    }

    .link-box-content {
      font-size: 14px;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 10px;
      flex: 1;
    }
  }

  .link-body-item {
    display: flex !important; // 设置为行内块级元素

    /* 左右两边各留出10像素的间距 */
  
    >* {
      margin: 10px;
    }
  }

}



.views-count,
.comments-count,
.likes-count {
  margin: 5px;
  font-size: 14px;
  color: #999;

}
</style>