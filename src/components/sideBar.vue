<style lang="less" scoped src="./icon.less"></style>

<style scoped lang="less">
.text {
  font-size: 16px;
  color: #999;
  width: 207px;
  &.is-active {
    color: #fff;
    background-color: #6f7e95;
  }
}
.delent {
  font-size: 13px;
  color: #999;
  text-align: center;
}
.sideBar {
  background-color: #fff;
}
.title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 59px;
  background: #fefefe;
  z-index: 110;
  text-align: left;
  border-bottom: 1px solid #eee;
}
.top-name {
  position: absolute;
  top: 28px;
  right: 370px;
  font-size: 14px;
  color: #666;
  vertical-align: middle;
}
.img-name {
  vertical-align: middle;
  width: 22px;
  height: 22px;
}
.top-one {
  position: absolute;
  top: 28px;
  right: 160px;
  font-size: 14px;
  color: #666;
  vertical-align: middle;
}
.top-city {
  position: absolute;
  top: 28px;
  right: 280px;
  font-size: 14px;
  color: #666;
  vertical-align: middle;
}
.top-text {
  position: absolute;
  top: 19px;
  right: 50px;
  font-size: 15px;
}
.top-img {
  vertical-align: top;
  position: relative;
  top: -5px;
  width: 25px;
  height: 25px;
}

.tou {
  padding-top: 12px;
  padding-left: 11px;
  display: inline-block;
  vertical-align: middle;
  background-color: #343f51;
  height: 59px;
  padding-right: 10px;
}
.img {
  width: 100%;
  height: 80%;
  position: relative;
  top: -5px;
  left: 0;
}
</style>
<style lang="less">
.sideBar {
  .el-menu-item,
  .el-submenu__title {
    height: 48px;
    line-height: 48px;
  }
  .el-submenu .el-menu-item {
    min-width: 0px;
    margin: 0;
    font-size: 12px;
    height: 38px;
    line-height: 38px;
  }
  .sidebar-menu {
    position: fixed !important;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 100;
    width: 207px;
    margin-top: 55px;
    text-align: left;
    background-color: #343f51;
    padding-top: 10px;
  }
}
</style>


