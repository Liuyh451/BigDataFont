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
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
    </el-card></div>
 
</template>

<script>

export default {
  
  data(){
  return{
    tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
    // 获取列表的参数对象
    queryInfo:{
      //查询参数

    },
}},
methods: {
      searchitem(){ 
          axios.post("http://localhost:9090/product/search1",{name: this.searchName})
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