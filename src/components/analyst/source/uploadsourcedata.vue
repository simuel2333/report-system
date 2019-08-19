<template>
    <div class="container">
        <h2 style="text-align:center">股票数据上传</h2>

        <div style="margin-bottom:20px">
            <span style="margin-left:70px;">数据源类型：</span>
            <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
        </div>
        <div style="margin-bottom:20px">
            <span style="margin-left:86px;">股票代码：</span>
            <el-cascader v-model="value1" :options="options1" @change="handleChange"></el-cascader>
        </div>
        <div style="display:inline,width:200px;margin-left:100px">
            <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                round
            >
                数据集：<el-cascader v-model="value1" :options="options2" @change="handleChange"></el-cascader>
            </el-upload>
            <el-button size="small" style="" type="primary">上传</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fileList: [
                {
                    name: "601318_QUOTATION.csv"
                },
                {
                    name: "601318_FINANCE.csv"
                }
            ],

            value: [],
            value1:[],
            value2:[],
            options: [
                {
                    value: "QUOTATION",
                    label: "历史行情数据"
                },
                {
                    value: "FINANCE",
                    label: "主要财务指标"
                },
                {
                    value: "PROFIT",
                    label: "盈利能力指标"
                },
                {
                    value: "PAY_DEBT",
                    label: "偿债能力指标"
                },
                {
                    value: "GROWTH",
                    label: "成长能力指标"
                },
                {
                    value: "OPERATION",
                    label: "营运能力指标"
                },
                {
                    value: "STOCK_NEWS",
                    label: "个股新闻数据"
                },
                {
                    value: "STOCK_COMMENTS",
                    label: "股票评论数据"
                },
                {
                    value: "LABELED_COMMENTS",
                    label: "已标注情感的评论数据"
                },
                {
                    value: "RATING",
                    label: "个股评级数据"
                },
                {
                    value: "BASIC",
                    label: "公司基本信息"
                }
            ],
            options1:[
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
            options2:[
                {
                    value:"中国平安 (601318)",
                    label:"中国平安601318.csv"
                }
            ]
        };
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(
                `当前限制选择 3 个文件，本次选择了 ${
                    files.length
                } 个文件，共选择了 ${files.length + fileList.length} 个文件`
            );
        },
        beforeRemove() {
        },
        handleChange(){

        }
    }
};
</script>

<style>
.container {
    width: 100%;
}
.upload-demo {
    display: inline;
}
</style>
