<template>
    <div>
        <el-button @click="show = !show">{{show?"隐藏":"显示"}}</el-button>
        <div style="display: flex; margin-top: 20px; height: 100px;">
            <transition name="el-fade-in-linear"><!--淡入淡出-->
                <div v-show="show" class="transition-box">.el-fade-in-linear</div>
            </transition>
            <transition name="el-fade-in">
                <div v-show="show" class="transition-box">.el-fade-in</div>
            </transition>
        </div>

        <div style="display: flex; margin-top: 20px; height: 100px;">
            <transition name="el-zoom-in-center"><!--两边向中间收缩-->
                <div v-show="show" class="transition-box">.el-zoom-in-center</div>
            </transition>
            <transition name="el-zoom-in-top"><!--向上收缩-->
                <div v-show="show" class="transition-box">.el-zoom-in-top</div>
            </transition>
            <transition name="el-zoom-in-bottom"><!--向下收缩-->
                <div v-show="show" class="transition-box">.el-zoom-in-bottom</div>
            </transition>
        </div>

        <div style="margin-top: 20px; height: 200px;">
            <el-collapse-transition><!--展开和收缩折叠-->
                <div v-show="show">
                    <div class="transition-box">el-collapse-transition</div>
                    <div class="transition-box">el-collapse-transition</div>
                </div>
            </el-collapse-transition>
        </div>

        {{str}}

        <el-row :gutter="50" type="flex" justify="center" align="top">
            <el-col :span="12" push="2"><div class="grid-content red">张三wqwqwqwqw</div></el-col>
            <el-col :span="12"><div class="grid-content green"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="18"><div class="grid-content blue"></div></el-col>
            <el-col :span="6"><div class="grid-content cyan"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="8"><div class="grid-content purple"></div></el-col>
            <el-col :span="10"><div class="grid-content black"></div></el-col>
            <el-col :span="6"><div class="grid-content orange"></div></el-col>
        </el-row>
        <el-tbutn></el-tbutn>

        <el-row>
          <el-col :xs="12" :sm="8" :md="6"><div>张三1</div></el-col>
          <el-col :xs="12" :sm="8" :md="6"><div>张三2</div></el-col>
          <el-col :xs="12" :sm="8" :md="6"><div>张三3</div></el-col>
          <el-col :xs="12" :sm="8" :md="6"><div>张三4</div></el-col>
        </el-row>
    </div>
</template>
<script>
import butn from "./butn"
export default {
    // data(){
    //     return{
    //         str:"欢迎来到element UI的学习"
    //     }
    // },
    data:()=>({
        str:"欢迎来到element UI的学习",
        show:true
    }),
    computed(){//页面初始化后

    },
    methods:{//自定义方法

    },
    mounted(){//创建和替换组件之后

    },
    created(){//页面加载完之后
        
    },
    components:{//注册组件
        elTbutn:butn
    },

}
</script>
<style>
.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
}
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .red{
    background:red;
  }
  .green {
    background: green;
  }
  .blue {
    background: skyblue;
  }
  .cyan {
    background: cyan;
  }
  .purple {
    background: purple;
  }
  .black {
    background: black;
  }
  .orange {
    background: orange;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

