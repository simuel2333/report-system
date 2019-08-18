<template>
    <div class="container">
        <h1>报告审核</h1>
        <el-table
            :data="tableData"
            style="margin:auto;width:90%"
            :row-class-name="tableRowClassName"
        >
            <el-table-column prop="file" width="350" label="报告文件"></el-table-column>
            <el-table-column prop="type" label="报告类型"></el-table-column>
            <el-table-column prop="date" label="报告提交日期"></el-table-column>
            <el-table-column prop="status" label="审核状态"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">通过</el-button>
                    <el-button type="text" size="small">不通过</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="suggest" label="意见"></el-table-column>
        </el-table>
        <el-pagination
            style="text-align:right;width:90%;margin-top:20px"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            layout="total, prev, pager, next, jumper"
            :total="tableData.length"
        ></el-pagination>
    </div>
</template>

<script>
export default {
    methods: {},
    data() {
        let mockArray = [{
          file:"中国平安601318_2018-10-01_basic_report.docx",
          type:"基本信息报告",
          date:"2018/10/1",
          status:"待审核",
          suggest:""  
        },{
          file:"中国平安601318_2018-10-05_basic_report.docx",
          type:"基本信息报告",
          date:"2018/10/5",
          status:"待审核",
          suggest:""  
        },{
          file:"中国平安601318_2019-08-01_rating_report.docx",
          type:"评级研究报告",
          date:"2019/8/1",
          status:"待审核",
          suggest:""  
        },{
          file:"中国平安601318_2018-10-01_basic_report.docx",
          type:"评级研究报告",
          date:"2018/10/1",
          status:"待审核",
          suggest:""  
        },{
          file:"中国平安601318_2019-07-23_rating_report.docx",
          type:"评级研究报告",
          date:"2018/7/23",
          status:"待审核",
          suggest:""  
        },{
          file:"中国平安601318_2018-08-04_basic_report.docx",
          type:"评级研究报告",
          date:"2018/8/4",
          status:"待审核",
          suggest:""  
        },{
          file:"中国平安601318_2018-3-5_basic_report.docx",
          type:"评级研究报告",
          date:"2018/3/5",
          status:"待审核",
          suggest:""  
        },{
          file:"中国平安601318_2018-3-9_basic_report.docx",
          type:"评级研究报告",
          date:"2018/3/9",
          status:"待审核",
          suggest:""  
        },{
          file:"中国平安601318_2018-06-01_basic_report.docx",
          type:"评级研究报告",
          date:"2018/06/1",
          status:"待审核",
          suggest:""  
        }]
        return {
            tableData: mockArray,
            search: "",
            currentPage: 1,
            pageSize: 10
        };
    }
};
</script>

<style>
.container {
    width: 100%;
}
.el-table .warning-row {
    background: oldlace;
    text-align: center;
}
</style>