<template>
  <div class='sideBar'>
    <div class='title'>
      <span class='tou'>
        <img class='img' src='../assets/images/logo.png' />
      </span>
      <span class='top-name'>
        <img src='../assets/images/commppay@2x.png' class='img-name' />{{company_name}}
      </span>
      <span class='top-city'>
        <img src='../assets/images/dasssad@2x.png' class='img-name' />成都
      </span>
      <span class='top-one'>
        <img src='../assets/images/my@2x.png' class='img-name' />{{name}}
      </span>
      <span @click='cancel'>
        <el-button type='text' class='top-text'><img class='top-img' src='../assets/images/exit@2x.png' />退出</el-button>
      </span>
    </div>
    <el-menu :default-active="activeIndex" class="sidebar-menu" @open="menuOpen" @close="menuOpen">
      <el-submenu index='operation'>
        <template slot="title">
          <span class='delent' @click="handleSelect('operation')">
            <i class="icon-company"></i>公司管理</span>
        </template>
        <el-menu-item index="companyc_ranking" class='people' @click="handleSelect('company_ranking')">公司排名表</el-menu-item>
        <el-menu-item index="ReadyTable" class='people' @click="handleSelect('company')">公司列表</el-menu-item>
      </el-submenu>
      <el-submenu index='project'>
        <template slot="title">
          <span class='delent' @click="handleSelect('project')">
            <i class="icon-project"></i>项目管理</span>
        </template>
        <el-menu-item index="agent" class='people' @click="handleSelect('agent')">项目排名表</el-menu-item>
        <el-menu-item index="examinePeople" class='people' @click="handleSelect('examinePeople')">新房</el-menu-item>
        <el-menu-item index="quitPeople" class='people' @click="handleSelect('quitPeople')">二手房</el-menu-item>
        <!-- <el-menu-item index="quitPeople" class='people' @click="handleSelect('quitPeople')">认证详情</el-menu-item> -->
      </el-submenu>
      <el-submenu index='agent'>
        <template slot="title">
          <span class='delent' @click="handleSelect('agent')">
            <i class="icon-agent"></i>经纪人管理</span>
        </template>
        <el-menu-item index="agent" class='people' @click="handleSelect('agent_ranking')">经纪人排名</el-menu-item>
        <el-menu-item index="agentList" class='people' @click="handleSelect('agentList')">经纪人列表</el-menu-item>
      </el-submenu>
      <el-submenu index='transaction'>
        <template slot="title">
          <span class='delent' @click="handleSelect('transaction')">
            <i class="icon-transaction"></i>交易管理</span>
        </template>
        <el-menu-item index="agent" class='people' @click="handleSelect('agent')">新房</el-menu-item>
        <el-menu-item index="examinePeople" class='people' @click="handleSelect('examinePeople')">二手房</el-menu-item>
        <el-menu-item index="quitPeople" class='people' @click="handleSelect('quitPeople')">租房</el-menu-item>
      </el-submenu>
      <el-submenu index='house'>
        <template slot="title">
          <span class='delent' @click="handleSelect('house')">
            <i class="icon-house"></i>房源管理</span>
        </template>
        <el-menu-item index="agent" class='people' @click="handleSelect('agent')">二手房</el-menu-item>
        <el-menu-item index="examinePeople" class='people' @click="handleSelect('examinePeople')">租房</el-menu-item>
      </el-submenu>
      <el-submenu index='storeAuthorization'>
        <template slot="title">
          <span class='delent' @click="handleSelect('storeAuthorization')">
            <i class="icon-store"></i>门店授权管理</span>
        </template>
        <el-menu-item index="agent" class='people' @click="handleSelect('agent')">审核列表</el-menu-item>
        <el-menu-item index="examinePeople" class='people' @click="handleSelect('examinePeople')">门店列表</el-menu-item>
      </el-submenu>
      <el-submenu index='appeal'>
        <template slot="title">
          <span class='delent' @click="handleSelect('appeal')">
            <i class="icon-appeal"></i>申诉中心</span>
        </template>
        <el-menu-item index="agent" class='people' @click="handleSelect('agent')">申诉列表</el-menu-item>
      </el-submenu>
      <el-submenu index='parameter'>
        <template slot="title">
          <span class='delent' @click="handleSelect('parameter')">
            <i class="icon-parameter"></i>参数设置</span>
        </template>
        <!-- <el-menu-item index="agent" class='people' @click="handleSelect('agent')">审核列表</el-menu-item>
        <el-menu-item index="examinePeople" class='people' @click="handleSelect('examinePeople')">门店列表</el-menu-item> -->
      </el-submenu>
      <el-submenu index='user'>
        <template slot="title">
          <span class='delent' @click="handleSelect('user')">
            <i class="icon-user"></i>用户管理（用户端）</span>
        </template>
        <!-- <el-menu-item index="agent" class='people' @click="handleSelect('agent')">审核列表</el-menu-item>
        <el-menu-item index="examinePeople" class='people' @click="handleSelect('examinePeople')">门店列表</el-menu-item> -->
      </el-submenu>
      <el-submenu index='bespoke'>
        <template slot="title">
          <span class='delent' @click="handleSelect('bespoke')">
            <i class="icon-bespoke"></i>预约管理（用户端）</span>
        </template>
        <!-- <el-menu-item index="agent" class='people' @click="handleSelect('agent')">审核列表</el-menu-item>
        <el-menu-item index="examinePeople" class='people' @click="handleSelect('examinePeople')">门店列表</el-menu-item> -->
      </el-submenu>
      <el-submenu index='demand'>
        <template slot="title">
          <span class='delent' @click="handleSelect('demand')">
            <i class="icon-demand"></i>需求管理（用户端）</span>
        </template>
        <!-- <el-menu-item index="agent" class='people' @click="handleSelect('agent')">审核列表</el-menu-item>
        <el-menu-item index="examinePeople" class='people' @click="handleSelect('examinePeople')">门店列表</el-menu-item> -->
      </el-submenu>
      <el-submenu index='dataAnalysis'>
        <template slot="title">
          <span class='delent' @click="handleSelect('dataAnalysis')">
            <i class="icon-dataAnalysis"></i>数据分析（用户端）</span>
        </template>
        <el-menu-item index="agent" class='people' @click="handleSelect('agent')">区域数据统计</el-menu-item>
        <el-menu-item index="examinePeople" class='people' @click="handleSelect('examinePeople')">门店数据统计</el-menu-item>
        <el-menu-item index="examinePeople" class='people' @click="handleSelect('examinePeople')">小区数据统计</el-menu-item>
      </el-submenu>
      <el-submenu index='commission'>
        <template slot="title">
          <span class='delent' @click="handleSelect('commission')">
            <i class="icon-commission"></i>佣金规则（二手房）</span>
        </template>
        <el-menu-item index="agent" class='people' @click="handleSelect('agent')">佣金列表</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "",
      company_name: "",
      name: ""
    };
  },
  created() {
    this.activeIndex = this.$route.name;
  },
  mounted() {
    this.name = localStorage.getItem("name");
    this.company_name = localStorage.getItem("company_name");
  },
  methods: {
    cancel() {
      this.$router.push({
        name: "login"
      });
    },
    handleSelect(param) {
      this.$router.push({ name: param });
    },
    menuOpen(index) {
      this.handleSelect(index);
    }
  }
};
</script>

