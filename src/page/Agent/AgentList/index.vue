<style lang="less" scoped src='./index.less'>
</style>
<style lang="less">
.agentList {
  .el-dialog {
    width: 35%;
  }
  .el-input__inner {
    height: 35px;
    line-height: 35px;
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
  .el-form-item__content {
    line-height: 0;
  }
  .el-dialog__body {
    padding: 0px 30px;
  }
  .el-button--primary {
    background: #6f7e95;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
  }
  .el-button--primary:hover {
    background: #929eaf;
  }
  .el-button.el-button--default {
    background: #6f7e95;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    color: #fff;
  }
  .el-button.el-button--default:hover {
    background: #929eaf;
  }
  .el-dialog__header {
    background-color: #929eaf;
    padding: 6px 20px;
  }
  .el-dialog__title {
    color: #efefef;
    font-size: 16px;
  }
  .el-dialog__headerbtn .el-dialog__close {
    position: relative;
    top: -10px;
    color: #fff;
  }
}
</style>

<template>
    <div class='agentList'>
        <div class='title'>
            <div class='block-title'>
                <div class='block-textAdd-query'>
                    <div class='title-text'>当前位置：经纪人管理 - 经纪人列表</div>
                    <div class='query-all'>
                        <el-input v-model="searchObj.search" class='query' placeholder="可按公司名称/公司编号"></el-input>
                        <el-button type="primary">查询</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class='agent_table'>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="" label="序号" align='center' width="70px">
                    <template slot-scope="scope">{{getIndex(scope)}}</template>
                </el-table-column>
                <el-table-column prop="name" label="云算号" align='center'></el-table-column>
                <el-table-column prop="type" label="名称" align='center'></el-table-column>
                <el-table-column prop="city" label="联系方式" align='center' width="110px"></el-table-column>
                <el-table-column prop="quyu" label="角色" align='center'></el-table-column>
                <el-table-column prop="peo_name" label="所属公司" align='center'></el-table-column>
                <el-table-column prop="tel" label="所属部门" align='center'></el-table-column>
                <el-table-column prop="xx" label="所属门店" align='center'></el-table-column>
                <el-table-column prop="time" label="城市" align='center'></el-table-column>
                <el-table-column prop="source" label="区域" align='center'></el-table-column>
                <el-table-column prop="id" label="身份证认证" align='center'></el-table-column>
                <el-table-column prop="card" label="银行卡认证" align='center'></el-table-column>
                <el-table-column label="使用状态" align='center'>
                    <template slot-scope="scope">
                        {{status(scope.row.status)}}
                    </template>
                </el-table-column>
                <el-table-column label="操作" align='center' width="130px">
                    <template slot-scope="scope">
                        <el-button type="text" @click='see(scope.row)'>查看</el-button>
                        <el-button type="text" @click='stop(scope.row)'>禁用</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination v-if="tableData.length > 0" background class='page' layout="prev, pager, next" :page-size="pageSize" :current-page="searchObj.page" :total="total" @current-change="pageChange">
            </el-pagination>

        </div>
        <el-dialog title="禁用" :visible.sync="stopShow" class='dialog' @close="cancelStop">
            <el-form>
                <div>
                    <span class='dialog_info'>帐号：</span>
                    <span>名称：</span>
                </div>
                <el-form-item label="禁用类型" class='input'>
                    <el-select>
                        <el-option value='公司违规操作'>经纪人违规操作</el-option>
                        <el-option value='双方终止合同'>经纪人投诉过多</el-option>
                        <el-option value='其他'>其他</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="remark" class='textarea' type="textarea" />
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelStop">取 消</el-button>
                <el-button type="primary">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
  data() {
    return {
      stopShow: false,
      value: "",
      remark: "",
      searchObj: {
        search: "",
        tag_search: 0,
        page: 1
      },
      tipActiveIndex: 0,
      pageSize: 1,
      name: "",
      company_name: "",
      total: 1,
      tableData: [
        {
          id: 1,
          state_examine: 2,
          name: "8888888",
          type: "云算科技",
          city: "13888888888",
          quyu: "经纪人",
          peo_name: "云算公司",
          tel: "销售部",
          xx: "门店1",
          time: "眉山",
          source: "金牛区",
          id: "未认证",
          card: "未认证",
          status: 1
        },
        {
          id: 2,
          name: "66666666",
          type: "佳林集团",
          city: "13888888888",
          quyu: "对接人",
          peo_name: "佳林公司",
          tel: "运维部",
          xx: "门店2",
          time: "成都",
          source: "什么区",
          id: "已认证",
          card: "未认证",
          status: 2
        }
      ]
    };
  },
  mounted() {},
  methods: {
    see(row) {
      this.$router.push({ name: "seeAgentInfo" });
    },
    getIndex(row) {
      let index = row.$index + 1;
      return index;
    },
    async stop(row) {
      this.stopShow = true;
    },
    cancelStop() {
      this.stopShow = false;
    },
    pageChange(page) {
      this.searchObj.page = page;
    },
    clickTip(index) {
      this.searchObj.tag_search = index;
      // this.search();
    },
    status(row) {
      if (row == 1) {
        return "使用中";
      } else {
        return "已禁用";
      }
    }
  },
};
</script>
