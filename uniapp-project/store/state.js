/*
 * @Author: BitCreate
 * @Date: 2024-03-21 16:28:07
 */
export default {
  userInfo: uni.getStorageSync("userInfo") || null,
  historyList: uni.getStorageSync("historyList") || [],
  labelList: uni.getStorageSync("labelList") || [],
};
