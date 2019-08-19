<template>
    <div class="container">
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
        <ve-histogram :data="chartData" :settings="chartSettings" :extend="extend"></ve-histogram>
        <el-row :gutter="20">
            <el-col :span="12">
                <ve-line :data="chartData1"></ve-line>
            </el-col>
            <el-col :span="12">
                <ve-line :data="chartData2"></ve-line>
            </el-col>
        </el-row>
    </div>
</template>

<style>
.echarts {
    width: 100%;
    height: 100%;
}
.block{
    margin-left:100px;
}
</style>

<script>
import "echarts/lib/chart/line";
import "echarts/lib/component/polar";

export default {
    data() {
        this.chartSettings = {
            metrics: ["看跌评论数", "看涨评论数"],
            dimension: ["日期"]
        };
        this.extend = {
            series: {
                label: { show: true, position: "top" }
            }
        };
        this.axios
            .get(this.GLOBAL.ipAndPort+"/day_senti/")
            .then(response => {
                let data = response.data.slice(2061, 2091);
                this.chartData = {
                    columns: ["日期", "看跌评论数", "看涨评论数"],
                    rows: []
                };
                this.chartData1 = {
                    columns: ["日期", "看涨指数"],
                    rows: []
                };
                this.chartData2 = {
                    columns: ["日期", "情感差异指数"],
                    rows: []
                };
                for (let i = 0; i < data.length; i++) {
                    this.chartData.rows.push({
                        日期: data[i].date,
                        看跌评论数: data[i].neg_num,
                        看涨评论数: data[i].pos_num
                    });
                    this.chartData1.rows.push({
                        日期: data[i].date,
                        看涨指数: data[i].bi
                    });
                    this.chartData2.rows.push({
                        日期: data[i].date,
                        情感差异指数: data[i].dis
                    });
                }
            });
        return {
            chartData:{},
            chartData1:{},
            chartData2:{},
            value1: [new Date(2018, 9, 1), new Date(2018, 9, 30)],
        };
    }
};
</script>