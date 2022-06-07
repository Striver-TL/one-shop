<template>
  <div class="header">
    <div class="topbar float-clear">
      <div class="container">
        <div class="float-left"><span>送货至：四川</span></div>
        <div class="float-right">
          <ul class="topbar-list float-clear">
            <li class="float-left">
              您好!
              <span v-if="username">{{ username }}</span>
              <span v-else>
                <RouterLink to="/login/login">请登录</RouterLink>
                <RouterLink to="/login/register" style="color: orange"
                  >免费注册</RouterLink
                >
              </span>
            </li>
            <li class="float-left">
              <a href="javascript:void(0)">我的订单</a>
            </li>
            <li class="float-left">
              <ul class="float-children">
                <li>
                  <a href="javascript:void(0)"
                    >收藏夹<img src="@/static/t_arrow.gif"
                  /></a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                    >客户服务<img src="@/static/t_arrow.gif"
                  /></a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                    >网站导航<img src="@/static/t_arrow.gif"
                  /></a>
                </li>
              </ul>
            </li>
            <li class="float-left">
              <span>关注我们：</span>
              <a href="javascript: void(0)"><img src="@/static/sh1.png" /></a>
              <a href="javascript: void(0)"><img src="@/static/sh2.png" /></a>
            </li>
            <li class="float-left">
              <a href="javascript: void(0)">
                <span>手机版</span>
                <img src="@/static/s_tel.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="hbox">
      <div class="container float-children">
        <div class="logo"><img src="@/static/logo.png" /></div>
        <index-search-bar></index-search-bar>
        <div class="shopbtn">
          <button>购物车</button>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="container-content float-children">
        <h3>全部商品分类</h3>
        <ul class="float-children">
          <li><a href="javascript: void(0)">首页</a></li>
          <li><a href="javascript: void(0)">自营超市</a></li>
          <li><a href="javascript: void(0)">1号团</a></li>
          <li><a href="javascript: void(0)">1号超市</a></li>
          <li><a href="javascript: void(0)">女装</a></li>
          <li><a href="javascript: void(0)">美妆</a></li>
          <li><a href="javascript: void(0)">1号海购</a></li>
          <li><a href="javascript: void(0)">团购</a></li>
        </ul>
        <a href="javascript:void(0)" class="phonelink float-right"
          >手机下单惊喜多!</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import IndexSearchBar from "@/components/IndexSearchBar.vue";

export default defineComponent({
  name: "IndexHeader",
  data() {
    return {
      username: null,
    };
  },
  beforeMount() {
    const { state } = useStore();
    if (state.userinfo) {
      this.username = state.userinfo.uname;
    }
  },
  components: {
    IndexSearchBar,
  },
});
</script>

<style lang="scss" scoped>
.topbar {
  padding: 15px 0;
  font-size: 12px;
  color: #555;
  background: linear-gradient(
    to bottom,
    rgba(100, 100, 100, 0.2) 0%,
    transparent 20px,
    transparent 100%
  );

  .topbar-list {
    & > li {
      padding-left: 5px;
      line-height: 16px;

      ul {
        padding: 0 10px 0 5px;
      }
    }

    & > li:not(:last-child) {
      border-right: 1px solid #333;
    }

    a {
      color: inherit;
      margin-right: 4px;

      img {
        vertical-align: middle;
        margin: 0 4px;
      }
    }
  }
}

.hbox {
  padding: 40px 0 20px;

  .logo {
    margin-right: 100px;
  }

  .shopbtn {
    margin-left: 210px;

    button {
      width: 120px;
      height: 40px;
      padding-left: 20px;
      border: 1px solid #ccc;
      color: #333;
      background: url("@/static/car.png") 10px center no-repeat;
      cursor: pointer;
    }
  }
}

.nav {
  line-height: 45px;

  .container-content {
    border-bottom: 2px solid #ff4e00;
  }
  h3 {
    width: 210px;
    height: 100%;
    text-indent: 35px;
    font-size: 16px;
    font-weight: normal;
    color: #fff;
    background: #ff3c3c;
  }

  ul {
    height: 45px;
    overflow: hidden;
  }

  li {
    width: 80px;
    text-align: center;

    a {
      color: #3e3e3e;
      transition: all 0.1s ease;
      font-weight: bold;
    }

    a:hover {
      color: #ff3c3c;
    }

    &:nth-child(-n + 2) {
      a {
        color: #ff3c3c;
      }
    }
  }

  .phonelink {
    font-size: 0;
    width: 115px;
    height: 30px;
    background: url("@/static/phone.png") 0 no-repeat;
    margin-top: 5px;
  }
}
</style>
