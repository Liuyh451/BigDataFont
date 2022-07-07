<template>
<div class="search">
  <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getUserList">
  <el-button slot="append" icon="el-icon-search" @click="searchitem" ></el-button>
</el-input>
   <el-card shadow="always" style="margin-top:20px">
      <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="title"
      label="新闻标题"
      width="200">
    </el-table-column>
    <el-table-column
      prop="reallabel"
      label="真实标签"
      width="150">
    </el-table-column>
    <el-table-column
      prop="preditlabel"
      label="预测标签">
    </el-table-column>
    <el-table-column
      prop="algorithm"
      label="算法">
    </el-table-column>
      <el-table-column
      prop="precision"
      label="准确率">
    </el-table-column>
  </el-table>
    </el-card></div>
 
</template>

<script>
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
methods: {
      searchitem(){ 
        this.tableData=[{
          title: '丁真担任理塘旅游大使',
          reallabel: '社会新闻',
          preditlabel: '社会新闻',
          algorithm:'随机森林',
          precision:'93%'
        }, {
          title: '丁真担任理塘旅游大使',
          reallabel: '社会新闻',
          preditlabel: '社会新闻',
          algorithm:'决策树',
          precision:'88%'
        }, {
          title: '丁真担任理塘旅游大使',
          reallabel: '社会新闻',
          preditlabel: '社会新闻',
          algorithm:'SVM',
          precision:'95%'
        }, {
          title: '丁真担任理塘旅游大使',
          reallabel: '社会新闻',
          preditlabel: '社会新闻',
          algorithm:'多层感知机',
          precision:'97%'
        },
        {
          title: '丁真担任理塘旅游大使',
          reallabel: '社会新闻',
          preditlabel: '社会新闻',
          algorithm:'逻辑回归',
          precision:'91%'
        }
        ]
          axios.post("http://82.157.236.220:8000/data/News/", {Title:22,type:33})
            .then(res1=>{
              if (res1.data.code==200){
                   this.tableData=res1.data.data
                    console.log(this.tableData);
                }
                else{
                    this.$notify.error({
                        title: '商品查询失败',
                        message: '请刷新页面',
                        offset: 70
                    });
                }

            })
        },
}

}
</script>

<style>
    .search {
      width: 900px;

    }

</style>