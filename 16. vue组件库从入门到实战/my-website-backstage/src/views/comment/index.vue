<!--
 * @Author: Astray
 * @Date: 2023-06-16 16:48:30
-->
<template>
  <div class="app-container">
    <el-table :data="data" style="width: 100%" border v-loading="listLoading">
      <el-table-column label="序号" width="60" align="center">
        <template slot-scope="scope">{{
          scope.$index + (page - 1) * limit + 1
        }}</template>
      </el-table-column>

      <el-table-column label="头像" width="120" align="center">
        <template slot-scope="scope">
          <el-image
            :src="scope.row.avatar"
            fit="cover"
            class="avatar"
          ></el-image>
        </template>
      </el-table-column>

      <el-table-column label="昵称" width="180" align="center">
        <template slot-scope="scope">{{ scope.row.nickname }}</template>
      </el-table-column>
      <el-table-column label="评论文章" width="240" align="center">
        <template slot-scope="scope">{{ scope.row.blog.title }}</template>
      </el-table-column>
      <el-table-column label="评论内容" align="center">
        <template slot-scope="scope">{{ scope.row.content }}</template>
      </el-table-column>
      <el-table-column label="评论日期" width="240" align="center">
        <template slot-scope="scope">{{
          parseTime(
            scope.row.createDate,
            "{yyyy}-{mm}-{dd} {hh}:{mm}:{ss} 星期{a}"
          )
        }}</template>
      </el-table-column>

      <el-table-column label="操作" width="100" align="center">
        <template slot-scope="scope">
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
              @click="deleteCommentHandle(scope.row)"
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
import { parseTime } from "@/utils";
import { getComment, deleteComment } from "@/api/comment";
export default {
  data() {
    return {
      data: [],
      page: 1,
      limit: 5,
      pagerCount: 5, //页码按钮数量
      total: 0, //总数
      pageSize: [5, 10, 15, 20],
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
    blogId() {
      return this.$route.params.blogId !== ":blogId"
        ? this.$route.params.blogId
        : -1;
    },
  },
  methods: {
    async fetchData() {
      this.listLoading = true;
      const resp = await getComment(this.page, this.limit, this.blogId);
      if (!resp.data) {
        this.data = [];
        return;
      }
      this.data = resp.data.rows;
      this.total = resp.data.total;
      if (this.page > this.pageCount) {
        this.page = this.pageCount;
        this.fetchData();
      }
      this.listLoading = false;
    },
    parseTime,
    deleteCommentHandle(commentInfo) {
      this.$confirm("此操作将永久删除该评论, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await deleteComment(commentInfo.id);
          this.fetchData();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消删除",
          });
        });
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
  },
};
</script>

<style scoped>
.avatar {
  width: 60px;
  border-radius: 5px;
}

.pagination {
  margin-top: 30px;
}
</style>
