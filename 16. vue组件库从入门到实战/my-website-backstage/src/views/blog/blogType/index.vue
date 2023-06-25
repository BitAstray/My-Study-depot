<!--
 * @Author: Astray
 * @Date: 2023-06-16 16:13:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-19 23:03:01
 * @FilePath: \Code\16. vue组件库从入门到实战\my-website-backstage\src\views\blogType\index.vue
-->
<template>
  <div class="app-container">
    <div style="margin-top: 15px">
      <el-input
        placeholder="请输入要添加的分类,左边选择分类等级"
        v-model="input"
        @change="addBlogType"
        class="input-with-select"
      >
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="3"></el-option>
          <el-option label="4" value="4"></el-option>
          <el-option label="5" value="5"></el-option>
        </el-select>
      </el-input>
      <el-button type="primary" class="add-button" @click="addBlogType"
        >添加</el-button
      >
    </div>

    <el-table :data="data" style="width: 100%" border v-loading="listLoading">
      <el-table-column label="序号" width="60" align="center">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>

      <el-table-column label="博客类别" align="center">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>

      <el-table-column label="文章数量" align="center">
        <template slot-scope="scope">{{ scope.row.articleCount }}</template>
      </el-table-column>

      <el-table-column label="操作" width="120" align="center">
        <template slot-scope="scope">
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
              @click="editBlogType(scope.row)"
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
              @click="deleteBlogType(scope.row)"
            ></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="请编辑该分类信息"
      :visible.sync="dialogFormVisible"
      top="10vh"
      width="30%"
    >
      <el-form :model="form">
        <el-form-item label="分类名称">
          <el-input v-model="form.name"></el-input>
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
        <el-button type="primary" @click="putBlogType">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getBlogTypes,
  deleteBlogType,
  addBlogType,
  putBlogType,
  getBlogType,
} from "@/api/blog";
export default {
  created() {
    this.fetchData();
  },
  data() {
    return {
      data: [],
      input: "",
      select: "1",
      listLoading: false,
      form: {},
      dialogFormVisible: false,
    };
  },
  methods: {
    async fetchData() {
      this.listLoading = true;
      const resp = await getBlogTypes();
      this.data = resp.data;
      this.listLoading = false;
    },
    async addBlogType() {
      if (!this.input) {
        this.$message.error("分类名称不能为空");
      } else {
        await addBlogType({
          name: this.input,
          order: this.select,
        });
        this.$message.success("添加成功");
        this.fetchData();
      }
    },
    async editBlogType(blogTypeInfo) {
      this.dialogFormVisible = true;
      const resp = await getBlogType(blogTypeInfo.id);
      this.form = resp.data;
    },
    async putBlogType() {
      await putBlogType(this.form);
      this.dialogFormVisible = false;
      this.fetchData();
    },
    deleteBlogType(blogTypeInfo) {
      this.$confirm(
        "删除分类后，分类下的所有文章将变为无分类状态, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(async () => {
          await deleteBlogType(blogTypeInfo.id);
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
  },
};
</script>

<style lang="scss" scoped>
.input-with-select {
  width: 400px;
  margin-bottom: 20px;
}

.add-button {
  margin-left: 10px;
}
</style>
