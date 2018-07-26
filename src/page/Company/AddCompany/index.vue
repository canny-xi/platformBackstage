<style lang="less" scoped src='./index.less'>
</style>
<style lang="less">
.addCompany {
  .el-button--primary {
    background: #6f7e95;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
  }
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
    <div class='addCompany'>
        <div class='title-info'>
            当前位置：公司管理 - 新增
        </div>
        <div class='company'>
            <div class='title'>
                <div class='text'>新建公司</div>
                <el-button type="primary" class='title-btn-left'>提交</el-button>
                <el-button type="primary" class='title-btn' @click='cancel'>关闭</el-button>
            </div>
            <div class='content'>
                <el-form :model="sumbitForm">
                    <div>

                    </div>
                    <div class='input-title'>公司全称:</div>
                    <el-form-item class='input'>
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

                    <el-form-item label="项目地址" class='ddress'>
                        <!-- 下拉组建 -->
                        <city-selector :province.sync="sumbitForm.province" :city.sync="sumbitForm.city" :district.sync="sumbitForm.district" @changeDistrict="changeDistrict" />
                        <el-input class='input-address' v-model="sumbitForm.absolute_address" auto-complete="off" placeholder="请输入具体地址"></el-input>
                    </el-form-item>
                    <div class='input-title'>公司法人:</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" placeholder="请输入公司法人"></el-input>
                    </el-form-item>
                    <div class='input-title'>统一社会信用代码:</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.developer_name" auto-complete="off" placeholder="请输入统一社会信用代码"></el-input>
                    </el-form-item><br>
                    <div class='input-title'>法人电话:</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.project_hold_phone" auto-complete="off" placeholder="请输入法人电话"></el-input>
                    </el-form-item>
                    <div class='input-title'>身份证号码:</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" placeholder="请输入身份证号码"></el-input>
                    </el-form-item>

                    <el-form-item label="工商营业执照">
                        <div style='color:#aaa'>支持.jpg .jpeg .bmp .gif .png格式照片，大小不超过2M</div>
                        <el-button class='add-btn'>添加附件</el-button>
                        <div class='idcard-img'>
                            <span class='id-card-up'>
                                <img class='img' src='../../../assets/images/idCard.png' />
                            </span>
                        </div>
                    </el-form-item>
                    <el-form-item label="身份证照片" class='idcard'>
                        <div style='color:#aaa'>身份证上传正面，反面各一张。支持.jpg .jpeg .bmp .gif .png格式照片，大小不超过2M</div>
                        <el-button class='add-btn'>添加附件</el-button>
                        <div class='idcard-img'>
                            <span class='id-card-up'>
                                <img class='img' src='../../../assets/images/1.jpg' />
                            </span>
                            <span class='id-card-dowm'>
                                <img class='img' src='../../../assets/images/Document_2@2x.png' />
                            </span>
                        </div>
                    </el-form-item>
                    <div class='input-title'>负责人:</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.project_hold_phone" auto-complete="off" placeholder="请输入负责人"></el-input>
                    </el-form-item>
                    <div class='input-title'>联系电话:</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" placeholder="请输入联系电话"></el-input>
                    </el-form-item><br>
                    <div class='input-title'>其他证明资料:</div>
                    <el-form-item class='input'>
                        <el-button class='add-btn absolute'>添加附件</el-button>
                    </el-form-item>
                    <div class='remake'>备注:</div>
                    <el-form-item>
                        <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" type="textarea" class='textarea'></el-input>
                    </el-form-item>
                </el-form>
            </div>
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
