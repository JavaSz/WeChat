var postsData = require("../../data/posts-data.js")
// 获取JS文件 必须用相对路径

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
        posts_key:postsData.postList
        // 获取postList
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  },

  onPostTap:function(event){
      var postId = event.currentTarget.dataset.postid;
    //   console.log(postId) 获得postId
      wx.navigateTo({
          url: 'post-detail/post-detail?id='+ postId,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
      })
  }
})