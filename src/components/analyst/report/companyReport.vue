<template>
    <div class="container">
        <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())).slice(start,end)"
            style="margin:auto;width:90%"
            :row-class-name="tableRowClassName"
        >
            <el-table-column prop="no" label="股票代码"></el-table-column>
            <el-table-column prop="name" label="股票名称"></el-table-column>
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column align="center">
                <template slot="header" slot-scope="scope">
                    <el-input v-model="search" placeholder="输入股票名称搜索" clearable />
                    {{scope.row}}
                </template>
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="success"
                        @click="handleEdit(scope.$index, scope.row)"
                    >查看</el-button>
                    <el-button
                        size="mini"
                        type="primary"
                        @click="handleDelete(scope.$index, scope.row)"
                    >运行</el-button>
                </template>
            </el-table-column>
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
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        tableRowClassName({ rowIndex }) {
            if (rowIndex % 2 === 1) {
                return "warning-row";
            }
            return "";
        },
        handleCurrentChange(val) {
            this.currentPage = val;
        }
    },
    data() {
        const item1 = {
            no: 601398,
            name: "工商银行",
            date: "2019.3.1~2019.9.30",
            calc: "",
            view: ""
        };

        const item2 = {
            no: 600519,
            name: "贵州茅台",
            date: "2019.1.1~2019.6.30",
            calc: "",
            view: ""
        };
        let mockArray = Array(10).fill(item1);
        mockArray = mockArray.concat(Array(10).fill(item2));
        return {
            tableData: mockArray,
            search: "",
            currentPage: 1,
            pageSize: 10,
        };
    },
    computed: {
        start: function() {
            return (this.currentPage - 1) * this.pageSize;
        },
        end: function() {
            return this.start + this.pageSize;
        }
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
