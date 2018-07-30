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
            当前位置：项目管理 - 新房 - 新增
        </div>
        <div class='company'>
            <div class='title'>
                <div class='text'>申请项目信息</div>
                <el-button type="primary" class='title-btn-left'>提交</el-button>
                <el-button type="primary" class='title-btn' @click='cancel'>关闭</el-button>
            </div>
            <div class='content'>
                <el-form :model="sumbitForm">
                    <div>

                    </div>
                    <div class='input-title'>项目编号：</div>
                    <el-form-item class='input'>
                        <el-input class='input' v-model="sumbitForm.project_name" auto-complete="off" placeholder="请输入项目编号"></el-input>
                    </el-form-item>
                    <div class='input-title'>项目名称：</div>
                    <el-form-item class='input'>
                        <el-input class='input' v-model="sumbitForm.project_name" auto-complete="off" placeholder="请输入项目名称"></el-input>
                    </el-form-item>
                    <el-form-item label="项目地址" class='address'>
                        <!-- 下拉组建 -->
                        <city-selector :province.sync="sumbitForm.province" :city.sync="sumbitForm.city" :district.sync="sumbitForm.district" @changeDistrict="changeDistrict" />
                        <el-input class='input-address' v-model="sumbitForm.absolute_address" auto-complete="off" placeholder="请输入具体地址"></el-input>
                    </el-form-item>
                    <div class='input-title'>物业类型：</div>
                    <el-form-item>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox label="别墅"></el-checkbox>
                            <el-checkbox label="车位"></el-checkbox>
                            <el-checkbox label="住宅"></el-checkbox>
                            <el-checkbox label="商铺"></el-checkbox>
                            <el-checkbox label="写字楼"></el-checkbox>
                            <el-checkbox label="微墅"></el-checkbox>
                            <el-checkbox label="商墅"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <div class='input-title'>开发商：</div>
                    <el-form-item class='input'>
                        <el-input class='input' v-model="sumbitForm.project_name" auto-complete="off" placeholder="请输入开发商"></el-input>
                    </el-form-item>
                    <el-form-item label="与项目关系" prop="company_relation" class='select'>
                        <el-radio-group v-model="sumbitForm.company_relation">
                            <el-radio label="开发商"></el-radio>
                            <el-radio label="代理公司"></el-radio>
                            <el-radio label="分销公司"></el-radio>
                            <el-radio label="渠道"></el-radio>
                            <el-radio label="中介"></el-radio>
                            <el-radio label="其他"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <div class='pos-relative'>
                        <el-button class='new_house_btn' type="primary">选择</el-button>
                    </div>
                    <div class='input-title'>所属单位：</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.developer_name" auto-complete="off" placeholder="请选择所属单位"></el-input>
                    </el-form-item>
                    <div class='input-title'>结佣单位：</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" placeholder="请选择结佣单位"></el-input>
                    </el-form-item><br>
                    <div class='input-title'>联系电话：</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" placeholder="请选择联系电话"></el-input>
                    </el-form-item>
                    <div class='input-title'>项目负责人：</div>
                    <el-form-item class='input-186px'>
                        <el-input v-model="sumbitForm.developer_name" auto-complete="off" placeholder="请选择项目负责人"></el-input>
                    </el-form-item>
                    <div class='remake'>备注:</div>
                    <el-form-item>
                        <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" type="textarea" class='textarea'></el-input>
                    </el-form-item>

                    <!-- <div class='pos-relative'>类型：新房转新房
                          <el-button class='new_house_btn' type="primary">选择</el-button>
                    </div>
                    <div class='input-title'>原所属单位：</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" placeholder="请输入原所属单位"></el-input>
                    </el-form-item>
                    <div class='input-title'>所属单位：</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.developer_name" auto-complete="off" placeholder="请选择所属单位"></el-input>
                    </el-form-item><br>
                    <div class='input-title'>原结佣单位：</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.project_hold_phone" auto-complete="off" placeholder="请输入原结佣单位"></el-input>
                    </el-form-item>
                    <div class='input-title'>结佣单位：</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" placeholder="请选择结佣单位"></el-input>
                    </el-form-item>
                    <div class='input-title'>原联系电话：</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.project_hold_phone" auto-complete="off" placeholder="请输入原联系电话"></el-input>
                    </el-form-item>
                    <div class='input-title'>联系电话：</div>
                    <el-form-item class='input'>
                        <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" placeholder="请选择联系电话"></el-input>
                    </el-form-item>
                    <div class='input-title mr-14px'>开始时间：</div>
                    <el-form-item class='input'>
                            <el-date-picker v-model="value1" type="date" class='input' placeholder="请选择开始日期"></el-date-picker>
                    </el-form-item>
                    <div class='input-title'>结束时间：</div>
                    <el-form-item class='input'>
                        <el-date-picker v-model="value1" type="date" class='input' placeholder="请选择结束日期"></el-date-picker>
                    </el-form-item>
                      <div class='input-title'>原项目负责人：</div>
                    <el-form-item class='input-186px'>
                        <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" placeholder="请输入原项目负责人"></el-input>
                    </el-form-item>
                    <div class='input-title'>项目负责人：</div>
                    <el-form-item class='input-186px'>
                        <el-input v-model="sumbitForm.developer_name" auto-complete="off" placeholder="请选择项目负责人"></el-input>
                    </el-form-item><br>
                    <div class='remake'>备注:</div>
                    <el-form-item>
                        <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" type="textarea" class='textarea'></el-input>
                    </el-form-item> -->

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
                        <el-table-column label="操作" align='center' width="160px">
                            <template slot-scope="scope">
                                <el-button type="text">查看</el-button>
                                <el-button type="text">删除</el-button>
                            </template>
                        </el-table-column>
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
