<template>
  <el-container>
    <el-header>
        
</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          style="height: 540px"
          :default-active="this.$route.path"
          router
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
              <el-menu-item index="">训练集量为1000</el-menu-item>
              <el-menu-item index="1-2">训练集量为1000</el-menu-item>
              <el-menu-item index="1-2">训练集量为1000</el-menu-item>     
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
            </template>
            <el-menu-item index="/search">单独标签</el-menu-item>
              <el-menu-item index="/nav">nav</el-menu-item>  
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-row :gutter="5">
          <el-col :span="6" style="width: 410px"
            ><div class="grid-content bg-purple">
              <el-card shadow="always">
                <ve-pie :data="类别2" :settings="pieSet"></ve-pie>
              </el-card></div
          ></el-col>
          <el-col :span="6" 
            ><div class="grid-content bg-purple">
              <el-card shadow="always">
                <ve-line :data="chartData" :settings="chartSettings"></ve-line>
              </el-card></div
          ></el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    this.chartSettings = {};
    return {
      chartData: {
        columns: ["算法", "precision", "recall", "F1score"],
        rows: [
          { 算法: "随机森林", precision: 0.88, recall: 0.75, F1score: 0.82 },
          { 算法: "决策树", precision: 0.8, recall: 0.74, F1score: 0.76 },
          { 算法: "SVM", precision: 0.95, recall: 0.89, F1score: 0.96 },
          { 算法: "多层感知机", precision: 0.84, recall: 0.83, F1score: 0.89 },
          { 算法: "逻辑回归", precision: 0.77, recall: 0.86, F1score: 0.78 },
        ],
      },
      pieSet: {
        roseType: "radius",
        labelMap: {
          number: "数字",
          authentication: "认证",
        },
      },
      pieData: {
        columns: ["number", "authentication"],
        rows: [
          { number: "22", authentication: 1393 },
          { number: "32", authentication: 3530 },
          { number: "31", authentication: 2923 },
          { number: "14", authentication: 1723 },
          { number: "15", authentication: 3792 },
          { number: "16", authentication: 4593 },
        ],
      },
    };
  },
  created() {
    var 类2 = {};
    (类2.columns = ["number", "authentication"]), (类2.rows = []);
    let categorySecond = {
      categorySecond: {
        政治新闻: 6542,
        经济新闻: 8523,
        法律新闻: 3512,
        军事新闻: 7434,
        科技新闻: 3568,
        文教新闻: 2562,
        体育新闻: 4562,
        社会新闻: 5587,
      },
    };
    var c2 = categorySecond.categorySecond;
    var namearray = Object.keys(c2);
    console.log(namearray);
    var valarray = namearray.map(function (i) {
      return c2[i];
    });
    console.log(valarray);
    var p = -1;
    for (var i = 0; i < namearray.length; i++) {
      // if (i>=3) continue;
      if (valarray[i] === 0) continue;
      p++;
      类2.rows[p] = {};
      类2.rows[p].number = namearray[i];
      类2.rows[p].authentication = valarray[i];
    }
    this.类别2 = 类2;
  },
};
</script>



<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
  width: 550px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-header,.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  text-align: center;
  line-height: 500px;
}

.el-main {
  text-align: center;
  line-height: 500px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
