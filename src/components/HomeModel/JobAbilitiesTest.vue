<template>
  <div class="job-abilities">
    <div class="abilities-header">
      <img src="@/assets/2.png" class="abilities-box-icon" />
      <h2 class="title">职业能力测评</h2>
    </div>
    <div class="abilities-body">
      <div class="item-module">
        <ul class="item-list">
          <li class="item-link" v-for="(ability, i) in abilities" :key="i">
            <el-link :href="ability.href" :target="ability.target" :title="ability.label">{{ ability.label }}</el-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
export default {
  name: 'JobAbilitiesTest',
  data() {
    return {
      abilities: [
        {
          label: 'JAVA',
          icon: 'https://static.nowcoder.com/fe/file/oss/1670224506225AUBYN.png',
          href: 'https://www.nowcoder.com/interview/center?anchor=companyExp&jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
          target: '_blank',
        },
        {
          label: 'C/C++',
          icon: 'https://static.nowcoder.com/fe/file/oss/1670224506225AUBYN.png',
        },
        {
          label: '算法',
          icon: 'https://static.nowcoder.com/fe/file/oss/1670224506225AUBYN.png',
        },
        {
          label: '前端',
          icon: 'https://static.nowcoder.com/fe/file/oss/1670224506225AUBYN.png',
        },
        {
          label: '测试',
          icon: 'https://static.nowcoder.com/fe/file/oss/1670224506225AUBYN.png',
        },
        {
          label: '运维',
          icon: 'https://static.nowcoder.com/fe/file/oss/1670224506225AUBYN.png',
        },
        {
          label: '产品',
          icon: 'https://static.nowcoder.com/fe/file/oss/1670224506225AUBYN.png',
        },
        {
          label: '运营',
          icon: 'https://static.nowcoder.com/fe/file/oss/1670224506225AUBYN.png',
        },
        {
          label: '策划',
          icon: 'https://static.nowcoder.com/fe/file/oss/1670224506225AUBYN.png',
        },
      ]
    }
  }
}


</script>
  
<style lang="less" scoped>
/* JobAbilitiesTest 样式 */
.job-abilities {
  border: 1px solid #fcfcfc;
  margin-top: 16px;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 16px;
  padding-top: 5px;
  width: 78%;
}

.abilities-header {
  align-items: center;
  display: flex;
  margin-bottom: 2px;
  font-size: 11px;
}


.abilities-box-icon {
  height: 30px;
  width: 30px;
  margin-right: 5px;
}

.abilities-body {
  display: flex;
  justify-content: space-between;
}

.item-list {
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  margin-top: 10px;
  display: flex;
  padding: 0;
  margin-left: 10px;

  /* 禁止换行 */
}
.item-link {
  display: inline-block;
  margin-right: 17px;
  text-decoration: none;
  width: calc(33.33% - 17px); /* 计算每个元素的宽度，并减去相邻元素之间的间距 */
  margin-bottom: 14px;
  .el-link:hover {
    cursor: pointer;
    --el-link-hover-text-color: none !important;
    transition: color 0.3s;
    color: #47e2b1;
    
  }
}

</style>