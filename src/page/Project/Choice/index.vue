<style lang="less" scoped src='./index.less'>
</style>
<style lang="less">
.choice {
  .el-button--primary {
    background: #6f7e95;
    border: none;
    border-radius: 20px;
    padding: 8px 20px;
  }
  .el-button--primary:hover {
    background: #929eaf;
  }
  .el-input__inner {
    height: 32px;
    line-height: 32px;
  }
  .el-table th {
    background-color: #cad2dd;
    padding: 4px 0;
    color: #000;
    font-weight: 500;
  }
  .el-table td {
    padding: 0;
  }
}
</style>

<template>
    <div class='choice'>
        <div>
            <div class='choice-title'>
                <span class='title-text'>选择</span>
                <el-button class='btn' type="primary" @click='cancel'>关闭</el-button>
            </div>
            <div class='content'>
                <el-form>
                    <el-form-item class='address'>
                        <!-- 下拉组建 -->
                        <city-selector :province.sync="sumbitForm.province" :city.sync="sumbitForm.city" :district.sync="sumbitForm.district" @changeDistrict="changeDistrict" />
                        <el-input v-model="searchObj.search" class='query' placeholder="可按公司名称/公司编号"></el-input>
                        <el-button type="primary" class='search'>查询</el-button>
                    </el-form-item>
                </el-form>
                <el-table :data="form">
                    <el-table-column prop="" label="序号" align='center' width="70px">
                        <template slot-scope="scope">{{getIndex(scope)}}</template>
                    </el-table-column>
                    <el-table-column prop="name" label="公司名称" align='center'></el-table-column>
                    <el-table-column prop="type" label="公司编号" align='center' width="90px"></el-table-column>
                    <el-table-column prop="city" label="省份" align='center'></el-table-column>
                    <el-table-column prop="quyu" label="城市" align='center'></el-table-column>
                    <el-table-column prop="peo_name" label="区域" align='center'></el-table-column>
                    <el-table-column prop="tel" label="具体地址" align='center' width="200px"></el-table-column>
                    <el-table-column prop="xx" label="营业执照号" align='center' width="100px"></el-table-column>
                    <el-table-column prop="xxname" label="负责人" align='center'></el-table-column>
                    <el-table-column prop="a" label="联系方式" align='center' width="110px"></el-table-column>
                    <el-table-column label="操作" align='center'>
                        <template slot-scope="scope">
                            <el-button type="text">选择</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
import CitySelector from "../../../components/CitySelector";
export default {
  data() {
    return {
      sumbitForm: {},
      form: [
        {
          name: "云算科技",
          type: "88888888",
          city: "四川",
          quyu: "成都市",
          peo_name: "金牛区",
          tel: "泉水人家",
          xx: "ASD23423D",
          xxname: "小李",
          a: "13600000000"
        }
      ],
      searchObj: {
        search: ""
      },
      operationType: 0 // 0 新增  1审核
    };
  },
  mounted() {
    this.operationType = this.$route.params.operationType;
  },
  methods: {
    getIndex(row) {
      let index = row.$index + 1;
      return index;
    },
    changeDistrict() {},
    cancel() {
      this.$router.push({
        name: "addProject",
        params: this.$route.params
      });
    }
  },
  components: {
    CitySelector: CitySelector
  }
};
</script>
