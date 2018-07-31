<template>
  <!-- 待审核-->
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="" label="序号" align='center' width="70px">
      <template slot-scope="scope">{{getIndex(scope)}}</template>
    </el-table-column>
    <el-table-column prop="name" label="项目编号" align='center' width="90px"></el-table-column>
    <el-table-column prop="type" label="项目名称" align='center' width="140px"></el-table-column>
    <el-table-column prop="city" label="区域" align='center'></el-table-column>
    <el-table-column prop="quyu" label="地址" align='center'></el-table-column>
    <el-table-column prop="peo_name" label="开发商" align='center' width="150px"></el-table-column>
    <el-table-column prop="tel" label="与项目关系" align='center' width="150px"></el-table-column>
    <el-table-column prop="xx" label="所属单位" align='center' width="200px"></el-table-column>
    <el-table-column prop="source" label="来源" align='center' width="80px">
      <template slot-scope="scope">{{scopeState (scope.row.source)}}</template>
    </el-table-column>
    <el-table-column prop="time" label="申请人" align='center' width="140px"></el-table-column>
    <el-table-column label="操作" align='center' width="130px">
      <template slot-scope="scope">
        <el-button type="text" @click='examine(scope.row,2)'>查看</el-button>
        <el-button type="text" @click='examine(scope.row,1)'>审核</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: ["tableData"],
  methods: {
    getIndex(row) {
      let index = row.$index + 1;
      return index;
    },
    scopeState(row) {
      if (row == 1) {
        return "内部申请";
      } else if (row == 2) {
        return "外部申请";
      }
    },
    examine(row,type) {
      this.$emit("examine", row,type);
    },
  }
};
</script>
<style lang="less" scoped>
</style>


