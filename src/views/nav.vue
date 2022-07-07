<template>
<div class="主页">
    <div>
        <div class="空菜单栏"></div>
        <div class="顶部菜单栏">
    <img src="../assets/logo.png" width="200px" height="70px">
    <!-- <span class="right"><img src="../assets/logo.png" width="200px" height="70px"></span> -->
        </div>
    </div>
        <div class="导航栏">
            <el-menu
            :default-active="this.$route.path"  
            router>
                <el-submenu index="1" >
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item index="/amount1">训练集量为1200</el-menu-item>
                    <el-menu-item index="/amount2">训练集量为12000</el-menu-item>
                    <el-menu-item index="/amount3">训练集量为120000</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航二</span>
                    </template>
                    <el-menu-item index="/search">详情</el-menu-item>
                    
                </el-submenu>
            </el-menu>
        </div>  
        <router-view class='menu-right'/>
    </div>

</template>
<style scoped>
    .主页{
        width: 100%;
        margin: auto;
    }
    .导航栏{
        width: 18%;
        float: left;
        display:inline;
    }
    .menu-right{
        margin-left:250px;
    }
    .左侧菜单{
        /* float:left; */
        width: 15%;
        display:inline;
    }
    .展开菜单{
        text-align: center;
        z-index: 50000;
    }
    .right{
        position:absolute;
        right: 100px;     
        z-index: 50000;
    }
    .顶部菜单栏 {
        width: 100%;
        margin-left: 10px;
        z-index: 50000;
        position: fixed;
        height: 50px;
        top: 0;
    }
    .空菜单栏 {
        height: 50px;
        top: 0;
    }

</style>


