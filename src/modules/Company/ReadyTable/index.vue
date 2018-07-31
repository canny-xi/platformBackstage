<template>
  <!-- 待审核-->
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="" label="序号" align='center' width="70px">
      <template slot-scope="scope">{{getIndex(scope)}}</template>
    </el-table-column>
    <el-table-column prop="name" label="公司名称" align='center' width="90px"></el-table-column>
    <el-table-column prop="type" label="公司类型" align='center' width="140px"></el-table-column>
    <el-table-column prop="city" label="城市" align='center'></el-table-column>
    <el-table-column prop="quyu" label="区域" align='center'></el-table-column>
    <el-table-column prop="peo_name" label="项目负责人" align='center' width="150px"></el-table-column>
    <el-table-column prop="tel" label="联系方式" align='center' width="150px"></el-table-column>
    <el-table-column prop="xx" label="统一社会信用代码" align='center' width="200px"></el-table-column>
    <el-table-column prop="source" label="来源" align='center' width="80px">
      <template slot-scope="scope">{{scopeState (scope.row.source)}}</template>
    </el-table-column>
    <el-table-column prop="time" label="申请时间" align='center' width="140px"></el-table-column>
    <el-table-column label="操作" align='center' width="130px">
      <template slot-scope="scope">
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
    }
  }
};
</script>
<style lang="less" scoped>
</style>


