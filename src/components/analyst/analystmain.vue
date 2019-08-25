<template>
    <el-container style="border: 1px solid #eee;height:calc(90vh);margin-top: 30px;">
        <el-aside  width="270px" style="background-color: rgb(238, 241, 246);font-size:23px">
            <el-menu>
                <el-menu-item index="1">
                    <i class="el-icon-s-data"></i>
                    <span slot="title" @click="viewData()">查看数据</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-document"></i>源数据管理
                    </template>
                    <el-menu-item index="2-1" @click="forecastModel()">源数据查看</el-menu-item>
                    <el-menu-item index="2-2" @click="uploadsourcedata()">源数据上传</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-medal"></i>投资评级预测
                    </template>
                    <el-menu-item index="3-1" @click="viewPredictData()">数据查看</el-menu-item>
                    <el-submenu index="3-2">
                        <template slot="title">预测模型训练</template>
                        <el-menu-item index="3-2-1" @click="viewModelTraining()">模型训练</el-menu-item>
                        <el-menu-item index="3-2-2" @click="TrainingOutcome()">训练结果</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3-3" @click="investForecast()">投资评级预测</el-menu-item>
                    <el-menu-item index="3-4" @click="investOutcome()">投资评级结果</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-orange"></i>情感分析
                    </template>
                        <el-menu-item index="4-1" @click="emotionModelTraining()">情感模型训练</el-menu-item>
                        <el-menu-item index="4-1" @click="emotionModelTraining()">投资者每日情感文件</el-menu-item>
                        <el-menu-item index="4-2" @click="emotionForest()">投资者每日情感指标</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-setting"></i>报告生成模块
                    </template>
                    <el-menu-item index="5-1" @click="genReport()">生成报告</el-menu-item>
                    <el-menu-item index="5-2" @click="companyReport()">企业基本信息报告</el-menu-item>
                    <el-menu-item index="5-3" @click="ratingReport()">评级研究报告</el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">
                        <i class="el-icon-user"></i>个人中心
                    </template>
                    <el-menu-item index="6-1" @click="forecastModel()">个人信息</el-menu-item>
                    <el-menu-item index="6-2" @click="myRatingForecast()">我的评级预测</el-menu-item>
                    <el-submenu index="6-2">
                        <template slot="title">我的情感分析</template>
                        <el-menu-item index="6-2-1" @click="viewModelTraining()">分析模型</el-menu-item>
                        <el-menu-item index="6-2-2" @click="emotionIndex()">每日情感指标</el-menu-item>
                        <el-menu-item index="6-2-3" @click="TrainingOutcome()">情感变化曲线</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="6-4" @click="myRatingForecast()">我的报告</el-menu-item>
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title">
                        <i class="el-icon-user"></i>报告审核模块
                    </template>
                    <el-submenu index="7-1">
                        <template slot="title">报告查看</template>
                        <el-menu-item index="7-1-1" @click="viewModelTraining()">未审核报告</el-menu-item>
                        <el-menu-item index="7-1-2" @click="emotionIndex()">已审核报告</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="7-2" @click="reportCheck()">报告审核</el-menu-item>
                    <el-menu-item index="7-3" @click="myRatingForecast()">报告发布</el-menu-item>
                </el-submenu> 
            </el-menu>
        </el-aside>
        <el-container>
            <router-view></router-view>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        viewData() {
            this.$router.push("/analyst/data");
        },
        viewPredictData() {
            this.$router.push("/analyst/predictdata");
        },
        viewModelTraining() {
            this.$router.push("/analyst/modelTraining");
        },
        trainingOutcome() {
            this.$router.push("/analyst/trainingOutcome");
        },
        investForecast() {
            this.$router.push("/analyst/investForecast");
        },
        forecastModel() {
            this.$router.push("/analyst/forecastModel");
        },
        myRatingForecast() {
            this.$router.push("/analyst/myRatingForecast");
        },
        emotionModelTraining() {
            this.$router.push("/analyst/emotionModelTraining");
        },
        emotionForest() {
            this.$router.push("/analyst/emotionForest");
        },
        genReport() {
            this.$router.push("/analyst/genReport");
        },
        companyReport() {
            this.$router.push("/analyst/companyReport");
        },
        ratingReport() {
            this.$router.push("/analyst/ratingReport");
        },
        uploadsourcedata() {
            this.$router.push("/analyst/uploadsourcedata");
        },
        reportCheck(){
            this.$router.push("/analyst/reportCheck");
        },
        emotionIndex(){
            this.$router.push("/analyst/emotionIndex");
        },
        investOutcome(){
            this.$router.push("/analyst/investOutcome");
        }
    }
};
</script>

<style scoped>
.el-aside {
    color: #333;
}

</style>
