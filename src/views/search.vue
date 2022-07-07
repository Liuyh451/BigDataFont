<template>
<div class="search">
  <!-- <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getUserList">
  <el-button slot="append" icon="el-icon-search" @click="searchitem" ></el-button>
</el-input> -->
   <el-card shadow="always" style="margin-top:0px">
      <el-table
    :data="tableData"
    @row-click="jump"
    stripe
    style="width: 100%">
    <el-table-column
      prop="algorithm"
      label="算法"
      width="150">
    </el-table-column>
    <el-table-column
      prop="nums"
      label="数据量"
      width="150">
    </el-table-column>
    <el-table-column
      prop="accuracy"
      label="准确率">
    </el-table-column>
    <el-table-column
      prop="recall"
      label="召回率">
    </el-table-column>
      <el-table-column
      prop="precision"
      label="精确率">
    </el-table-column>
    <el-table-column
      prop="f1_score"
      label="f1值">
    </el-table-column>
    <el-table-column
      prop="time"
      label="时间">
    </el-table-column>
  </el-table>
    </el-card></div>
 
</template>

<script>
import { Row } from 'element-ui';
const axios = require('axios');
export default {
  data(){
  return{
    tableData: [],
    // 获取列表的参数对象
    queryInfo:{
      //查询参数

    },
}},
methods:{
  jump(row){
    let nums=row.nums
    if(nums==1200){
      this.$router.push('/amount1')
    }
    else if(nums==12000){
      this.$router.push('/amount2')
    }
    else{
      this.$router.push('/amount3')
    }
  }
},
  created(){
    axios.get("http://82.157.236.220:8000/data/Result/")
            .then(res1=>{  
              this.tableData=res1.data
            })
  }

}
</script>

<style>
    .search {
      width: 900px;

    }

</style>