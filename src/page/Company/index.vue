<style lang="less" scoped src='./index.less'>
</style>
<style lang="less">
.company_project {
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
}
</style>

<template>
  <div class='company_project'>
    <div class='title'>
      <div class='block-title'>
        <div class='block-textAdd-query'>
          <div class='title-text'>当前位置：公司管理 - 公司列表</div>
          <div class='query-all'>
            <el-input v-model="searchObj.search" class='query' placeholder="可按公司名称/公司编号"></el-input>
            <el-button type="primary">查询</el-button>
            <el-button type="primary" @click='addCompany'>新增</el-button>
          </div>
        </div>
        <div class='opertion'>
          <el-button class='tip' :class="tipActiveIndex==0?'active':''" type="text" @click="clickTip(0)">待审核</el-button>
          <el-button class='tip' :class="tipActiveIndex==1?'active':''" type="text" @click="clickTip(1)">审核通过</el-button>
          <el-button class='tip' :class="tipActiveIndex==2?'active':''" type="text" @click="clickTip(2)">审核不通过</el-button>
        </div>
      </div>
    </div>
    <div>
      <ready-table v-if="searchObj.tag_search == 0" :tableData="tableData" @examine="examine" />
      <pass-table v-if="searchObj.tag_search == 1" :tableData="tableData" @examine='examine' @stop='stop' />
      <no-pass-table v-if="searchObj.tag_search == 2" :tableData="tableData" @examine="examine" @reCompany='reCompany' />
      <el-pagination v-if="tableData.length > 0" background class='page' layout="prev, pager, next" :page-size="pageSize" :current-page="searchObj.page" :total="total" @current-change="pageChange">
      </el-pagination>
    </div>
    <el-dialog title="停用" :visible.sync="stopShow" class='dialog' @close="cancelStop">
      <el-form>
        <el-form-item label="停用原因">
          <el-select class='select'>
            <el-option value='公司违规操作'>公司违规操作</el-option>
            <el-option value='双方终止合同'>双方终止合同</el-option>
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
import ReadyTable from "@/modules/Company/ReadyTable";
import PassTable from "@/modules/Company/PassTable";
import NoPassTable from "@/modules/Company/NoPassTable";
export default {
  data() {
    return {
      operationType: 0, // 2查看  1审核
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
          state_examine: 1,
          name: "奇葩公司",
          type: "房产商",
          city: "成都市",
          quyu: "金牛区",
          peo_name: "李方",
          tel: "13921332133",
          xx: "ZZJGDMNO1",
          time: "2017/12/12",
          source: 1,
          state: 1,
          xxname: "王五",
          num: "888888"
        }
      ],
      tableData: [
        {
          state_examine: 0,
          name: "上滩一号",
          type: "房产商",
          city: "成都市",
          quyu: "金牛区",
          peo_name: "张宇",
          tel: "13921332133",
          xx: "ZZJGDMNO1",
          time: "2017/12/12",
          source: 1,
          xxname: "王五",
          num: "888888"
        }
      ],
      tableData: [
        {
          id: 1,
          state_examine: 2,
          name: "云算科技",
          type: "房产商",
          city: "成都市",
          quyu: "金牛区",
          peo_name: "刘丽",
          tel: "13921332133",
          xx: "ZZJGDMNO1",
          time: "2017/12/12",
          source: 1,
          num: 888888,
          xxname: "猪头",
          state: 1
        },
        {
          id: 2,
          name: "佳林公司",
          type: "代理公司",
          city: "眉山市",
          quyu: "什么区",
          peo_name: "李四",
          tel: "13888888888",
          xx: "XXJGDMNO2",
          time: "2017/1/23",
          source: 2,
          num: 222222,
          xxname: "猪头",
          state: 2
        }
      ]
    };
  },
  mounted() {},
  methods: {
    async stop(row) {
      this.stopShow = true;
    },
    cancelStop() {
      this.stopShow = false;
    },
    examine(row, type) {
      console.log(row, type);
      if (type == 1) {
        this.$router.push({
          name: "examine",
          query: { id: row.id },
          params: {
            operationType: type
          }
        });
      }
      if (type == 2) {
        this.$router.push({
          name: "examine",
          query: { id: row.id },
          params: {
            operationType: type
          }
        });
      }
    },
    reCompany() {
      this.$router.push({ name: "addCompany" });
    },
    addCompany() {
      this.$router.push({ name: "addCompany" });
    },
    pageChange(page) {
      this.searchObj.page = page;
    },
    clickTip(index) {
      this.searchObj.tag_search = index;
      // this.search();
    }
  },
  components: {
    NoPassTable,
    PassTable,
    ReadyTable
  }
};
</script>
