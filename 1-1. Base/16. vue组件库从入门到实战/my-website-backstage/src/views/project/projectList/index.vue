<!--
 * @Author: Astray
 * @Date: 2023-06-16 16:40:11
-->
<template>
  <div class="app-container">
    <el-table
      :data="data"
      style="width: 100%"
      border
      v-loading="listLoading"
      highlight-current-row
    >
      <el-table-column label="序号" width="60" align="center">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column label="项目名称" width="240" align="center">
        <template slot-scope="scope">
          <a @click.prevent="openProjectUrl(scope.row.url)" class="proName">{{
            scope.row.name
          }}</a>
        </template>
      </el-table-column>
      <el-table-column label="项目描述" align="center">
        <template slot-scope="scope">
          <p v-for="item in scope.row.description">{{ item }}</p>
        </template>
      </el-table-column>
      <el-table-column label="预览图" align="center" width="200">
        <template slot-scope="scope">
          <el-image
            style="width: 120px"
            :src="scope.row.thumb"
            fit="cover"
            :preview-src-list="thumbSrcList"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-tooltip
            class="item"
            effect="dark"
            content="github"
            placement="top"
            :hide-after="2000"
          >
            <el-button
              type="info"
              class="iconfont icon-github"
              circle
              size="mini"
              @click="openProjectUrl(scope.row.github)"
            ></el-button>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="编辑"
            placement="top"
            :hide-after="2000"
          >
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              size="mini"
              @click="editProjectHandle(scope.row)"
            ></el-button>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="删除"
            placement="top"
            :hide-after="2000"
          >
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              size="mini"
              @click="delProjectHandle(scope.row)"
            ></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="请编辑该项目信息"
      :visible.sync="dialogFormVisible"
      :fullscreen="true"
    >
      <el-form :model="form">
        <el-form-item label="项目名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="项目描述(每一项描述用回车分割)">
          <el-input
            v-model="form.description"
            type="textarea"
            rows="5"
          ></el-input>
        </el-form-item>

        <el-form-item label="项目地址">
          <el-input v-model="form.url"></el-input>
        </el-form-item>

        <el-form-item label="GitHub地址">
          <el-input v-model="form.github"></el-input>
        </el-form-item>

        <el-form-item label="项目预览图">
          <Upload v-model="form.thumb" />
        </el-form-item>

        <el-form-item label="排序等级">
          <el-select v-model="form.order" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option label="4" value="4"></el-option>
            <el-option label="5" value="5"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmEditProjectHandle"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getProject, editProject, deleteProject } from "@/api/project";
import Upload from "@/components/Upload";
export default {
  data() {
    return {
      data: [],
      listLoading: false,
      dialogFormVisible: false,
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
  computed: {
    thumbSrcList() {
      return this.data.map((item) => item.thumb);
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    openProjectUrl(url) {
      if (url) {
        window.open(url);
      } else {
        this.$message.warning("该地址未填写");
      }
    },
    editProjectHandle(projectInfo) {
      this.form = { ...projectInfo };
      this.form.description = this.form.description.join("\n");
      this.dialogFormVisible = true;
    },
    async confirmEditProjectHandle() {
      let projectInfo = { ...this.form };
      projectInfo.description = this.form.description.split("\n");
      projectInfo.order = +this.form.order;
      if (projectInfo.name && projectInfo.description) {
        await editProject(projectInfo);
        this.dialogFormVisible = false;
        this.fetchData();
        this.$message.success("修改成功");
      } else {
        this.$message.error("项目名称或项目描述不能为空");
      }
    },
    delProjectHandle(projectInfo) {
      this.$confirm("此操作将永久删除该项目条目, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await deleteProject(projectInfo.id);
          this.fetchData();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    async fetchData() {
      this.listLoading = true;
      const resp = await getProject();
      this.data = resp.data;
      this.listLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.proName:hover {
  color: #252525;
}

.iconfont {
  font-size: 12px;
}
</style>
