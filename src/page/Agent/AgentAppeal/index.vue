<style lang="less" scoped src='./index.less'>
</style>
<style lang="less">
.agentList {
  .el-dialog {
    width: 640px;
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
                    <div class='title-text'>当前位置：经纪人管理 - 经纪人申诉列表</div>
                    <div class='query-all'>
                        <el-input v-model="searchObj.search" class='query' placeholder="可按公司名称/公司编号"></el-input>
                        <el-button type="primary">查询</el-button>
                    </div>
                </div>
                <div class='opertion'>
                    <el-button class='tip' :class="tipActiveIndex==0?'active':''" type="text" @click="clickTip(0)">未处理</el-button>
                    <el-button class='tip' :class="tipActiveIndex==1?'active':''" type="text" @click="clickTip(1)">处理完成</el-button>
                </div>
            </div>
        </div> 
        <div class='agent_table' v-if="searchObj.tag_search == 0">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="" label="序号" align='center' width="70px">
                    <template slot-scope="scope">{{getIndex(scope)}}</template>
                </el-table-column>
                <el-table-column prop="name" label="云算号" align='center'></el-table-column>
                <el-table-column prop="type" label="申请人员" align='center'></el-table-column>
                <el-table-column prop="city" label="联系电话" align='center' width="110px"></el-table-column>
                <el-table-column prop="quyu" label="申诉类型" align='center'></el-table-column>
                <el-table-column prop="peo_name" label="备注" align='center'></el-table-column>
                <el-table-column prop="tel" label="申诉时间" align='center'></el-table-column>
                <el-table-column label="操作" align='center' width="130px">
                    <template slot-scope="scope">
                        <el-button type="text" @click='see(scope.row)'>查看</el-button>
                        <el-button type="text" @click='stop(scope.row)'>处理</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination v-if="tableData.length > 0" background class='page' layout="prev, pager, next" :page-size="pageSize" :current-page="searchObj.page" :total="total" @current-change="pageChange">
            </el-pagination>
        </div>
        <div class='agent_table' v-if="searchObj.tag_search == 1">
            <el-table :data="tableDataEnd" style="width: 100%">
                <el-table-column prop="" label="序号" align='center' width="70px">
                    <template slot-scope="scope">{{getIndex(scope)}}</template>
                </el-table-column>
                <el-table-column prop="name" label="云算号" align='center'></el-table-column>
                <el-table-column prop="type" label="申请人员" align='center'></el-table-column>
                <el-table-column prop="city" label="联系电话" align='center' width="110px"></el-table-column>
                <el-table-column prop="quyu" label="申诉类型" align='center'></el-table-column>
                <el-table-column prop="peo_name" label="备注" align='center'></el-table-column>
                <el-table-column prop="chuli" label="处理人员" align='center'></el-table-column>
                <el-table-column prop="jieguo" label="处理结果" align='center'></el-table-column>
                <el-table-column prop="tel" label="处理时间" align='center'></el-table-column>
                <el-table-column label="操作" align='center' width="130px">
                    <template slot-scope="scope">
                        <el-button type="text" @click='see(scope.row)'>查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination v-if="tableData.length > 0" background class='page' layout="prev, pager, next" :page-size="pageSize" :current-page="searchObj.page" :total="total" @current-change="pageChange">
            </el-pagination>
        </div>
        <el-dialog title="处理" :visible.sync="stopShow" class='dialog' @close="cancelStop">
            <el-form>
                <el-form-item label="处理结果" class='input'>
                    <el-select>
                        <el-option value='判断为有效'>判断为有效</el-option>
                        <el-option value='判断为无效'>判断为无效</el-option>
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

        <el-dialog title="查看申请信息详情" :visible.sync="seeInfo" class='dialog' @close="cancelSeeInfo">
            <el-form :model="sumbitForm">
                <div class='input-title'>申诉类别：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.a" auto-complete="off"></el-input>
                </el-form-item>
                <div class='input-title'>申请人员：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.c" auto-complete="off"></el-input>
                </el-form-item><br>
                <div class='input-title'>联系电话：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.d" auto-complete="off"></el-input>
                </el-form-item>
                <div class='input-title'>申请时间：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.e" auto-complete="off"></el-input>
                </el-form-item><br>
                <div class='input-title'>备注：</div>
                <el-form-item class='input1'>
                    <el-input v-model="sumbitForm.b" auto-complete="off" type="textarea"></el-input>
                </el-form-item>
                <div class='handle-info'>处理信息详情</div>

                <div class='input-title'>处理结果：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.f" auto-complete="off"></el-input>
                </el-form-item><br>
                <div class='input-title'>处理人员：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.g" auto-complete="off"></el-input>
                </el-form-item>
                <div class='input-title'>处理时间：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.e" auto-complete="off"></el-input>
                </el-form-item><br>
                <div class='input-title'>备注：</div>
                <el-form-item class='input1'>
                    <el-input v-model="sumbitForm.b" auto-complete="off" type="textarea"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelSeeInfo">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
  data() {
    return {
      stopShow: false,
      seeInfo: false,
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
      sumbitForm: {
        a: "客户无效",
        b: "阿萨德阿萨德艾丝凡撒发",
        c: "张三",
        d: "13622222222",
        e: "1991-2-22",
        f:"成功",
        g:'小可爱'
      },
      tableData: [
        {
          id: 1,
          state_examine: 2,
          name: "8888888",
          type: "张三",
          city: "13888888888",
          quyu: "客源无效申诉",
          peo_name: "吉里吉里呱啦",
          tel: "2017/12/12  "
        },
        {
          id: 2,
          name: "66666666",
          type: "李四",
          city: "13888888888",
          quyu: "客源无效申诉",
          peo_name: "瓜拉呱啦吉利",
          tel: "2017/12/12  "
        }
      ],
      tableDataEnd: [
        {
          id: 1,
          state_examine: 2,
          name: "8888888",
          type: "张三",
          city: "13888888888",
          quyu: "客源无效申诉",
          peo_name: "吉里吉里呱啦",
          tel: "2017/12/12  ",
          chuli: "阿萨德",
          jieguo: "完成"
        },
        {
          id: 2,
          name: "66666666",
          type: "李四",
          city: "13888888888",
          quyu: "客源无效申诉",
          peo_name: "瓜拉呱啦吉利",
          tel: "2017/12/12  ",
          chuli: "阿萨德",
          jieguo: "失败"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    see(row) {
      this.seeInfo = true;
    },
    getIndex(row) {
      let index = row.$index + 1;
      return index;
    },
    cancelSeeInfo() {
      this.seeInfo = false;
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
      console.log(index);
      this.searchObj.tag_search = index;
      // this.search();
    }
  }
};
</script>
