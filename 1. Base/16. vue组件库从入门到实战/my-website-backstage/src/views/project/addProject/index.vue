<!--
 * @Author: Astray
 * @Date: 2023-06-16 16:40:38
-->
<template>
  <div class="app-container">
    <div>
      <p class="label">项目名称</p>
      <el-input v-model="form.name" placeholder="请输入项目名称"></el-input>
    </div>
    <div>
      <p class="label">项目描述(每一项描述用回车分割)</p>
      <el-input
        v-model="form.description"
        type="textarea"
        rows="5"
        :placeholder="'请输入项目描述\n1..\n2...\n3...'"
      ></el-input>
    </div>
    <div>
      <p class="label">项目地址</p>
      <el-input v-model="form.url" placeholder="请输入项目地址"></el-input>
    </div>
    <div>
      <p class="label">GitHub地址</p>
      <el-input v-model="form.github" placeholder="请输入GitHub地址"></el-input>
    </div>
    <div>
      <p class="label">项目预览图</p>
      <Upload v-model="form.thumb" />
    </div>
    <div>
      <p class="label">排序等级</p>
      <el-select v-model="form.order" placeholder="请选择">
        <el-option label="1" value="1"></el-option>
        <el-option label="2" value="2"></el-option>
        <el-option label="3" value="3"></el-option>
        <el-option label="4" value="4"></el-option>
        <el-option label="5" value="5"></el-option>
      </el-select>
    </div>

    <el-button class="label" type="primary" @click="addtProjectHandle"
      >发布项目</el-button
    >
  </div>
</template>

<script>
import { addProject } from "@/api/project";
import Upload from "@/components/Upload";
export default {
  data() {
    return {
      form: {
        name: "",
        description: "",
        url: "",
        github: "",
        thumb: "",
        order: 1,
      },
    };
  },
  components: {
    Upload,
  },
  methods: {
    async addtProjectHandle() {
      let projectInfo = { ...this.form };
      projectInfo.description = this.form.description.split("\n");
      projectInfo.order = +this.form.order;
      if (projectInfo.name && projectInfo.description) {
        await addProject(projectInfo);
        this.$router.push("/projectList");
        this.$message.success("添加成功");
      } else {
        this.$message.error("项目名称或项目描述不能为空");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  margin: 15px 0;
}
</style>
