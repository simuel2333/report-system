<template>
    <div class="container">
        <h1>中国平安601318评级研究报告</h1>

        <h2>一、每日情感指标</h2>
        <el-table border :data="tableData">
            <el-table-column prop="date" label="date"></el-table-column>
            <el-table-column prop="neg_num" label="neg_num"></el-table-column>
            <el-table-column prop="pos_num" label="pos_num"></el-table-column>
            <el-table-column prop="bi" label="bi"></el-table-column>
            <el-table-column prop="dis" label="dis"></el-table-column>
        </el-table>

        <el-row :gutter="20">
            <el-col :span="8">
                <ve-histogram :data="chartData" :settings="chartSettings" :extend="extend"></ve-histogram>
            </el-col>
            <el-col :span="8">
                <ve-line :data="chartData1"></ve-line>
            </el-col>
            <el-col :span="8">
                <ve-line :data="chartData2"></ve-line>
            </el-col>
        </el-row>
        <h2>二、未来综合评级预测</h2>
        <p>当前投资评级预测模型预测未来一周中国平安（601318）综合评级结果为“持有”。</p>
        <h2>三、投资建议</h2>
        <p>PE未来预测：2019年10.37, 2020年8.85, 2021年7.78。</p>
        <p>EPS未来预测：2019年8.42, 2020年8.42, 2021年10.91。</p>
        <p>综合前面数据进行分析，给予“持有”建议。</p>
        <h2>四、风险提示</h2>
        <p>投资有风险，此前预测数据均为人工智能学习结果，正确率有待提高，请谨慎投资。</p>
    </div>
</template>

<script>
export default {
    data() {
        this.axios
            .get("http://115.154.242.164:8000/day_senti/")
            .then(response => {
                let data = response.data.slice(2061, 2068);
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
        this.chartSettings = {
            metrics: ["看跌评论数", "看涨评论数"],
            dimension: ["日期"]
        };
        this.extend = {
            series: {
                label: { show: true, position: "top" }
            }
        };
        return {
            chartData1: {},
            chartData2: {},
            chartData: {},
            tableData: [
                {
                    id: 2093,
                    date: "2018-10-01",
                    neg_num: 5.0,
                    pos_num: 4.0,
                    bi: -0.18,
                    dis: 0.89,
                    company: 1
                },
                {
                    id: 2094,
                    date: "2018-10-02",
                    neg_num: 6.0,
                    pos_num: 2.0,
                    bi: -0.85,
                    dis: 0.5,
                    company: 1
                },
                {
                    id: 2095,
                    date: "2018-10-03",
                    neg_num: 4.0,
                    pos_num: 4.0,
                    bi: 0.0,
                    dis: 1.0,
                    company: 1
                },
                {
                    id: 2096,
                    date: "2018-10-04",
                    neg_num: 9.0,
                    pos_num: 10.0,
                    bi: 0.1,
                    dis: 0.95,
                    company: 1
                },
                {
                    id: 2097,
                    date: "2018-10-05",
                    neg_num: 8.0,
                    pos_num: 3.0,
                    bi: -0.81,
                    dis: 0.55,
                    company: 1
                },
                {
                    id: 2098,
                    date: "2018-10-06",
                    neg_num: 12.0,
                    pos_num: 5.0,
                    bi: -0.77,
                    dis: 0.59,
                    company: 1
                },
                {
                    id: 2099,
                    date: "2018-10-07",
                    neg_num: 13.0,
                    pos_num: 2.0,
                    bi: -1.54,
                    dis: 0.27,
                    company: 1
                }
            ]
        };
    }
};
</script>

<style>
.container {
    width: 100%;
}
h1 {
    text-align: center;
    font-size: 2em;
    color: #0066ff;
}
h2 {
    color: #0099ff;
}
</style>
