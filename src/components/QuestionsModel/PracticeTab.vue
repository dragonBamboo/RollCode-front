<template>
    <div>
        <div class="tab-container">
            <div class="tab-select">
                <el-select v-model="selectedType" placeholder="请选择题库类型" :visible.sync="visible"
                    @mouseover="handleMouseOver">
                    <el-option label="软件开发" value="ds"></el-option>
                </el-select>

            </div>

            <div class="title-links">
                <el-tabs v-model="activeName" class="home-title-tabs">
                    <el-tab-pane label="常见题目" name="first">

                    </el-tab-pane>

                </el-tabs>
                <img class="title-link-img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAB4CAMAAACZ62E6AAAA0lBMVEUAAAD+///9//78//78///7//76//77//36//76//34//35//35//36//37//72//z2//z3//3z//z3//z4//30//v1//zz//v0//z3//3y//vy//vw//rw//vx//vx//rw//ru//nu//rv//rv//rs//ns//nt//nt//nr//ns//jq//nq//np//jq//j9//30//vo//jt//n8///u//rp//f2//35+fn2//zs//jt//n///9837+E38J/38Dq//jb9+7O9+qY586W583p//ea587xHD0NAAAAO3RSTlMACBMcGCEyJS43SERAOyljXk15WlFwZ311VoaCmJOPi5yyqaWhyMC7t83E1tHe2g9s4q0QruNsKlRLjqxS87EAAAH9SURBVFjD7Zl9T8IwEIfZgAEDGU4BX0BFxXcdsMmGlk0Qv/9XsjYSEmoo/Z0Gl9D/nzx3625d7zKvYmWghcEGXxhseDnTw2Avm89isJGtVgtfsK8FC9IqWcUQgc1iubLDYW7WDNuo2rs2BufLe4f7C1gjbLPiODUO65sNq1YfNjisby5ErntQ7zX0zabtHh03BaxpNkq99skph/XN+Vr7rDWHtXL2Ri/nF5cc1jdbbqczgOCcM7i6vukEP8DRatgYtW67dxxeNg+V5rDZvX/4hgO9sMfj58enObxWzr4ErxV2KMN9DsNh9zXD9ihm/7fM8aoHpjLHUtiYWYb1zOnJmbJVTGWOFLAiZ9CshCn1zNB6podN2ipCPccUc6x4YBrmADTTcw7SkzNhqxilnhmlnhkh5zc2xet5yiZgPQtxAof9wSYJuFVc/J4kaD1z8Qw1c/EsScB3e8ozTrAHJmBhhnIWYcNbJeJG61moUbNQw/XM1Qlaz+L9ROtZqAnfMEY5nxnlfGYb+/TG2/M5Lefzf/6J2/5vL8GbuhoJGL9Lbu/PeuaxRs5parJEoHlINKubaVA9L9p4SD3LDcS/b13iTVN/Rbu2hZgXjeK68t3GW9QepTnur9eWR81i5SoOYJZGEfAQJLRlGB+/AIMfHBa8gInDLh8fs2EwPuCT1ycdk4JdoECR+gAAAABJRU5ErkJggg==" />

                <ul class="title-link" v-for="(item, index) in blockItems" :key="index">
                    <a :href="'#' + index">{{ item.title }}</a>
                </ul>
            </div>
            <div class="tab-content">

                <div class="content-item" v-for="(item, index) in blockItems" :key="index">
                    <div style="background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAAXCAMAAABTcsO8AAAAaVBMVEUAAABPT09KSkpPT08+Pj5d55tj66Bp7qVU4ZNV4ZRh6p1l7KJu76dS4JJz9K1r76dx8qp276xp8KZP3pBp5aFq46B09K5r3ZxN3Y1Y5JdY45du76hW2ZFa5ZlK2otX5JdW5JVM3YxN3I2PIyF5AAAAI3RSTlMACQQGCHNkVol7bF1HkDhOQCwZmD83MRCfgoJPJXthVIJoZ+fn2kUAAAFRSURBVHhe7dNbT8MwDAXg+NjABtugpRcu4/r/fyQ5rqMuQjAh5ZHzEsttPllJm3KOn5v99q1P7YPXh/v95unlYmhvF/r6cmxNH0k/kr65mhvbHz6107ddY3vjUzu9OzS2T+i71vb2faVbn8nbSk99Y7t3+pl0N6fGGZzeDVPXJwgyYCKivmYAXqpE3xxQyYE/ZU+j8n2I1TNy6mHMtNsQA0BXBWTI0hRRwEgaKxWlqFAVWypmKdjyzNPhMB5nLLYtXU7gjokTSaXqJ2+ATXJRpbXlSlA0qBH0nTEtJYijEQ1GUAiz2uZ2nNgxEWR9RYWLadLKtqjKtPGiMX4mORkrCbi22VEjTPesrUy5VENlZ6Q+E3p0vF1sgFLYP5+JWW0nkeouucdVofC3u1SpbLZPvkHQC5VDRN/S2W+QHmqbSvXv0CPlSunj939HikrpW/7zBemADH+SEgpEAAAAAElFTkSuQmCC') no-repeat">
                        <h3 class="h3-title" :id="''+index">{{ item.title }}</h3>
                    </div>
                    
                    <div class="sub-items">
                        <div class="sub-item" v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
                            <span >{{ subItem.title }}</span>
                            <div class="sub-span"><span id="status">{{ subItem.status.done }}</span>
                                <span>/{{ subItem.status.total }}题</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ElSelect, ElOption, ElTabs, ElTabPane } from 'element-plus';
