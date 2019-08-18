<template>
    <div>
        <h1>模型训练</h1>
        <div style="margin-bottom:20px">
            <span style="margin-left:140px;">股票代码：</span>
            <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
        </div>
        <div class="block">
            请选择日期范围:
            <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            ></el-date-picker>
        </div>
        <div style="margin-left:200px">
            <el-progress :percentage="20"></el-progress>
            <el-button type="primary">训练</el-button>
        </div>
         
    </div>
</template>
<style>
    .block{
        margin-bottom:20px;
    }
</style>
<script>
export default {
    data() {
        return {
            value1: [new Date(2018, 9, 1), new Date(2018, 9, 30)],
            value:[],
            options:[
                {
                    value:"浦发银行 (600000)",
                    label:"浦发银行 (600000)"
                },{
                    value:"民生银行 (600016)",
                    label:"民生银行 (600016)"
                },{
                    value:"宝钢股份 (600019)",
                    label:"宝钢股份 (600019)"
                },{
                    value:"中国石化 (600028)",
                    label:"中国石化 (600028)"
                },{
                    value:"上汽集团 (600104)",
                    label:"上汽集团 (600104)"
                },{
                    value:"中国平安 (601318)",
                    label:"中国平安 (601318)"
                },{
                    value:"中国中铁 (601390)",
                    label:"中国中铁 (601390)"
                }
            ]
        };
    },
    methods: {}
};
</script>