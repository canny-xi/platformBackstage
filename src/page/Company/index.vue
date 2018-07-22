<style lang="less" scoped src='./index.less'>
</style>
<style lang="less">
.company {
  .el-dialog {
    width: 35%;
  }
}
</style>

<template>
  <div class='company'>
    <div class='title'>
      <div class='block-title'>
        <div>
          <div class='title-text'>当前位置：项目管理</div>
          <div>
            <el-input v-model="searchObj.search" class='query' placeholder="可按公司名称/公司编号"></el-input>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" @click='addCompany'>新增</el-button>
          </div>
        </div>
        <div>
          <el-button class='tip' :class="tipActiveIndex==0?'active':''" type="text" @click="clickTip(0)">待审核</el-button>
          <el-button class='tip' :class="tipActiveIndex==1?'active':''" type="text" @click="clickTip(1)">审核通过</el-button>
          <el-button class='tip' :class="tipActiveIndex==2?'active':''" type="text" @click="clickTip(2)">审核不通过</el-button>
        </div>
      </div>
    </div>
    <div>
      <ready-table :tableData="tableData" @examine="examine" />
      <el-pagination background class='page' layout="prev, pager, next" :page-size="pageSize" :current-page="searchObj.page" :total="total" @current-change="pageChange">
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
      stopShow: false,
      value: "",
      remark: "",
      searchObj: {
        search: "",
        tag_search: "",
        page: 1
      },
      tipActiveIndex: 0,
      pageSize: 1,
      name: "",
      company_name: "",
      total: 1,
      adopt: [
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
      NoPass: [
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
          source: 1
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
          source: 2
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

    showExamine(row) {
      this.$router.push({ name: "showExamine" });
    },
    examine(row) {
      this.$router.push({ name: "examine" , query : {id : row.id} });
    },
    addCompany() {
      this.$router.push({ name: "addCompany" });
    },
    pageChange(page) {
      this.searchObj.page = page;
    },
    clickTip(index) {},
    state(row) {
      if (row == 1) {
        return "已停用";
      } else if (row == 2) {
        return "使用中";
      }
    }
  },
  components: {
    NoPassTable,
    PassTable,
    ReadyTable
  }
};
</script>