const visible = ref(false);
const activeName = ref('first')

export default defineComponent({

    name: 'SpecializedPractice',
    setup() {
        const blockItems = [
            {
                title: '基础算法',
                subItems: [
                    { title: '哈希', status: { done: 0, total: 63 } },
                    { title: '查找', status: { done: 0, total: 100 } },
                    { title: '排序', status: { done: 0, total: 257 } },
                    { title: '递归', status: { done: 0, total: 257 } },
                ],
            },
            {
                title: '编程语言',
                subItems: [
                    { title: 'Go', status: { done: 0, total: 60 } },
                    { title: 'C++', status: { done: 0, total: 100 } },
                    { title: 'Java', status: { done: 0, total: 257 } },
                    { title: 'JavaScript', status: { done: 0, total: 307 } },
                    { title: 'Python', status: { done: 0, total: 221 } },
                    { title: 'HTML', status: { done: 0, total: 252 } },
                    { title: 'CSS', status: { done: 0, total: 190 } },
                    { title: 'C语言', status: { done: 0, total: 224 } },
                ],
            },
            {
                title: '安全',
                subItems: [
                    { title: '加密和安全', status: { done: 0, total: 63 } },
                ],
            },
            {
                title: '中间件',
                subItems: [
                    { title: 'Redis', status: { done: 0, total: 63 } },
                    { title: 'Kafka', status: { done: 0, total: 56} },
                    { title: 'Hive', status: { done: 0, total: 54 } },
                    { title: 'ZooKeeper', status: { done: 0, total: 47 } },
                ],
            },

        ];
        return {
            blockItems,
        }
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
            activeName,
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
    padding-right: 0px;
    border-radius: 10px;
}

.tab-select {
    display: flex;

    .el-input__wrapper {
        align-self: start;
    }

    .el-select {
        width: 200px;
        display: flex;
        flex: 1;

        .el-scrollbar {
            width: 100%;

        }
    }

}

.title-links {
    display: flex;

}

.title-link-img {
    margin-top: 5px;
    margin-left: 60px;
    width: 30px;
    height: 60px;
}

.title-link {
    margin-top: 23px;
    display: inline-block;
    list-style: none;
    margin-right: 30px;
    padding: 0;
    color: #32ca99;
    scroll-margin-bottom:100px;
    a{
        color: #484848;
        text-decoration: none;
        
        scroll-margin-bottom:100px!important;
    }
 
}

li:first-child{
    color: #32ca99;
}
.tab-content {
    .content-item {
        margin-bottom: 20px;

        .h3-title {
            margin-top: 25px;
            margin-left: 5px;
            margin-bottom: 20px;
            display: flex;
        }

        .sub-items {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 20px;
            justify-content: space-between;

            .sub-item {
                display: flex;
                width: 150px;
                background-color: #f7f8f8;
                flex-direction: column;
                margin-bottom: 20px;
                align-items: flex-start;
                margin-right: 20px;
                padding: 20px;
                font-size: 13px;
                font-weight: bold;
                border-radius: 20px;
                transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

                .sub-item:last-child {
                    margin-right: 0px;

                }

                .sub-span {
                    margin-top: 5px;
                }

                span {
                    margin: 3px;
                    margin-right: 0px;
                }

                #status {
                    color: #32ca99;
                }

                span:last-child {
                    color: #999;
                }
            }

            .sub-item:hover {
                background-color: #ffffff;
                box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
                transform: translateY(-5px);

            }
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
}</style>