<template>
    <div class="container">
        <h1>每日情感变化指标</h1>

        <el-table border :data="tableData">
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="no" label="股票代码"></el-table-column>
            <el-table-column prop="neg_num" label="看跌评论数"></el-table-column>
            <el-table-column prop="pos_num" label="看涨评论数"></el-table-column>
            <el-table-column prop="bi" label="看涨指数"></el-table-column>
            <el-table-column prop="dis" label="情感差异指数"></el-table-column>
        </el-table>


    </div>
</template>

<script>
export default {
    data() {
        this.axios
            .get(this.GLOBAL.ipAndPort+"/day_senti/")
            .then(response => {
                let data = response.data.slice(2061, 2068);
                for (let i = 0; i < data.length; i++) {
                    this.tableData.push({
                        "date": data[i].date,
                        "no":"601318",
                        "neg_num": data[i].neg_num,
                        "pos_num": data[i].pos_num,
                        "bi": data[i].bi,
                        "dis": data[i].dis,
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
            tableData: [

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
