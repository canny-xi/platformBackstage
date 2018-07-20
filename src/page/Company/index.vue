<style lang="less" scoped src='./index.less'>
</style>
<style lang="less">
.company{
  .el-dialog{
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
      <!-- 待审核-->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="" label="序号" align='center' width="70px">
          <template slot-scope="scope">{{getIndex(scope)}}</template>
        </el-table-column>
        <el-table-column prop="name" label="公司名称" align='center' width="90px"></el-table-column>
        <el-table-column prop="type" label="公司类型" align='center' width="140px"></el-table-column>
        <el-table-column prop="city" label="城市" align='center'></el-table-column>
        <el-table-column prop="quyu" label="区域" align='center'></el-table-column>
        <el-table-column prop="peo_name" label="项目负责人" align='center' width="150px"></el-table-column>
        <el-table-column prop="tel" label="联系方式" align='center' width="150px"></el-table-column>
        <el-table-column prop="xx" label="统一社会信用代码" align='center' width="200px"></el-table-column>
        <el-table-column prop="source" label="来源" align='center' width="80px">
          <template slot-scope="scope">{{scopeState (scope.row.source)}}</template>
        </el-table-column>
        <el-table-column prop="time" label="申请时间" align='center' width="140px"></el-table-column>
        <el-table-column label="操作" align='center' width="130px">
          <template slot-scope="scope">
            <el-button type="text" @click='examine(scope.row)'>审核</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background class='page' layout="prev, pager, next" :page-size="pageSize" :current-page="searchObj.page" :total="total" @current-change="pageChange">
      </el-pagination>
    </div>
    <div>
      <!-- 审核通过-->
      <el-table :data="adopt" border style="width: 100%">
        <el-table-column prop="" label="序号" align='center' width="70px">
          <template slot-scope="scope">{{getIndex(scope)}}</template>
        </el-table-column>
        <el-table-column prop="name" label="公司名称" align='center'></el-table-column>
        <el-table-column prop="num" label="公司编号" align='center'></el-table-column>
        <el-table-column prop="type" label="公司类型" align='center'></el-table-column>
        <el-table-column prop="city" label="城市" align='center'></el-table-column>
        <el-table-column prop="quyu" label="区域" align='center'></el-table-column>
        <el-table-column prop="peo_name" label="项目负责人" align='center'></el-table-column>
        <el-table-column prop="tel" label="联系方式" align='center'></el-table-column>
        <el-table-column prop="xx" label="统一社会信用代码" align='center' width="140px"></el-table-column>
        <el-table-column prop="source" label="来源" align='center'>
          <template slot-scope="scope">{{scopeState (scope.row.source)}}</template>
        </el-table-column>
        <el-table-column prop="time" label="申请时间" align='center'></el-table-column>
        <el-table-column prop="time" label="审核时间" align='center'></el-table-column>
        <el-table-column prop="xxname" label="审核人员" align='center'></el-table-column>
        <el-table-column label="状态" align='center'>
          <template slot-scope="scope">
            {{state(scope.row.state)}}
          </template>
        </el-table-column>
        <el-table-column label="操作" align='center' width="100px">
          <template slot-scope="scope">
            <el-button type="text">查看</el-button>
            <el-button type="text" @click='stop(scope.row)'>停用</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background class='page' layout="prev, pager, next" :page-size="pageSize" :current-page="searchObj.page" :total="total" @current-change="pageChange">
      </el-pagination>
    </div>
    <div>
      <!-- 审核不通过-->
      <el-table :data="NoPass" border style="width: 100%">
        <el-table-column prop="" label="序号" align='center' width="70px">
          <template slot-scope="scope">{{getIndex(scope)}}</template>
        </el-table-column>
        <el-table-column prop="name" label="公司名称" align='center'></el-table-column>
        <el-table-column prop="type" label="公司类型" align='center'></el-table-column>
        <el-table-column prop="city" label="城市" align='center'></el-table-column>
        <el-table-column prop="quyu" label="区域" align='center'></el-table-column>
        <el-table-column prop="peo_name" label="项目负责人" align='center'></el-table-column>
        <el-table-column prop="tel" label="联系方式" align='center'></el-table-column>
        <el-table-column prop="xx" label="统一社会信用代码" align='center' width="140px"></el-table-column>
        <el-table-column prop="source" label="来源" align='center'>
          <template slot-scope="scope">{{scopeState (scope.row.source)}}</template>
        </el-table-column>
        <el-table-column prop="time" label="申请时间" align='center'></el-table-column>
        <el-table-column prop="time" label="审核时间" align='center'></el-table-column>
        <el-table-column prop="xxname" label="审核人员" align='center'></el-table-column>
        <el-table-column label="操作" align='center' width="100px">
          <template slot-scope="scope">
            <el-button type="text" @click='examine(scope.row)'>查看</el-button>
            <el-button type="text">重新申请</el-button>
          </template>
        </el-table-column>
      </el-table>
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
export default {
  data() {
    return {
      stopShow: false,
      value:'',
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
      this.$router.push({ name: "examine" });
    },
    addCompany() {
      this.$router.push({ name: "addCompany" });
    },
    pageChange(page) {
      this.searchObj.page = page;
    },
    getIndex(row) {
      let index = row.$index + 1;
      return index;
    },
    clickTip(index) {},
    scopeState(row) {
      if (row == 1) {
        return "内部申请";
      } else if (row == 2) {
        return "外部申请";
      }
    },
    state(row) {
      if (row == 1) {
        return "已停用";
      } else if (row == 2) {
        return "使用中";
      }
    }
  }
};
</script>
