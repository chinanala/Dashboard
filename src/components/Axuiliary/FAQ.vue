<template>
  <div class="wrapper">
    <div class="row">
      <div class="title">如何切换背景图?</div>
      <div class="answer">点击右下角菜单进入全局设置，可选择设置背景图，网络图片可输入任意视频路径以实现<b>动态壁纸</b>，同时官方也提供一些推荐壁纸可选。而随机图片图片源来源于<a href="https://unsplash.com/" target="_blank">UNSPLASH</a>网站，同时提供选用国内unsplash镜像加速。</div>
    </div>
    <div class="row">
      <div class="title">如何更改组件大小与位置?</div>
      <div class="answer">
        点击右下角菜单锁定按钮解除锁定进入<code>编辑模式</code>，<b>右键相应组件打开菜单（移动端下可使用长按操作唤起菜单）</b>选择基础配置可更改组件大小。
        当前组件有2种定位模式，按栅格布局与Fix固定布局，2种模式都支持直接拖拽更改位置。新版栅格布局可直角拖拽右下角更改组件大小。
      </div>
    </div>
    <div class="row">
      <div class="title">如何在另一设备同步我的配置?</div>
      <div class="answer">
        当前提供2种数据同步方案，使用<code>密钥同步</code>（推荐）与<code>JSON文件</code>同步，打开辅助功能弹出，选择导入导出，在导出模块生成密钥后即可复制密钥到另一设备进行导入。
      </div>
    </div>
    <div class="row">
      <div class="title">为什么IFrame组件无法正常加载?</div>
      <div class="answer">
        因为当前系统部署在<code>HTTPS</code>站点下，新版Chrome等浏览器已不支持https与http协议混用，所以Iframe组件只支持https的外部网站。
      </div>
    </div>
    <div class="row">
      <div class="title">组件被另外的组件阻挡?</div>
      <div class="answer">
        可以在组件基础配置中，找到<code>ZIndex</code>配置项，尝试加大该值可将组件层级顺序加大。
      </div>
    </div>
    <div class="row">
      <div class="title">如何添加自定义搜索引擎?</div>
      <div class="answer">
        在<code>Search</code>物料中，在组件配置中找到添加按钮即可添加自定义搜索引擎。其中搜索地址中关键词使用<code>[0]</code>进行占位。
        另外，这种方式也可以实现屏蔽某些网站搜索结果，例如<b>百度搜索屏蔽CSDN</b>，其引擎地址为<code>https://baidu.com/s?wd=[0] <b>-csdn</b></code>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FAQ'
})
</script>
<style lang="scss" scoped>
.wrapper {
  padding: 10px;
  .row {
    margin-bottom: 20px;
    .title {
      color: $--color-grey1;
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 8px;
      display: inline-block;
      position: relative;
      &:after {
        position: absolute;
        content: "";
        left: 0;
        width: 100%;
        bottom: 0;
        height: 8px;
        background: rgba(233, 174, 49, 0.2);
      }
    }
    .answer {
      color: $--color-grey2;
      font-size: 14px;
      code {
        display: inline-block;
        padding: 0 2px;
        background: rgb(255,241,234);
        border-radius: 2px;
      }
    }
  }
}
</style>
