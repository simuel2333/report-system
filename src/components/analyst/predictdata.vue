<template>
    <div class="container">
        <div class="search">
            <el-input v-model="search" style="width:200px;" placeholder="请输入内容"></el-input>
            <el-button type="primary" icon="el-icon-search" @click="searchFilter()">搜索</el-button>
        </div>
        
        <el-table
            :data="tableData.slice(start,end)"
            style="margin:auto;width:90%"
            :row-class-name="tableRowClassName"
            :default-sort = "{prop: 'acc', order: 'descending'}"
        >
            <el-table-column prop="name" label="公司"></el-table-column>
            <el-table-column prop="date" label="预测时间段"></el-table-column>
            <el-table-column prop="acc" label="模型正确率" sortable></el-table-column>
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
        },
        searchFilter() {
            this.tableData = this.tableData.filter(data => !this.search || data.name.toLowerCase().includes(this.search.toLowerCase()))
        }
    },
    data() {
        const item1 = {
            name: "工商银行",
            date: "2019.3.1~2019.9.30",
            acc: 0.9,
        };

        const item2 = {
            name: "贵州茅台",
            date: "2019.1.1~2019.6.30",
            acc: 0.8,
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
.search {
    width: 100%;
    text-align: center;
}
</style>
