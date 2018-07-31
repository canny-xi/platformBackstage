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
  .el-dialog__body {
    padding: 0px 20px;
  }
  .el-dialog__header {
    padding: 10px 20px 0 20px;
    background: #929eaf;
  }
  .el-dialog__title {
    color: #fefefe;
    position: relative;
    top: -4px;
  }
  .el-dialog__headerbtn .el-dialog__close {
    color: #fefefe;
    position: relative;
    top: -10px;
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
                <el-button type="primary" class='title-btn-left-1' v-if='this.operationType==1'>审核通过</el-button>
                <el-button type="primary" class='title-btn-left-2' v-if='this.operationType==1' @click='refuse'>拒绝</el-button>
                <el-button type="primary" class='title-btn-left' v-if='this.operationType==0||this.operationType==3'>提交</el-button>
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
                        <el-checkbox-group>
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
                    <div v-if='this.operationType==0||this.operationType==2'>
                        <div class='pos-relative' v-if='this.operationType==0||this.operationType==1'>
                            <el-button class='new_house_btn' type="primary" @click='choice(0)'>选择</el-button>
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
                    </div>
                    <div v-if='this.operationType==1||this.operationType==3||this.operationType==4'>
                        <div class='pos-relative'>类型：新房转新房
                            <el-button class='new_house_btn-1' type="primary" @click='choice(1)'>选择</el-button>
                        </div>
                        <div class='input-title'>原项目负责人：</div>
                        <el-form-item class='input-186px'>
                            <el-input v-model="sumbitForm.project_hold_name" auto-complete="off"></el-input>
                        </el-form-item>
                        <div class='input-title'>项目负责人：</div>
                        <el-form-item class='input-186px'>
                            <el-input v-model="sumbitForm.developer_name" auto-complete="off" placeholder="请选择项目负责人"></el-input>
                        </el-form-item><br>
                        <div class='input-title'>原所属单位：</div>
                        <el-form-item class='input'>
                            <el-input v-model="sumbitForm.project_hold_name" auto-complete="off"></el-input>
                        </el-form-item>
                        <div class='input-title'>所属单位：</div>
                        <el-form-item class='input'>
                            <el-input v-model="sumbitForm.developer_name" auto-complete="off" placeholder="请选择所属单位"></el-input>
                        </el-form-item><br>
                        <div class='input-title'>原结佣单位：</div>
                        <el-form-item class='input'>
                            <el-input v-model="sumbitForm.project_hold_phone" auto-complete="off"></el-input>
                        </el-form-item>
                        <div class='input-title'>结佣单位：</div>
                        <el-form-item class='input'>
                            <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" placeholder="请选择结佣单位"></el-input>
                        </el-form-item>
                        <div class='input-title'>原联系电话：</div>
                        <el-form-item class='input'>
                            <el-input v-model="sumbitForm.project_hold_phone" auto-complete="off"></el-input>
                        </el-form-item>
                        <div class='input-title'>联系电话：</div>
                        <el-form-item class='input'>
                            <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" placeholder="请选择联系电话"></el-input>
                        </el-form-item>
                        <div class='input-title mr-14px'>开始时间：</div>
                        <el-form-item class='input'>
                            <el-date-picker type="date" class='input' placeholder="请选择开始日期"></el-date-picker>
                        </el-form-item>

                        <div class='remake'>备注:</div>
                        <el-form-item>
                            <el-input v-model="sumbitForm.project_hold_name" auto-complete="off" type="textarea" class='textarea'></el-input>
                        </el-form-item>

                    </div>
                    <div class='examine-info' v-if='this.operationType==2'>
                        <div>审核信息</div>
                        <el-form :model="sh">
                            <div class='input-title'>审核人员：</div>
                            <el-form-item class='input'>
                                <el-input class='input' v-model="sh.sh_name" auto-complete="off"></el-input>
                            </el-form-item>
                            <div class='input-title'>审核时间：</div>
                            <el-form-item class='input'>
                                <el-input class='input' v-model="sh.sh_time" auto-complete="off"></el-input>
                            </el-form-item><br>
                            <div class='input-title'>审核状态：</div>
                            <el-form-item class='input'>
                                <el-input class='input' v-model="sh.stats" auto-complete="off"></el-input>
                            </el-form-item>
                            <div class='input-title'>联系电话：</div>
                            <el-form-item class='input'>
                                <el-input class='input' v-model="sh.xx" auto-complete="off"></el-input>
                            </el-form-item>
                            <div class='input-title'>项目负责人：</div>
                            <el-form-item class='input-width'>
                                <el-input v-model="sh.aa" auto-complete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="备注" class='remake'>
                                <el-input v-model="sh.sh_remake" auto-complete="off" type="textarea"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div v-if='this.operationType==2||this.operationType==3||this.operationType==4'>
                        <div class='upload_title'>
                            <div class='input-title_bold'>账号信息</div>
                            <el-button class='add-btn'>新增</el-button>
                        </div>
                        <el-table :data="accoutForm">
                            <el-table-column label="序号" align='center' width="70px">
                                <template slot-scope="scope">{{getIndex(scope)}}</template>
                            </el-table-column>
                            <el-table-column property="a" label="账号" align='center'></el-table-column>
                            <el-table-column property="b" label="管理员" align='center'></el-table-column>
                            <el-table-column property="c" label="电话号码" align='center'></el-table-column>
                            <el-table-column label="状态" align='center'>
                                <template slot-scope="scope">{{state(scope.row.state)}}</template>
                            </el-table-column>
                            <el-table-column label="操作" align='center'>
                                <template slot-scope="scope">
                                    <el-button type="text">修改</el-button>
                                    <el-button type="text">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
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
                        <el-table-column label="操作" align='center'>
                            <template slot-scope="scope">
                                <el-button type="text">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>

                    <div v-if='this.operationType!=0'>
                        <div class='history_title'>项目历史</div>
                        <el-table :data="historyForm">
                            <el-table-column prop="" label="序号" align='center' width="70px">
                                <template slot-scope="scope">{{getIndex(scope)}}</template>
                            </el-table-column>
                            <el-table-column property="a" label="所属单位名称" align='center'></el-table-column>
                            <el-table-column property="b" label="与项目关系" align='center'></el-table-column>
                            <el-table-column property="c" label="开始时间" align='center'></el-table-column>
                            <el-table-column property="d" label="结束时间" align='center'></el-table-column>
                            <el-table-column property="e" label="项目类型" align='center'></el-table-column>
                            <el-table-column property="f" label="负责人" align='center'></el-table-column>
                            <el-table-column property="g" label="联系方式" align='center'></el-table-column>
                        </el-table>
                    </div>

                </el-form>
            </div>

            <el-dialog title="拒绝" :visible.sync="refuseInfo" class='refuse_dialog' @close="cancelRefuseInfo">
                <el-form>
                    <el-form-item label="审核不通过原因">
                        <el-input type="textarea" />
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="cancelRefuseInfo">取 消</el-button>
                    <el-button type="primary">确 定</el-button>
                </div>
            </el-dialog>

        </div>
    </div>

</template>
<script>
import CitySelector from "../../../components/CitySelector";
export default {
  data() {
    return {
      historyForm: [
        {
          a: "云算科技",
          b: "开发商",
          c: "2018-2-23",
          d: "2.18-9-12",
          e: "新房",
          f: "张三",
          g: "18111111111"
        }
      ],
      sh: {
        sh_name: "张三",
        sh_time: "2018-2-25",
        stats: "资料不全",
        sh_remake: "备注信息",
        aa: "李四",
        xx: "18111111111"
      },
      accoutForm: [
        {
          a: "88888888",
          b: "张三",
          c: "18111111111",
          state: "1"
        }
      ],
      refuseInfo: false,
      sumbitForm: {},
      operationType: 0, // 0 新增  1审核  2查看   3修改 4转新房
      form: [
        {
          file_name: "学习资料",
          create_name: "张三",
          create_time: "2018-7-28"
        }
      ]
    };
  },
  mounted() {
    this.operationType = this.$route.params.operationType;
    console.log(this.operationType);
  },
  methods: {
    getIndex(row) {
      let index = row.$index + 1;
      return index;
    },
    choice(type) {
      console.log(type);
      this.$router.push({
        name: "choice",
        params: {
          operationType: type
        }
      });
    },
    state(row) {
      if (row == 1) {
        return "已停用";
      } else if (row == 2) {
        return "使用中";
      }
    },
    cancelRefuseInfo() {
      this.refuseInfo = false;
    },
    refuse() {
      this.refuseInfo = true;
    },
    fileUpload() {},
    cancel() {
      this.$router.push({ name: "newHouse" });
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
