<!--
 * @Author: Astray
 * @Date: 2023-06-16 16:51:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-24 21:05:13
 * @FilePath: \Code\16. vue组件库从入门到实战\my-website-backstage\src\views\setting\index.vue
-->
<template>
  <div class="app-container">
    <div class="block">网站信息</div>
    <div class="block2">网站标题</div>
    <div style="margin-bottom: 15px; width: 500px">
      <el-input v-model="form.siteTitle" disabled></el-input>
    </div>
    <div class="block2">邮箱</div>
    <div style="margin-bottom: 15px; width: 500px">
      <el-input v-model="form.mail" disabled></el-input>
    </div>
    <div class="block2">备案号</div>
    <div style="margin-bottom: 15px; width: 500px">
      <el-input v-model="form.icp" disabled></el-input>
    </div>
    <el-divider></el-divider>
    <div class="block">网站头像信息</div>
    <div style="margin-bottom: 15px">
      <el-image
        style="width: 100px; height: 100px"
        :src="form.avatar"
      ></el-image>
    </div>
    <el-divider></el-divider>
    <div class="block">网址图标信息</div>
    <div class="block2">网址图标地址</div>
    <div style="margin-bottom: 15px; width: 500px">
      <el-input
        v-model="form.favicon"
        placeholder="请输入图片地址"
        disabled
      ></el-input>
    </div>
    <div class="block2">网址图标预览</div>
    <div style="margin-bottom: 15px">
      <el-image
        style="width: 50px; height: 50px"
        :src="form.favicon"
      ></el-image>
    </div>
    <el-divider></el-divider>
    <div class="block">github 信息</div>
    <div class="block2">github 名字</div>
    <div style="margin-bottom: 15px; width: 500px">
      <el-input v-model="form.githubName" disabled></el-input>
    </div>
    <div class="block2">github 地址</div>
    <div style="margin-bottom: 15px; width: 500px">
      <el-input v-model="form.github" disabled></el-input>
    </div>
    <el-divider></el-divider>
    <div class="block">QQ 信息</div>
    <div class="block2">QQ 号码</div>
    <div style="margin-bottom: 15px; width: 500px">
      <el-input v-model="form.qq" disabled></el-input>
    </div>
    <div class="block2">QQ 二维码图片预览</div>
    <div style="margin-bottom: 15px">
      <el-image
        style="width: 100px; height: 100px"
        :src="form.qqQrCode"
      ></el-image>
    </div>
    <el-divider></el-divider>
    <div class="block">微信信息</div>
    <div class="block2">微信号</div>
    <div style="margin-bottom: 15px; width: 500px">
      <el-input v-model="form.weixin" disabled></el-input>
    </div>
    <div class="block2">微信二维码图片预览</div>
    <div style="margin-bottom: 15px">
      <el-image
        style="width: 100px; height: 100px"
        :src="form.weixinQrCode"
      ></el-image>
    </div>
    <el-divider></el-divider>
    <el-button type="primary" @click="openEditPanel">进入编辑模式</el-button>

    <!-- 弹出层 -->
    <el-dialog
      title="请编辑信息"
      :visible.sync="dialogFormVisible"
      width="50%"
      top="5vh"
      fullscreen
    >
      <el-form :model="form">
        <el-form-item label="网站标题">
          <el-input v-model="form2.siteTitle"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form2.mail"></el-input>
        </el-form-item>
        <el-form-item label="备案号">
          <el-input v-model="form2.icp"></el-input>
        </el-form-item>
        <el-form-item label="网站头像地址">
          <!-- <el-input v-model="form2.avatar"></el-input> -->
          <Upload v-model="form2.avatar" />
        </el-form-item>
        <el-form-item label="网站图标地址">
          <el-input v-model="form2.favicon"></el-input>
        </el-form-item>
        <el-form-item label="github 名字">
          <el-input v-model="form2.githubName"></el-input>
        </el-form-item>
        <el-form-item label="github 地址">
          <el-input v-model="form2.github"></el-input>
        </el-form-item>
        <el-form-item label="QQ 号码">
          <el-input v-model="form2.qq"></el-input>
        </el-form-item>
        <el-form-item label="QQ 二维码图片地址">
          <!-- <el-input v-model="form2.qqQrCode"></el-input> -->
          <Upload v-model="form2.qqQrCode" />
        </el-form-item>
        <el-form-item label="微信号">
          <el-input v-model="form2.weixin"></el-input>
        </el-form-item>
        <el-form-item label="微信二维码图片地址">
          <!-- <el-input v-model="form2.weixinQrCode"></el-input> -->
          <Upload v-model="form2.weixinQrCode" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmEditSetting">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { editSetting, getSetting } from "@/api/setting";
import Upload from "@/components/Upload";
export default {
  data() {
    return {
      form: {
        siteTitle: "",
        mail: "",
        icp: "",
        avatar: "",
        favicon: "",
        githubName: "",
        github: "",
        id: "",
        weixin: "",
        weixinQrCode: "",
        qq: "",
        qqQrCode: "",
      },
      form2: {
        siteTitle: "",
        mail: "",
        icp: "",
        avatar: "",
        favicon: "",
        githubName: "",
        github: "",
        id: "",
        weixin: "",
        weixinQrCode: "",
        qq: "",
        qqQrCode: "",
      },
      dialogFormVisible: false,
    };
  },
  created() {
    this.fetchData();
  },
  components: {
    Upload,
  },
  methods: {
    async fetchData() {
      const resp = await getSetting();
      this.form = resp.data;
    },
    openEditPanel() {
      this.form2 = { ...this.form };
      this.dialogFormVisible = true;
    },
    async confirmEditSetting() {
      await editSetting(this.form2);
      this.dialogFormVisible = false;
      this.fetchData();
      this.$message.success("修改成功");
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  margin: 15px 0;
  font-size: 20px;
  font-weight: 100;
}
.block2 {
  margin: 15px 0;
  font-size: 14px;
  font-weight: 100;
}
</style>
