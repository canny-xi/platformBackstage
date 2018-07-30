<template>
    <!-- 审核不通过-->
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="" label="序号" align='center' width="70px">
            <template slot-scope="scope">{{getIndex(scope)}}</template>
        </el-table-column>
        <el-table-column prop="name" label="项目名称" align='center'></el-table-column>
        <el-table-column prop="type" label="区域" align='center'></el-table-column>
        <el-table-column prop="city" label="地址" align='center'></el-table-column>
        <el-table-column prop="quyu" label="开发商" align='center'></el-table-column>
        <el-table-column prop="peo_name" label="与项目关系" align='center'></el-table-column>
        <el-table-column prop="tel" label="所属单位" align='center'></el-table-column>
        <el-table-column prop="xx" label="申请人" align='center' width="140px"></el-table-column>
        <el-table-column prop="xxname" label="审核人员" align='center'></el-table-column>
        <el-table-column prop="a" label="审核时间" align='center'></el-table-column>
        <el-table-column label="操作" align='center' width="130px">
            <template slot-scope="scope">
                <el-button type="text" >查看</el-button>
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
    examine(row) {
      this.$emit("examine", row);
    },
  }
};
</script>
<style lang="less" scoped>
</style>


