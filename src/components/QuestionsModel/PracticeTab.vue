<template>
    <div>
        <div class="tab-container">
            <div class="tab-select">
                <el-select v-model="selectedType" 
                placeholder="请选择题库类型" 
                :visible.sync="visible" @mouseover="handleMouseOver">
                    <el-option label="软件开发" value="ds"></el-option>
                </el-select>
            </div>
            
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref} from 'vue';
import { ElSelect, ElOption, ElTabs, ElTabPane } from 'element-plus';
const visible = ref(false);
export default defineComponent({
    
    name: 'SpecializedPractice',
    setup() {
        
    },
    components: {
        ElSelect,
        ElOption,
        ElTabs,
        ElTabPane,
    },
    data() {
        return {
            selectedType: '',
            activeTab: 'array',
            doneArray: 0,
            totalArray: 196,
            doneString: 0,
            totalString: 72,
            doneLinkedList: 0,
            visible,
            totalLinkedList: 193,
            // 其他分类块的数据
        };
    },
    methods: {
        // 其他方法
        handleMouseOver() {
      this.visible = true;
    },
    },
});
</script>
  
<style lang="less" scoped>
.tab-container {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
}
.tab-select{
    
    .el-input__wrapper {
        align-self: start;
      }
    
      .el-select {
        width: 200px;
        display: flex;
        .el-scrollbar {
          width: 100%;
        }
      }
    
}
.practice-tabs {
    margin-top: 20px;
}

.practice-block {
    margin: 20px 0;
}

.practice-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}

.practice-title {
    font-size: 18px;
    font-weight: bold;
}

.practice-content {
    /* 题目列表的样式 */
}

/deep/.el-tabs__nav-scroll {
    background-color: transparent !important;
    height: 60px;
    border-radius: 10px;
}

.el-tabs__item {
    color: rgb(99, 99, 99);
    font-size: medium;
}
</style>