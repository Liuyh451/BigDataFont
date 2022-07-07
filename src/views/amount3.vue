<template>
<div ><el-row :gutter="10">
          <el-col :span="6" style="width: 420px"
            ><div class="grid-content bg-purple">
              <el-card shadow="always">
                <ve-pie :data="类别2" :settings="pieSet"></ve-pie>
              </el-card></div
          ></el-col>
          <el-col :span="6" style="  margin-left: 20px;" 
            ><div class="grid-content bg-purple">
              <el-card shadow="always">
                <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
              </el-card></div
          ></el-col>
        </el-row></div>
</template>
<script>
export default {
  data() {
    this.chartSettings = {}
    return {
        chartData: {
        columns: ['算法', 'precision', 'recall', 'F1score'],
        rows: [
          { '算法': '随机森林', 'precision': 0.616205, 'recall': 0.616205, 'F1score': 0.617055 },
          { '算法': '贝叶斯', 'precision': 0.862727, 'recall': 0.862727, 'F1score': 0.8862486 },
          { '算法': 'TFID', 'precision': 0.828583, 'recall': 0.823583, 'F1score': 0.823421 },
          { '算法': '逻辑回归', 'precision': 0.868428, 'recall': 0.868428, 'F1score': 0.868267 }
        ]
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
  created(){
    var 类2={}
                类2.columns=["number", "authentication"],
                类2.rows=[]
                let categorySecond={"categorySecond": {"World": 32200,"Sports": 29300,"Business": 31090,"Sci/Tech": 28900}}
                var c2=categorySecond.categorySecond
                var namearray=Object.keys(c2);
                console.log(namearray);
                var valarray=namearray.map(function(i){return c2[i]})
                console.log(valarray);
                var p=-1;
                for (var i=0;i<namearray.length;i++){
                    // if (i>=3) continue;
                    if (valarray[i]===0) continue;
                    p++;
                    类2.rows[p]={};
                    类2.rows[p].number=namearray[i];
                    类2.rows[p].authentication=valarray[i];
                }
               this.类别2=类2;


  }
}
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;

}
.el-col {
  border-radius: 4px;
  width: 500px;
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
</style>