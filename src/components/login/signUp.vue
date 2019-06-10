<template>
    <div class="container">
        <div class="navbar-wrapper"></div>
        <div class="site-content">
            <div class="login-container center">
                <header class="caption">
                    <div style="width:80px;height:10px;display:inline-block"></div>
                    {{login}}
                </header>
                <el-form
                    :model="ruleForm"
                    status-icon
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                    <el-form-item label="帐号" prop="account">
                        <el-input v-model="ruleForm.account"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            type="primary"
                            @click="submitForm('ruleForm')"
                            style="width:100%;margin-bottom: 15px"
                        >注册</el-button>
                        <el-button
                            @click="resetForm('ruleForm')"
                            style="width:100%;margin-left: 0px;margin-bottom: 15px"
                        >重置</el-button>
                        <el-button
                            @click="backToSignIn('ruleForm')"
                            style="width:100%;margin-left: 0px;"
                        >已有帐号？登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <footer class="footer"></footer>
    </div>
</template>

<script>
export default {
    data() {
        var checkAccount = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("账户不能为空"));
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                if (this.ruleForm.checkPass !== "") {
                    this.$refs.ruleForm.validateField("checkPass");
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                pass: "",
                account: "",
                checkPass: ""
            },
            rules: {
                pass: [{ validator: validatePass, trigger: "blur" }],
                checkPass: [{ validator: validatePass2, trigger: "blur" }],
                account: [{ validator: checkAccount, trigger: "blur" }]
            },
            login: "注册新用户"
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert("submit!");
                } else {
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        backToSignIn(formName) {
            this.$router.push("/login");
        }
    }
};
</script>

<style scoped>
@import url(../../css/public.css);
.caption {
    margin-bottom: 1em;
    color: #999b9d;
    font-size: 25px;
    text-align: center;
}
.login-container {
    width: 400px;
    -webkit-transform: translateX(-60%) translateY(-50%);
}
</style>
