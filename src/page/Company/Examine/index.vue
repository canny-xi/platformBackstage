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
            当前位置：公司管理 - 公司列表 - 审核信息
        </div>
        <div class='title'>
            <div class='text'>审核信息</div>
            <el-button type="primary" class='title-btn-left-1' v-if='this.operationType==1'>审核通过</el-button>
            <el-button type="primary" class='title-btn-left' v-if='this.operationType==1'>拒绝</el-button>
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
                    <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>

                    <!-- <div style='color:#aaa'>（查看是否有企业公章）</div>
                    <el-button class='add-btn'>点击跟换</el-button>
                    <div class='idcard-img'>
                        <span class='id-card-up'>
                            <img class='img' src='../../../assets/images/idCard.png' />
                        </span>
                    </div> -->
                </el-form-item>
                <el-form-item label="身份证照片">

                    <el-upload class='idcard-img-1' action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-upload class='idcard-img' action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>

                    <!-- <span style='color:#aaa'>（证件照片为正反两面）</span>
                    <el-button class='add-btn'>点击更换</el-button>
                    <div class='idcard-img'>
                        <span class='id-card-up'>
                            <img class='img' src='../../../assets/images/1.jpg' />
                        </span>
                        <span class='id-card-dowm'>
                            <img class='img' src='../../../assets/images/Document_2@2x.png' />
                        </span>
                    </div> -->
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
        <div class='examine-info'>
            <div>审核信息</div>
            <el-form :model="sh">
                <div class='input-title'>审核人员：</div>
                <el-form-item class='input'>
                    <el-input class='input' v-model="sh.sh_name" auto-complete="off"></el-input>
                </el-form-item>
                <div class='input-title'>审核通过时间：</div>
                <el-form-item class='input'>
                    <el-input class='input' v-model="sh.sh_time" auto-complete="off"></el-input>
                </el-form-item>
                <div class='input-title'>拒绝类型：</div>
                <el-form-item class='input'>
                    <el-input class='input' v-model="sh.stats" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="备注" class='remake'>
                    <el-input v-model="sh.sh_remake" auto-complete="off" type="textarea"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class='accout-info'>
            <div>帐号信息</div>
            <el-table :data="accountsForm" class='accout_table'>
                <el-table-column prop="" label="序号" align='center' width="70px">
                    <template slot-scope="scope">{{getIndex(scope)}}</template>
                </el-table-column>
                <el-table-column label="帐号" property="accout" align='center'></el-table-column>
                <el-table-column label="管理员" property="name" align='center'></el-table-column>
                <el-table-column label="电话号码" property="tel" align='center'></el-table-column>
                <el-table-column label="状态" align='center'>
                    <template slot-scope='scope'>
                        {{accoutStatus(scope.row.status)}}
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import CitySelector from "../../../components/CitySelector";
export default {
  data() {
    return {
      operationType: 0, // 2查看  1审核
      sumbitForm: {},
      sh: {
        sh_name: "张三",
        sh_time: "2018-2-25",
        stats: "资料不全",
        sh_remake: "备注信息"
      },
      form: [
        {
          file_name: "学习资料",
          create_name: "张三",
          create_time: "2018-7-28"
        }
      ],
      accountsForm: [
        {
          accout: "88888888",
          name: "李四",
          tel: "13666666666",
          status: "1"
        }
      ]
    };
  },
  mounted() {
       this.operationType = this.$route.params.operationType; 
  },
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
    },
    getIndex(row) {
      let index = row.$index + 1;
      return index;
    },
    accoutStatus(row) {
      if (row == 1) {
        return "使用中";
      } else {
        return "已停用";
      }
    }
  },
  components: {
    CitySelector: CitySelector
  }
};
</script>
