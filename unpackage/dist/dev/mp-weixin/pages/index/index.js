"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  (_easycom_uni_icons2 + _easycom_common_title2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_common_title)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(3, (item, k0, i0) => {
      return {};
    }),
    b: common_assets._imports_0,
    c: common_vendor.p({
      type: "sound-filled",
      size: "20",
      color: "#28b389"
    }),
    d: common_vendor.p({
      type: "right",
      size: "16",
      color: "#333"
    }),
    e: common_vendor.f(8, (item, k0, i0) => {
      return {};
    }),
    f: common_assets._imports_1
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/weijing/ExerciseProject/uniapp/xiami-wallpaper/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);