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
          <div class='title-text'>当前位置：项目管理 - 新房</div>
          <div class='query-all'>
            <el-input v-model="searchObj.search" class='query' placeholder="可按公司名称/公司编号"></el-input>
            <el-button type="primary">查询</el-button>
            <el-button type="primary" @click='addProject(0)'>新增</el-button>
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
      <ready-table v-if="searchObj.tag_search == 0" :tableData="tableData" @examine='examine' />
      <pass-table v-if="searchObj.tag_search == 1" :tableData="tableData" @examine='examine'/>
      <no-pass-table v-if="searchObj.tag_search == 2" :tableData="tableData" />
      <el-pagination v-if="tableData.length > 0" background class='page' layout="prev, pager, next" :page-size="pageSize" :current-page="searchObj.page" :total="total" @current-change="pageChange">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import ReadyTable from "@/modules/Project/ReadyTable";
import PassTable from "@/modules/Project/PassTable";
import NoPassTable from "@/modules/Project/NoPassTable";
export default {
  data() {
    return {
      stopShow: false,
      operationType: 0, // 0 新增  1审核  2查看   3修改 4转新房
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
          name: "云算科技",
          type: "房产商",
          city: "成都市",
          quyu: "金牛区",
          peo_name: "刘丽",
          tel: "开发商",
          xx: "云算科技",
          time: "小王",
          source: 1,
          num: 888888,
          xxname: "猪头",
          state: 1,
          a: "2017-2-26",
          b: "2018-6-25",
          c: "张三"
        },
        {
          id: 2,
          name: "佳林公司",
          type: "代理公司",
          city: "眉山市",
          quyu: "什么区",
          peo_name: "李四",
          tel: "什么商",
          xx: "佳林房产",
          time: "小王",
          source: 2,
          num: 222222,
          xxname: "猪头",
          state: 2,
          a: "2017-2-26",
          b: "2018-6-25",
          c: "张三"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    examine(row, type) {
      if (type == 1) {
        this.$router.push({
          name: "addProject",
          params: {
            operationType: type
          }
        });
      };

       if (type == 2) {
        this.$router.push({
          name: "addProject",
          params: {
            operationType: type
          }
        });
      };


       if (type == 3) {
        this.$router.push({
          name: "addProject",
          params: {
            operationType: type
          }
        });
      };


       if (type == 4) {
        this.$router.push({
          name: "addProject",
          params: {
            operationType: type
          }
        });
      };




    },
    async stop(row) {
      this.stopShow = true;
    },
    cancelStop() {
      this.stopShow = false;
    },
    addProject(type) {
      if (type == 0) {
        this.$router.push({
          name: "addProject",
          params: {
            operationType: type
          }
        });
      }
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
