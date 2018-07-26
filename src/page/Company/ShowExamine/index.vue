<style lang="less" scoped src='./index.less'>
</style>
<style lang="less">
.showExamine {
  .el-input__inner {
    height: 30px;
    line-height: 30px;
  }
  .el-form-item {
    margin-bottom: 8px;
    margin-right: 10%;
  }
}
</style>

<template>
    <div class='showExamine'>
        <div class='title'>
            <div class='text'>查看</div>
            <el-button type="primary" class='title-btn-left'>提交</el-button>
            <el-button type="primary" class='title-btn' @click='cancel'>关闭</el-button>
        </div>
        <div class='content'>
            <el-form :model="sumbitForm">
                <div class='input-title'>公司全称：</div>
                <el-form-item class='input'>
                    <el-input class='input' v-model="sumbitForm.project_name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="公司类型">
                    <el-radio-group v-model="sumbitForm.company_relation">
                        <el-radio label="开发商"></el-radio>
                        <el-radio label="代理公司"></el-radio>
                        <el-radio label="分销公司"></el-radio>
                        <el-radio label="渠道"></el-radio>
                        <el-radio label="中介"></el-radio>
                        <el-radio label="其他"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="项目地址："  class='address'>
                    <!-- 下拉组建 -->
                    <city-selector :province.sync="sumbitForm.province" :city.sync="sumbitForm.city" :district.sync="sumbitForm.district" @changeDistrict="changeDistrict" />
                <el-input class='input-address' v-model="sumbitForm.absolute_address" auto-complete="off"></el-input>
                </el-form-item>
                  <div class='input-title'>公司法人：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.project_hold_name" auto-complete="off"></el-input>
                </el-form-item>
                <div class='input-title'>统一社会信用代码：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.developer_name" auto-complete="off"></el-input>
                </el-form-item>
               
                <div class='input-title'>法人电话：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.project_hold_phone" auto-complete="off"></el-input>
                </el-form-item>
                <div class='input-title'>身份证号码：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.project_hold_name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="工商营业执照">
                    <div>（查看是否有企业公章）</div>
                    <el-button>点击查看</el-button>
                </el-form-item>
                <el-form-item label="其他证明资料" class='input'>
                    <el-button>下载</el-button>
                </el-form-item>
                <el-form-item label="身份证照片">
                    <div>（证件照片为正反两面）</div>
                    <el-button>点击查看</el-button>
                </el-form-item>
                <div class='input-title'>联系电话：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.project_hold_name" auto-complete="off"></el-input>
                </el-form-item>
                  <div class='input-title'>负责人：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.project_hold_phone" auto-complete="off"></el-input>
                </el-form-item><br>
                <div class='input-title'>申请时间：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.project_hold_name" auto-complete="off"></el-input>
                </el-form-item><br>
                <el-form-item label="备注" class='input'>
                    <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" type="textarea"></el-input>
                </el-form-item>

            </el-form>
        </div>
    </div>
</template>
<script>
import CitySelector from "../../../components/CitySelector";
export default {
  data() {
    return {
      sumbitForm: {}
    };
  },
  mounted() {},
  methods: {
    cancel() {
      this.$router.go(-1);
    },
    changeDistrict(address) {
      var myGeo = new BMap.Geocoder();
      myGeo.getPoint(address, point => {
        if (point) {
          this.map.centerAndZoom(point, 16);
        }
      });
    }
  },
  components: {
    CitySelector: CitySelector
  }
};
</script>
