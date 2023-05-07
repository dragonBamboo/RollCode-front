<template>
    <el-calendar ref="calendar" class-name="q-calendar" :disabled-date="disabledDates">
        <template #header="{ date }">
            <span>每日一题</span>
            <span>{{ date }}</span>

        </template>
    </el-calendar>
</template>

<style lang="less">
.el-calendar {
    margin-left: 30px;
    width: 280px;
    --el-calendar-border: transparent;
    border-radius: 20px;
    --el-calendar-cell-width: 35px !important;

    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

    .el-calendar__body {
        padding: 10px 10px 35px;

        .el-calendar-day {
            border-radius: 20px;

        }
    }

    .current.is-selected {


        border-radius: 20px;


    }

    .current.is-selected.is-today {
        color: aliceblue;
        background-color: #47e2b1;

    }


    .el-calendar-table:not(.is-range) td.next {

        /*隐藏下个月的日期*/

        display: none;

    }

    .el-calendar-table:not(.is-range) td.prev {

        /*隐藏上个月的日期*/

        visibility: hidden;

    }

    thead {
        font-size: small;
    }


}

.current.is-selected.is-today:hover {
    background-color: #2e725d !important;
    color: aliceblue;
    border-radius: 20px;

  }

</style>