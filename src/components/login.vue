<template>
    <div>
        <!-- <el-container>
            <el-main>
                <el-row>
                    <el-col>
                        <div>后台管理系统</div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        用户名:<el-input></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        密码:<el-input></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-button type="primary">登录</el-button>
                    </el-col>
                </el-row>
            </el-main>
        </el-container> -->

        <!-- Form表单
        <el-form></el-form>:表单标签
        :label-position=""：默认靠右边，还有top,left值
        label-width:设置宽度
        size:medium(中等)、small(小)、mini(迷你)
        clearable:可清空
        prefix-icon="el-icon-search":加图标在开头
        suffix-icon="el-icon-date":加图标在末尾
        type="textarea":文本域
        autosize:自适应内容高度
        :row=4:不会改变高度，超过4行会增加滚动条
        slot:prepend(前置元素，一般为标签或按钮)、append(后置元素)、prefix(放在input里面头部)、suffix(里面尾部)

        -->
        <div class="form">
        <el-form :label-position="labelPosition" label-width="80px">
            <el-form-item label="用户名:">
                <el-input size="small" clearable prefix-icon="el-icon-search"></el-input>
            </el-form-item>

            <el-form-item label="密码:">
                <el-input size="small" suffix-icon="el-icon-date" v-model="password"></el-input>
            </el-form-item>

            <el-form-item label="文本域">
                <el-input type="textarea" placeholder="请输入内容"></el-input>
            </el-form-item>

            <el-form-item label="网站地址">
                <el-input placeholder="请输入内容" style="width:300px" v-model="inp" @change="change">
                    <template slot="prepend">http://</template>
                    <template slot="append">.com</template>
                </el-input>
                {{inpstr}}<br/>
                {{inps}}
            </el-form-item>

            <el-form-item class="loginButton" :row=4 label-width="30px">
                <el-button type="primary" size="small" @click="login">登录</el-button>
            </el-form-item>

            <el-form-item>
                <el-input>
                    <el-select v-model="select" slot="prepend">
                        <el-option value="1" label="珍珠">取label值</el-option>
                        <el-option value="2" label="鲜芋"></el-option>
                        <el-option value="3" label="布丁"></el-option>
                        <el-option value="4" label="芋圆"></el-option>
                    </el-select>
                </el-input>
            </el-form-item>

            <div>
                <el-autocomplete
                class="inline-input"
                v-model="state1"
                :fetch-suggestions="query"
                placeholder="请输入内容"
                @select="handleSelect"
                ></el-autocomplete>
            </div>

            
        </el-form>
        </div>


    </div>
</template>
<script>
export default {
    data(){
        return{
            password:'',
            inp:'',
            inpstr:'',
            select:'',
            state1:'',
            shopdata:[
                { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
            ]
        }
    },
    methods:{
        change(){
            console.log(this.inpstr)
        },
        query(qstring,fn){
            let rstr=qstring?this.shopdata.filter(this.createFilter(qstring)):this.shopdata
            fn(rstr)
        },
        createFilter(fstr){
            return ((rst)=>{
                return (rst.value.toLowerCase().indexOf(fstr.toLowerCase())==0)
            })
        },
        handleSelect(value){
            console.log()
        },
        login(){
            let $this=this
            this.axios({
                url:"http://localhost:4000/login/cellphone",
                method:"get",
                params:{password:$this.password},
            }).then(function(rst){
                console.log(rst)
            })
        }
    },
    computed:{//自动计算模板输出变量
        inps:function(){//定义了一个自动计算属性inps
            return "http://"+this.inp+".com"
        }
    },
    watch:{//监听，属性的变化
        inp(newdata,olddata){
            this.inpstr="http://"+newdata+".com"
        }
    }
}
</script>

<style scoped>
.el-container{background-color:skyblue;}
.el-main{text-align: center;}
.el-input{width:200px;}
.el-row{margin-bottom: 10px;}
.form{width: 300px;margin: 0px auto;}
.loginButton{text-align: center;}
.el-select{width: 100px;}
</style>

