<template>
    <div class="job-toolbox">
        
        <div class="tool-header">
            <img src="@/assets/1.png" class="tool-box-icon" />
            <h2 class="title">求职工具箱</h2>
        </div>
        <div class="tool-body">
            <div class="item-module" v-for="(exp, index) in experiences" :key="index">
                <div class="item-header">
                    <img :src="exp.icon" class="item-icon" />
                    <h3 class="item-label">{{ exp.label }}</h3>
                </div>
                <ul class="item-list">
                    <li class="item-link" v-for="(link, i) in exp.links" :key="i">
                        <el-link :href="link.href" :target="link.target" :title="link.title">{{ link.text }}</el-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            experiences: [
                {
                    label: '面试经验',
                    icon: 'https://static.nowcoder.com/fe/file/oss/1670224506225AUBYN.png',
                    links: [
                        {
                            href: 'https://www.nowcoder.com/interview/center?anchor=companyExp&jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                            target: '_blank',
                            title: '职位面经',
                            text: '职位面经'
                        },
                        {
                            href: 'https://www.nowcoder.com/interview/center?anchor=companyExp&checked=company&jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                            target: '_blank',
                            title: '公司面经',
                            text: '公司面经'
                        },
                        {
                            href: 'https://www.nowcoder.com/interview/ai/index?jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                            target: '_blank',
                            title: 'AI模拟面试',
                            text: 'AI模拟面试'
                        }
                    ]
                },
                {
                    label: '求职题库',
                    icon: 'https://static.nowcoder.com/fe/file/oss/1670224563743RVJCA.png',
                    links: [
                        {
                            href: 'https://www.nowcoder.com/exam/company?jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                            target: '_blank',
                            title: '公司真题',
                            text: '公司真题'
                        },
                        {
                            href: 'https://www.nowcoder.com/exam/intelligent?jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                            target: '_blank',
                            title: '专项练习',
                            text: '专项练习'
                        },
                        {
                            href: 'https://www.nowcoder.com/exam/oj?jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                            target: '_blank',
                            title: '在线编程',
                            text: '在线编程'
                        }
                    ]
                },
                {
                    label: '职位投递',
                    icon: 'https://static.nowcoder.com/fe/file/oss/1670224616504KXRDZ.png',
                    links: [
                        {
                            href: 'https://www.nowcoder.com/exam/company?jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                            target: '_blank',
                            title: '校招日程',
                            text: '校招日程'
                        },
                        {
                            href: 'https://www.nowcoder.com/exam/intelligent?jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                            target: '_blank',
                            title: '校招职位',
                            text: '校招职位'
                        },
                        {
                            href: 'https://www.nowcoder.com/exam/oj?jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                            target: '_blank',
                            title: '社招职位',
                            text: '社招职位'
                        }
                    ]
                },
                {
                    label: '求职助手',
                    icon: 'https://static.nowcoder.com/fe/file/oss/1670224616504KXRDZ.png',
                    links: [
                        {
                            href: 'https://www.nowcoder.com/exam/company?jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                            target: '_blank',
                            title: '薪资查询',
                            text: '薪资查询'
                        },
                        {
                            href: 'https://www.nowcoder.com/exam/intelligent?jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                            target: '_blank',
                            title: '简历互评',
                            text: '简历互评'
                        },

                    ]
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.job-toolbox {
    border: 1px solid #fcfcfc;
    border-radius: 20px;
    margin-top: 12px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    padding: 16px;
    padding-top: 5px;
    width: 78%;
}

.tool-header {
    align-items: center;
    display: flex;
    margin-bottom: 2px;
    font-size: 11px;
}

.tool-box-icon {
    height: 30px;
    width: 30px;
    margin-right: 5px;
}

.tool-body {
    display: inline-block;
    justify-content: space-between;
}

.item-module {
    flex-basis: 10%;
}

.item-header {

    text-align: left;
    margin-bottom: 0px;
}

.item-icon {
    height: 19px;
    margin-right: 8px;
    width: 19px;
    margin-left: 8px;
}

.item-label {
    font-size: 14px;
    font-weight: 500;
    display: inline-block;
    font-weight: bold;
}

.item-list {
    list-style: none;
    margin: 0;
    display: flex;
    padding: 0;
    margin-bottom: 13px;
    margin-left: 10px;
    white-space: nowrap;
    /* 禁止换行 */
}

.item-link {
    display: inline-block !important;
    margin-right: 17px;
    text-decoration: none;
    /* 设置悬停下划线为 none */

    .el-link:hover {
        cursor: pointer;
        --el-link-hover-text-color: none !important;
        transition: color 0.3s;
        color: #47e2b1;
    }

}
</style>