<template>
    <el-container style="border: 1px solid #eee;height:calc(85vh);margin-top: 30px;">
        <el-aside width="284px" style="background-color: rgb(238, 241, 246)">
            <el-menu>
                <el-menu-item index="1">
                    <i class="el-icon-s-data"></i>
                    <span slot="title" @click="viewData()">查看数据</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-document"></i>查看报告
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                    </el-submenu>
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
                    <el-menu-item index="3-4" @click="forecastModel()">我的评级预测模型</el-menu-item>
                    <el-menu-item index="3-5" @click="myRatingForecast()">我的评级预测</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-orange"></i>情感分析
                    </template>
                        <el-menu-item index="4-1" @click="emotionModelTraining()">情感模型训练</el-menu-item>
                        <el-menu-item index="4-2" @click="emotionForest()">情感预测</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-setting"></i>报告生成
                    </template>
                    <el-menu-item index="5-1" @click="genReport()">投资评级预测</el-menu-item>
                    <el-menu-item index="5-2" @click="forecastModel()">我的评级预测模型</el-menu-item>
                    <el-menu-item index="5-3" @click="myRatingForecast()">我的评级预测</el-menu-item>
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
        }
    }
};
</script>

<style scoped>
.el-aside {
    color: #333;
}
</style>
