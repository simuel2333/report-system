<template>
    <div>
        <h1>评级预测结果</h1>
        <div style="margin-bottom:20px">
            <span style="margin-left:90px;">股票代码：</span>
            <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
        </div>
        <div style="margin-bottom:20px">
            <span style="margin-left:90px;">起始日期：</span>
            <el-date-picker v-model="date1" type="date" placeholder="选择日期"></el-date-picker>
        </div>
        <div style="margin-bottom:20px">
            <span style="margin-left:105px;">时间段：</span>
            <el-cascader v-model="value1" :options="options1" @change="handleChange"></el-cascader>
        </div>
        <div style="margin-bottom:20px">
            <span style="margin-left:57px;">训练集正确率：</span>
            <el-input v-model="input1" placeholder="请输入内容"></el-input>
        </div>
        <div style="margin-bottom:20px">
            <span style="margin-left:57px;">测试集正确率：</span>
            <el-input v-model="input2" placeholder="请输入内容"></el-input>
        </div>
        <div style="margin-bottom:20px">
            <span style="margin-left:57px;">评级预测结果：</span>
            <el-input v-model="input3" placeholder="请输入内容"></el-input>
        </div>
    </div>
</template>
<style>
.block {
    margin-bottom: 20px;
}
.el-input {
    width: 180px !important;
}
</style>
<script>
export default {
    data() {
        return {
            value1: ['周'],
            date1:new Date(2019,6,12),
            value: ["中国平安 (601318)"],
            input1:"89.9%",
            input2:"85.0%",
            input3:"持有",
            options: [
                {
                    value: "浦发银行 (600000)",
                    label: "浦发银行 (600000)"
                },
                {
                    value: "民生银行 (600016)",
                    label: "民生银行 (600016)"
                },
                {
                    value: "宝钢股份 (600019)",
                    label: "宝钢股份 (600019)"
                },
                {
                    value: "中国石化 (600028)",
                    label: "中国石化 (600028)"
                },
                {
                    value: "上汽集团 (600104)",
                    label: "上汽集团 (600104)"
                },
                {
                    value: "中国平安 (601318)",
                    label: "中国平安 (601318)"
                },
                {
                    value: "中国中铁 (601390)",
                    label: "中国中铁 (601390)"
                }
            ],
            options1: [
                {
                    value: "周",
                    label: "周"
                },
                {
                    value: "月",
                    label: "月"
                },
                {
                    value: "季度",
                    label: "季度"
                },
                {
                    value: "半年",
                    label: "半年"
                },
                {
                    value: "1年",
                    label: "1年"
                },
                {
                    value: "2年",
                    label: "2年"
                }
            ]
        };
    },
    methods: {
        handleChange() {}
    }
};
</script>