<!--
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-13 17:21:27
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-13 21:45:25
 * @FilePath: \one-shop\src\components\IndexFooter.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="footer">
    <div class="footer-icon">
      <ul class="float-children">
        <li>
          <LazyImage :src="require(`@/static/b1.png`)" />
          <span class="icon-title">正品保障</span>
          <span class="icon-desc">正品行货 放心购买</span>
        </li>
        <li>
          <LazyImage :src="require(`@/static/b2.png`)" />
          <span class="icon-title">满38包邮</span>
          <span class="icon-desc">满38包邮 免运费</span>
        </li>
        <li>
          <LazyImage :src="require(`@/static/b3.png`)" />
          <span class="icon-title">天天低价</span>
          <span class="icon-desc">天天低价 畅选无忧</span>
        </li>
        <li>
          <LazyImage :src="require(`@/static/b4.png`)" />
          <span class="icon-title">准时送达</span>
          <span class="icon-desc">收货时间由你做主</span>
        </li>
      </ul>
    </div>
    <div class="footer-service">
      <div class="container float-children">
        <div class="footer-links float-children">
          <dl>
            <dt>新手上路</dt>
            <dd><a href="javascript: void(0)">售后流程</a></dd>
            <dd><a href="javascript: void(0)">购物流程</a></dd>
            <dd><a href="javascript: void(0)">订购方式</a></dd>
            <dd><a href="javascript: void(0)">隐私声明</a></dd>
            <dd><a href="javascript: void(0)">推荐分享说明</a></dd>
          </dl>
          <dl>
            <dt>配送与支付</dt>
            <dd><a href="javascript: void(0)">货到付款区域</a></dd>
            <dd><a href="javascript: void(0)">配送支付查询</a></dd>
            <dd><a href="javascript: void(0)">支付方式说明</a></dd>
          </dl>
          <dl>
            <dt>会员中心</dt>
            <dd><a href="javascript: void(0)">资金管理</a></dd>
            <dd><a href="javascript: void(0)">我的收藏</a></dd>
            <dd><a href="javascript: void(0)">我的订单</a></dd>
          </dl>
          <dl>
            <dt>服务保证</dt>
            <dd><a href="javascript: void(0)">退换货原则</a></dd>
            <dd><a href="javascript: void(0)">售后服务保证</a></dd>
            <dd><a href="javascript: void(0)">产品质量保证</a></dd>
          </dl>
          <dl>
            <dt>联系我们</dt>
            <dd><a href="javascript: void(0)">网站故障报告</a></dd>
            <dd><a href="javascript: void(0)">购物咨询</a></dd>
            <dd><a href="javascript: void(0)">投诉与建议</a></dd>
          </dl>
        </div>
        <div class="footer-er float-children">
          <div class="er-left">
            <div class="erwuma">
              <LazyImage :src="require('@/static/er.gif')" />
            </div>
            <h3>扫一扫关注我们！</h3>
          </div>
          <div class="er-right">
            <div class="er-friend">
              <a class="friend-sina" href="javascript: void(0);">新浪微博</a>
              <a class="friend-qq" href="javascript: void(0);">腾讯微博</a>
            </div>
            <div class="er-telephone">
              <span>热线：</span>
              <span class="telephone-text">400-123-4567</span>
            </div>
          </div>
        </div>
        <div class="footer-copy">
          <div class="container-content">
            <div class="copy-copyright">
              备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com
              Copyright&copy; 1号店网上超市 2007-2016，All Rights
              Reserved.复制必究，Technical Support：Dgg Group
            </div>
            <div class="copy-icon">
              <ul>
                <li>
                  <LazyImage :src="require(`@/static/b_1.gif`)"></LazyImage>
                </li>
                <li>
                  <LazyImage :src="require(`@/static/b_2.gif`)"></LazyImage>
                </li>
                <li>
                  <LazyImage :src="require(`@/static/b_3.gif`)"></LazyImage>
                </li>
                <li>
                  <LazyImage :src="require(`@/static/b_4.gif`)"></LazyImage>
                </li>
                <li>
                  <LazyImage :src="require(`@/static/b_5.gif`)"></LazyImage>
                </li>
                <li>
                  <LazyImage :src="require(`@/static/b_6.gif`)"></LazyImage>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import LazyImage from "@/components/LazyImage";

export default defineComponent({
  name: "IndexFooter",
  setup() {},
  components: {
    LazyImage,
  },
});
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 40px;
  .footer-icon {
    $ul-width: 940px;
    ul {
      width: $ul-width;
      margin: 0 auto 44px;
    }

    li {
      width: $ul-width / 4;
      text-align: center;
    }

    .image {
      width: 62px;
      height: 62px;
      margin: 10px auto;
      background: transparent;
    }

    span {
      display: block;
    }

    .icon-title {
      font-size: 14px;
      color: #333;
      line-height: 25px;
    }

    .icon-desc {
      font-size: 12px;
      color: #777;
      line-height: 18px;
    }
  }

  .footer-service {
    margin-bottom: 7px;
  }

  .footer-links {
    margin-right: 90px;
    dl {
      width: 105px;
      margin-left: 50px;
    }

    dt {
      font-size: 14px;
      line-height: 48px;
    }

    dd {
      a {
        font-size: 12px;
        line-height: 2;
        color: #777;
        &:hover {
          color: #f33;
        }
      }
    }
  }

  .footer-er {
    h3 {
      font-size: 14px;
      line-height: 58px;
      color: #777;
      font-weight: normal;
      font-family: "华文行楷";
    }

    .er-right {
      padding-left: 17px;
      a {
        display: block;
        background-position: 0 center;
        background-repeat: no-repeat;
        padding-left: 32px;
        color: #888;
        font-size: 12px;
        line-height: 32px;
        margin-bottom: 10px;

        &:hover {
          text-decoration: underline;
        }
      }

      a.friend-sina {
        background-image: url("@/static/b_sh_1.png");
      }

      a.friend-qq {
        background-image: url("@/static/b_sh_2.png");
      }
    }

    .er-telephone {
      padding-top: 10px;
      span {
        display: block;
        line-height: 25px;
        color: #888;
        font-size: 12px;
      }

      span.telephone-text {
        color: #ff4e00;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }

  .footer-copy {
    padding: 15px 0 50px;
    border-top: 1px dashed #d9d9d9;
    .copy-copyright {
      font-size: 12px;
      line-height: 55px;
      color: #888;
      text-align: center;
    }

    .copy-icon {
      font-size: 0;
      ul {
        text-align: center;
      }

      li {
        display: inline-block;
      }
      .image {
        width: 100px;
        height: 35px;
        border: 1px solid #d9d9d9;
        border-radius: 3px;
        margin: 0 7px;
      }
    }
  }
}
</style>
