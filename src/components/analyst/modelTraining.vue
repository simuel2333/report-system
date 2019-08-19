<template>
    <div>
        <h1>模型训练</h1>
        <div style="margin-bottom:20px">
            <span style="margin-left:140px;">股票代码：</span>
            <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
        </div>
        <div style="margin-bottom:20px">
            <span style="margin-left:90px;">请选择日期范围：</span>
            <el-cascader v-model="value1" :options="options1" @change="handleChange"></el-cascader>
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
            value1: [],
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
            ],
            options1:[
                {
                    value:"周",
                    label:"周"
                },{
                    value:"月",
                    label:"月"
                },{
                    value:"季度",
                    label:"季度"
                },{
                    value:"半年",
                    label:"半年"
                },{
                    value:"1年",
                    label:"1年"
                },{
                    value:"2年",
                    label:"2年"
                }
            ]
        };
    },
    methods: {
        handleChange(){}
    }
};
</script>