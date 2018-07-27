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
    <div class='showExamine'>
        <div class='title-info'>
            当前位置：公司管理 - 公司列表 - 待审核 - 审核信息
        </div>
        <div class='title'>
            <div class='text'>审核信息</div>
            <el-button type="primary" class='title-btn-left-1'>审核通过</el-button>
            <el-button type="primary" class='title-btn-left'>拒绝</el-button>
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
                <el-form-item label="项目地址：" class='address'>
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
                    <div style='color:#aaa'>（查看是否有企业公章）</div>
                    <el-button class='add-btn'>点击跟换</el-button>
                    <div class='idcard-img'>
                        <span class='id-card-up'>
                            <img class='img' src='../../../assets/images/idCard.png' />
                        </span>
                    </div>
                </el-form-item>
                <el-form-item label="身份证照片">
                    <span style='color:#aaa'>（证件照片为正反两面）</span>
                    <el-button class='add-btn'>点击更换</el-button>
                    <div class='idcard-img'>
                        <span class='id-card-up'>
                            <img class='img' src='../../../assets/images/1.jpg' />
                        </span>
                        <span class='id-card-dowm'>
                            <img class='img' src='../../../assets/images/Document_2@2x.png' />
                        </span>
                    </div>
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
                <el-form-item label="备注" class='remake'>
                    <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" type="textarea"></el-input>
                </el-form-item>
                <div class='upload_title'>
                    <div class='input-title_bold'>其他证明资料</div>
                    <el-upload class="uploadFile" :auto-upload="false" action="" :on-change="fileUpload">
                        <el-button class='add-btn' ref="uploadBtn" :show-file-list="false">点击上传</el-button>
                    </el-upload>
                </div>
                <el-table :data="form">
                    <el-table-column property="file_name" label="文件名称" align='center'></el-table-column>
                    <el-table-column label="附件" align='center'>
                        <template slot-scope='scope'>
                            <a target="_blank" :href="base+scope.row.url">查看附件</a>
                        </template>
                    </el-table-column>
                    <el-table-column property="create_name" label="上传人员" align='center'></el-table-column>
                    <el-table-column property="create_time" label="上传时间" align='center'></el-table-column>
                </el-table>
            </el-form>
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
          file_name: "学习资料",
          create_name: "张三",
          create_time: "2018-7-28"
        }
      ]
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
