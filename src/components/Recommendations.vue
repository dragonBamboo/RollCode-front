<template>
  <div class="recommendations">
    <!-- <div class="recommendations-header">
      <el-tabs v-model="activeName" class="recommendations-tabs">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
      </el-tabs>

    </div> -->
    <div class="recommendations-header">
      <el-row class="row-bg" justify="space-between">
        <el-col :span="2">
          <div class="r-btn-parent">
            <el-button class="my-button recommend-text" text type="primary">推荐</el-button>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="r-btn-parent">
            <el-button class="my-button" text type="primary" @click="refreshData">刷新
              <el-icon>
                <RefreshRight />
              </el-icon>
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <div>
        <h3>{{ title }}</h3>
        <ul>
          <li v-for="link in links" :key="link.id">
            <div class="link-items">
              <div class="link-title">
                <a :href="link.user_icon" target="_blank">{{ link.user_icon }}</a>
                <a :href="link.url" target="_blank">{{ link.title }}</a>
                <span></span>
              </div>
              <div class="link-contents">
                <div class="link-box">
                  <div class="link-labels">{{ link.labels }}</div>
                  <div class="link-content">{{ link.content }}</div>
                </div>
                <div class="link-item">
                  <div class="views">
                    <el-icon content="浏览量">
                      <View />
                    </el-icon>
                    <span class="views-count">{{ link.views }}</span>
                  </div>
                  <div class="comments">
                    <el-icon content="评论数">
                      <ChatRound />
                    </el-icon>
                    <span class="comments-count">{{ link.comments }}</span>
                  </div>
                  <div class="likes">
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
  { id: 1, user_icon: '', title: '示例链接1', url: 'http://example.com/1', labels:'笔试', likes: 10, comments: 30, content: "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900", time: "", views: "30"},
  { id: 2, user_icon: '', title: '示例链接2', url: 'http://example.com/2', labels:'', likes: 20, comments: 30, content: "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900", time: "", views: "30" },
  { id: 3, user_icon: '', title: '示例链接3', url: 'http://example.com/3', labels:'', likes: 30, comments: 30, content: "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900", time: "", views: "30" },
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
  margin-top: 12px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 25px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);

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
        font-size: 14px;
        border-radius: 20px;
        margin-left: 10px;
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
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.link-items a {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.icon {
  font-size: 20px;
  margin-right: 5px;
}

.views-count,
.comments-count,
.likes-count {
  font-size: 14px;
  color: #999;
}

.link-labels {
  border-radius: 13px;
  height: 27px;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  display: flex;
  align-items: center;
  background-color: rgba(0,10,32,0.05);
  color: #8e8e8e;
  padding: 0px 9px;
}
</style>