<template>
    <div class="container">
        <h2 style="text-align:center">股票数据上传</h2>
        <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
            round
        >
            <el-button size="small" type="primary" round>点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传csv文件</div>
            <el-button size="small" type="success" round>爬虫抓取</el-button>
        </el-upload>
        <div style="margin-bottom:20px">
            <span style="margin-left:70px;">数据源类型：</span>
            <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
        </div>
        <div style="margin-bottom:20px">
            <span style="margin-left:86px;">股票代码：</span>
            <el-cascader v-model="value1" :options="options" @change="handleChange"></el-cascader>
        </div>
        <div style="margin-bottom:20px">
            <span style="margin-left:20px;">数据集(file、手动)：</span>
            <el-cascader v-model="value2" :options="options" @change="handleChange"></el-cascader>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fileList: [
                {
                    name: "601318_QUOTATION.csv",
                },
                {
                    name: "601318_FINANCE.csv",

                }
            ],

            value: [],
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
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`);
        }
    }
};
</script>

<style>
.container {
    width: 100%;
}
.upload-demo {
    margin-left: 50px;
    margin-bottom: 20px;
}
</style>
