<style lang="less" scoped src='./index.less'>
</style>
<template>
    <div class='addCompany'>
        <div class='title'>
            <div>新建公司</div>
            <el-button type="primary" class='title-btn-left'>提交</el-button>
            <el-button type="primary" class='title-btn' @click='cancel'>关闭</el-button>
        </div>
        <div class='content'>
            <el-form :model="sumbitForm">
                <el-form-item label="公司全称" class='input'>
                    <el-input class='input' v-model="sumbitForm.project_name" auto-complete="off" placeholder="请输入公司全称"></el-input>
                </el-form-item>
                 <el-form-item label="公司类型" prop="company_relation" class='select'>
                    <el-radio-group v-model="sumbitForm.company_relation">
                        <el-radio label="开发商"></el-radio>
                        <el-radio label="代理公司"></el-radio>
                        <el-radio label="分销公司"></el-radio>
                        <el-radio label="渠道"></el-radio>
                        <el-radio label="中介"></el-radio>
                        <el-radio label="其他"></el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="项目地址">
                    <!-- 下拉组建 -->
                    <city-selector :province.sync="sumbitForm.province" :city.sync="sumbitForm.city" :district.sync="sumbitForm.district" @changeDistrict="changeDistrict" />
                </el-form-item>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.absolute_address" auto-complete="off" placeholder="请输入具体地址"></el-input>
                </el-form-item>

                <el-form-item label="统一社会信用代码" class='input'>
                    <el-input v-model="sumbitForm.developer_name" auto-complete="off" placeholder="请输入开发商名称"></el-input>
                </el-form-item>
                <el-form-item label="工商营业执照">
                    <div>支持.jpg .jpeg .bmp .gif .png格式照片，大小不超过2M</div>
                    <el-button>添加附件</el-button>
                </el-form-item>
                <el-form-item label="公司法人" class='input'>
                    <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" placeholder="请输入项目负责人姓名"></el-input>
                </el-form-item>
                <el-form-item label="法人电话" class='input'>
                    <el-input v-model="sumbitForm.project_hold_phone" auto-complete="off" placeholder="请输入联系电话"></el-input>
                </el-form-item>
                <el-form-item label="身份证号码" class='input'>
                    <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" placeholder="请输入项目负责人姓名"></el-input>
                </el-form-item>
                <el-form-item label="身份证照片">
                    <div>身份证上传正面，反面各一张。支持.jpg .jpeg .bmp .gif .png格式照片，大小不超过2M</div>
                    <el-button>添加附件</el-button>
                </el-form-item>

                <el-form-item label="负责人" class='input'>
                    <el-input v-model="sumbitForm.project_hold_phone" auto-complete="off" placeholder="请输入联系电话"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" class='input'>
                    <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" placeholder="请输入项目负责人姓名"></el-input>
                </el-form-item>
                <el-form-item label="其他证明资料" class='input'>
                    <el-button>添加附件</el-button>
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
