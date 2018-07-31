<style lang="less" scoped src='./index.less'>
</style>
<style lang="less">
.addCompanyTable {
  .el-button--primary {
    background: #6f7e95;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
  }
  .el-button--primary:hover {
    background: #929eaf;
  }
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
    <div class='addCompanyTable'>
        <div class='title-info'>
            当前位置：公司管理 - 公司列表 - 新增
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

                    <el-form-item label="公司地址" class='address'>
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
                    <div class='input-title'>法人身份证号码:</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" placeholder="请输入身份证号码"></el-input>
                    </el-form-item>

                    <el-form-item label="工商营业执照">
                        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                        <!-- <div style='color:#aaa'>支持.jpg .jpeg .bmp .gif .png格式照片，大小不超过2M</div>
                        <el-button class='add-btn'>添加附件</el-button>
                        <div class='idcard-img'>
                            <span class='id-card-up'>
                                <img class='img' src='../../../assets/images/idCard.png' />
                            </span>
                        </div> -->
                    </el-form-item>

                    <el-form-item label="身份证照片" class='idcard'>

                        <el-upload class='idcard-img-1' action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-upload class='idcard-img' action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <!-- <div style='color:#aaa'>身份证上传正面，反面各一张。支持.jpg .jpeg .bmp .gif .png格式照片，大小不超过2M</div>
                        <el-button class='add-btn'>添加附件</el-button>
                        <div class='idcard-img'>
                            <span class='id-card-up'>
                                <img class='img' src='../../../assets/images/1.jpg' />
                            </span>
                            <span class='id-card-dowm'>
                                <img class='img' src='../../../assets/images/Document_2@2x.png' />
                            </span>
                        </div> -->
                    </el-form-item>
                    <div class='input-title'>负责人:</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.project_hold_phone" auto-complete="off" placeholder="请输入负责人"></el-input>
                    </el-form-item>
                    <div class='input-title'>联系电话:</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" placeholder="请输入联系电话"></el-input>
                    </el-form-item><br>
                    <div class='remake'>备注:</div>
                    <el-form-item>
                        <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" type="textarea" class='textarea'></el-input>
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
    </div>

</template>
<script>
import CitySelector from "../../../components/CitySelector";
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
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
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    fileUpload() {},
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
