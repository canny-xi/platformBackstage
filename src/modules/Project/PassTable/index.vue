<template>
  <!-- 审核通过-->
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="" label="序号" align='center' width="60px">
      <template slot-scope="scope">{{getIndex(scope)}}</template>
    </el-table-column>
    <el-table-column prop="num" label="项目编号" align='center'></el-table-column>
    <el-table-column prop="name" label="项目名称" align='center'></el-table-column>
    <el-table-column prop="type" label="区域" align='center'></el-table-column>
    <el-table-column prop="city" label="地址" align='center'></el-table-column>
    <el-table-column prop="quyu" label="开发商" align='center'></el-table-column>
    <el-table-column prop="tel" label="与项目关系" align='center' width="90px"></el-table-column>
    <el-table-column prop="tel" label="所属单位" align='center'></el-table-column>
    <el-table-column prop="c" label="审核人" align='center'></el-table-column>
    <el-table-column prop="a" label="审核时间" align='center'></el-table-column>
    <el-table-column prop="b" label="开始时间" align='center'></el-table-column>
    <el-table-column prop="a" label="结束时间" align='center'></el-table-column>
    <el-table-column prop="source" label="认证状态" align='center'>
      <template slot-scope="scope">{{scopeState (scope.row.source)}}</template>
    </el-table-column>
    <el-table-column label="当前状态" align='center' width="90px">
      <template slot-scope="scope">
        {{state(scope.row.state)}}
      </template>
    </el-table-column>
    <el-table-column label="操作" align='center' width="270px">
      <template slot-scope="scope">
        <el-button type="text" @click='examine(scope.row,2)'>查看</el-button>
        <el-button type="text" @click='examine(scope.row,3)'>修改</el-button>
        <el-button type="text">认证</el-button>
        <el-button type="text" @click='examine(scope.row,4)'>转新房</el-button>
        <el-button type="text">转二手房</el-button>
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
        return "已认证";
      } else if (row == 2) {
        return "未认证";
      }
    },
    state(row) {
      if (row == 1) {
        return "已转新房";
      } else if (row == 2) {
        return "已转二手房";
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


