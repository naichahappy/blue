<template>
    <div>
        <el-container>
            <el-aside>
                <div>侧边栏导航</div>
            </el-aside>

            <el-container direction="vertical">
                <el-header>
                    <div><i class="el-icon-loading"></i></div>
                </el-header>

                <el-main>
                    <div>
                        内容区域
                        <el-button type="primary" icon="el-icon-search">搜索</el-button>
                        <el-button type="danger">危险按钮</el-button>
                        <el-button type="danger" plain>朴素按钮</el-button>
                        <el-button type="danger" round>椭圆按钮</el-button>
                        <el-button type="primary" icon="el-icon-search" circle style="height:70px;width:70px">圆角</el-button>
                        <br/>
                        <el-radio-group v-model="radio"><!--分组就只用绑定一个radio-->
                            <el-radio label="1" disabled>男</el-radio><!--disabled禁用-->
                            <el-radio label="2">女</el-radio>
                        </el-radio-group>
                        <el-radio-group v-model="radio1" size="medium"><!--size="medium"迷你-->
                            <el-radio-button label="1">按钮1</el-radio-button>
                            <el-radio-button label="2">按钮2</el-radio-button>
                        </el-radio-group>
                        <el-radio-group v-model="radio2"  @change="setradio">
                            <el-radio label="1" border>重庆</el-radio>
                            <el-radio label="2">广东</el-radio>
                        </el-radio-group>
                        <div>{{rtext}}</div>
                        
                    </div>
                </el-main>
            </el-container>
        </el-container>

        <!-- <el-container direction="vertical">
            <el-header>
                <div style="background-color:skyblue">
                    头部
                    <i class="el-icon-arrow-left"></i>
                    <i class="el-icon-picture"></i>
                    <i class="el-icon-download"></i>
                    <i class="el-icon-arrow-right"></i>
                </div>
            </el-header>

            <el-container>
                <el-aside>
                    <div style="background-color:yellow">
                        侧边栏
                        <el-button type="primary" icon="el-icon-search">搜索</el-button>
                        <el-button type="danger">危险按钮</el-button>
                    </div>
                </el-aside>
                <el-main>
                    <div style="background-color:pink">
                        主要内容
                        <el-row>
                            <el-col span="4" style="background-color:yellow">oneleft</el-col>
                            <el-col span="20">oneright</el-col>
                        </el-row>
                        <el-row>
                            <el-col xs="4" style="background-color:yellow">响应式</el-col>
                            <el-col xs="20">响应式</el-col>
                            <el-col xs="20">响应式</el-col>
                            <el-col xs="20">响应式</el-col>
                        </el-row>
                    </div>
                    
                </el-main>
            </el-container>

            <el-footer>
                <div style="background-color:red">底部</div>
            </el-footer>
        </el-container> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            radio:'1',
            radio1:'1',
            radio2:'1',
            rtext:''
        }
    },
    methods:{
        setradio(){
            if(this.radio2==1){
                this.rtext="选择第一个"
            }else{
                this.rtext="选择第二个"
            }
        }
    }
}
</script>
