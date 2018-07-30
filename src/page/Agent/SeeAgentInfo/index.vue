<style lang="less" scoped src='./index.less'>
</style>
<style lang="less">
.seeAgentInfo {
  .el-input__inner {
    height: 30px;
    line-height: 30px;
  }
  .el-form-item {
    margin-bottom: 4px;
    margin-right: 20px;
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
  .el-table thead.is-group th {
    background-color: #cad2dd;
    border: none;
  }
}
</style>

<template>
    <div class='seeAgentInfo'>
        <div class='title-info'>
            当前位置：经纪人管理 - 经纪人列表 - 查看详情
        </div>
        <div class='title'>
            <div class='text'>查看</div>
            <el-button type="primary" class='title-btn' @click='cancel'>关闭</el-button>
        </div>
        <div class='content'>
            <el-form :model="sumbitForm">
                <div class='input-title'>姓名：</div>
                <el-form-item class='input2'>
                    <el-input v-model="sumbitForm.a" auto-complete="off"></el-input>
                </el-form-item>
                <div class='input-title'>性别：</div>
                <el-form-item class='input2'>
                    <el-input v-model="sumbitForm.b" auto-complete="off"></el-input>
                </el-form-item>
                <div class='input-title'>云算号：</div>
                <el-form-item class='input2'>
                    <el-input v-model="sumbitForm.c" auto-complete="off"></el-input>
                </el-form-item>
                <div class='input-title'>账号：</div>
                <el-form-item class='input2'>
                    <el-input v-model="sumbitForm.d" auto-complete="off"></el-input>
                </el-form-item>
                <div class='input-title'>出生年月：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.e" auto-complete="off"></el-input>
                </el-form-item>
                <div class='input-title'>电话号码：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.f" auto-complete="off"></el-input>
                </el-form-item>
                <div class='input-title'>绑定银行：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.g" auto-complete="off"></el-input>
                </el-form-item>
                <div class='input-title'>银行卡号：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.h" auto-complete="off"></el-input>
                </el-form-item>
                <div class='input-title'>经纪人类型：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.i" auto-complete="off"></el-input>
                </el-form-item>
                <div class='input-title'>身份证号码：</div>
                <el-form-item class='input'>
                    <el-input v-model="sumbitForm.j" auto-complete="off"></el-input>
                </el-form-item><br>
                <div class='input-title'>住址：</div>
                <el-form-item class='input1'>
                    <el-input v-model="sumbitForm.k" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="个人介绍" class='remake'>
                    <el-input v-model="sumbitForm.l" auto-complete="off" type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="身份证照片">
                    <span style='color:#aaa'>（证件照片为正反两面）</span>
                    <div class='idcard-img'>
                        <span class='id-card-up'>
                            <img class='img' src='../../../assets/images/1.jpg' />
                        </span>
                        <span class='id-card-dowm'>
                            <img class='img' src='../../../assets/images/Document_2@2x.png' />
                        </span>
                    </div>
                </el-form-item>

                <div class='examine-info'>
                    <div>履历</div>
                    <el-form :model="sh">
                        <div class='input-title'>注册时间：</div>
                        <el-form-item class='input-w-140px'>
                            <el-input v-model="sh.sh_time" auto-complete="off"></el-input>
                        </el-form-item>
                        <div>新房</div>
                        <div class='input-title'>推荐客户数：</div>
                        <el-form-item class='input-w-140px'>
                            <el-input v-model="sh.sh_name" auto-complete="off"></el-input>
                        </el-form-item>
                        <div class='input-title'>客户到访数：</div>
                        <el-form-item class='input-w-140px'>
                            <el-input v-model="sh.stats" auto-complete="off"></el-input>
                        </el-form-item>
                        <div class='input-title'>成交客户数：</div>
                        <el-form-item class='input-w-140px'>
                            <el-input v-model="sh.stats" auto-complete="off"></el-input>
                        </el-form-item>
                        <div>二手房</div>
                        <div class='input-title'>报备房源数：</div>
                        <el-form-item class='input-w-140px'>
                            <el-input v-model="sh.sh_name" auto-complete="off"></el-input>
                        </el-form-item>
                        <div class='input-title'>勘察房源数：</div>
                        <el-form-item class='input-w-140px'>
                            <el-input v-model="sh.stats" auto-complete="off"></el-input>
                        </el-form-item>
                        <div class='input-title'>推荐客户数：</div>
                        <el-form-item class='input-w-140px'>
                            <el-input v-model="sh.stats" auto-complete="off"></el-input>
                        </el-form-item><br>
                        <div class='input-title'>带看客户数：</div>
                        <el-form-item class='input-w-140px'>
                            <el-input v-model="sh.stats" auto-complete="off"></el-input>
                        </el-form-item>
                        <div class='input-title'>累计推荐客户数：</div>
                        <el-form-item class='input-w-140px'>
                            <el-input v-model="sh.stats" auto-complete="off"></el-input>
                        </el-form-item>
                        <div class='input-title'>累计成交客户数：</div>
                        <el-form-item class='input-w-140px'>
                            <el-input v-model="sh.stats" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </el-form>
        </div>

        <div class='accout-info'>
            <div>工作经历</div>
            <el-table :data="accountsForm" class='accout_table'>
                <el-table-column label="序号" align='center' width="70px">
                    <template slot-scope="scope">{{getIndex(scope)}}</template>
                </el-table-column>
                <el-table-column label="公司名称" property="accout" align='center'></el-table-column>
                <el-table-column label="角色" property="name" align='center'></el-table-column>
                <el-table-column label="开始时间" property="tel" align='center'></el-table-column>
                <el-table-column label="截至时间" property="tel" align='center'></el-table-column>
                <el-table-column label="区域" property="quyu" align='center'></el-table-column>
                <el-table-column label="新房数量" align='center'>
                    <el-table-column label="推荐客户" property="status" align='center'></el-table-column>
                    <el-table-column label="客户到访" property="status" align='center'></el-table-column>
                    <el-table-column label="客户成交" property="status" align='center'></el-table-column>
                </el-table-column>
                <el-table-column label="二手房数量" align='center'>
                    <el-table-column label="报备房源" property="status" align='center'></el-table-column>
                    <el-table-column label="勘察房源" property="status" align='center'></el-table-column>
                    <el-table-column label="推荐客户" property="status" align='center'></el-table-column>
                    <el-table-column label="带看客户" property="status" align='center'></el-table-column>
                </el-table-column>
                <el-table-column label="累计数量" align='center'>
                    <el-table-column label="推荐客户" property="status" align='center'></el-table-column>
                    <el-table-column label="成交客户" property="status" align='center'></el-table-column>
                </el-table-column>
            </el-table>
        </div>
        <div class='examine-info'>
            <div>禁用信息</div>
            <el-form :model="sh">
                <div class='input-title'>处理人员：</div>
                <el-form-item class='input'>
                    <el-input v-model="sh.sh_time" auto-complete="off"></el-input>
                </el-form-item>
                <div class='input-title'>处理时间：</div>
                <el-form-item class='input'>
                    <el-input v-model="sh.sh_name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="备注" class='remake'>
                    <el-input v-model="sumbitForm.l" auto-complete="off" type="textarea"></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import CitySelector from "../../../components/CitySelector";
export default {
  data() {
    return {
      sumbitForm: {
        a: "张三",
        b: "女",
        c: "8888888",
        d: "1516811",
        e: "1991-2-22",
        f: "13625252525",
        g: "中国银行",
        h: "4641865231846",
        i: "经纪人",
        j: "5106951995152452",
        k: "四川省成都市犀浦镇的某一个踏踏",
        l: "10年驾龄，开车不翻车"
      },
      sh: {
        sh_name: "100",
        sh_time: "2018-2-25",
        stats: "100",
        sh_remake: "备注信息"
      },
      form: [
        {
          file_name: "学习资料",
          create_name: "张三",
          create_time: "2136"
        }
      ],
      accountsForm: [
        {
          accout: "云算科技",
          name: "经纪人",
          tel: "2018-2-26",
          status: "12312",
          quyu: "金牛区"
        }
      ]
    };
  },
  mounted() {},
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
