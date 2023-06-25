<!--
 * @Author: Astray
 * @Date: 2023-06-16 16:13:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-24 21:03:09
 * @FilePath: \Code\16. vue组件库从入门到实战\my-website-backstage\src\views\blogList\index.vue
-->
<template>
  <div class="app-container">
    <el-table :data="data" style="width: 100%" border v-loading="listLoading">
      <el-table-column label="序号" width="60" align="center">
        <template slot-scope="scope">{{
          scope.$index + (page - 1) * limit + 1
        }}</template>
      </el-table-column>

      <el-table-column label="文章标题" width="200" align="center">
        <template slot-scope="scope">
          <el-popover
            placement="top-start"
            title="博客预览图"
            width="230"
            trigger="hover"
          >
            <el-image
              v-if="scope.row.thumb"
              style="width: 200px"
              :src="scope.row.thumb"
              fit="contain"
              :previewSrcList="srcList"
            ></el-image>
            <a
              slot="reference"
              href="#"
              target="_blank"
              @click.prevent="goToTitleHandle(scope.row)"
              >{{ scope.row.title }}</a
            >
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="文章描述" align="center">
        <template slot-scope="scope">{{ scope.row.description }}</template>
      </el-table-column>

      <el-table-column label="浏览数" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.scanNumber }}</template>
      </el-table-column>

      <el-table-column label="评论量" align="center" width="100">
        <template slot-scope="scope"
          ><a @click.prevent="goToCommitHandle(scope.row)">{{
            scope.row.commentNumber
          }}</a></template
        >
      </el-table-column>

      <el-table-column label="所属分类" align="center" width="160">
        <template slot-scope="scope">{{
          scope.row.category ? scope.row.category.name : "未分类"
        }}</template>
      </el-table-column>

      <el-table-column label="创建日期" align="center" width="240">
        <template slot-scope="scope">{{
          parseTime(
            scope.row.createDate,
            "{yyyy}-{mm}-{dd} {hh}:{mm}:{ss} 星期{a}"
          )
        }}</template>
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
              @click="editBlogHandel(scope.row)"
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
              @click="deleteBlog(scope.row)"
            ></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next, total, ->, sizes, jumper"
      :total="total"
      :page-size="limit"
      :current-page="page"
      :page-count="pageCount"
      :page-sizes="pageSize"
      @size-change="changeSize"
      @current-change="changePage"
      @prev-click="changePage"
      @next-click="changePage"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getBlog, deleteBlog } from "@/api/blog";
import { parseTime } from "@/utils";
import { client_URL } from "@/urlConfig";
export default {
  data() {
    return {
      pagerCount: 5, //页码按钮数量
      total: 0, //总数
      page: 1, //当前页码
      limit: 5, //每一页个数
      pageSize: [5, 10, 15, 20],
      client_URL,
      srcList: [], //预览图链接数组s
      data: [],
      listLoading: false,
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    // 总页数
    pageCount() {
      return Math.ceil(this.total / this.limit);
    },
  },
  methods: {
    goToCommitHandle(blogInof) {
      this.$router.push(`/comment/${blogInof.id}`);
    },
    changePage(page) {
      this.page = page;
      this.fetchData();
    },
    changeSize(limit) {
      this.page = 1;
      this.limit = limit;
      this.fetchData();
    },
    async fetchData() {
      this.listLoading = true;
      const resp = await getBlog(this.page, this.limit);
      this.data = resp.data.rows;
      this.total = resp.data.total;
      for (var i of this.data) {
        this.srcList.push(i.thumb);
      }
      if (this.currentPage > this.pageCount) {
        this.currentPage = this.pageCount;
        this.fetchData();
      }
      this.listLoading = false;
    },
    // 跳转到具体文章
    goToTitleHandle(blogInfo) {
      window.open(`${client_URL}/article/${blogInfo.id}`);
    },
    parseTime,
    deleteBlog(blogInfo) {
      this.$confirm(
        "此操作将永久删除该文章以及该文章下的所有评论, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(async () => {
          await deleteBlog(blogInfo.id);
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
    editBlogHandel(blogInfo) {
      this.$router.push(`/editBlog/${blogInfo.id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 30px;
}
</style>
