import { postList } from '../../data/data.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    postData: {},
    collected: false,
    _pid: null,
    _postsCollected: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const postData = postList[options.pid]
    this._pid = options.pid
    const postsCollected = wx.getStorageSync('posts_collected')
    this._postsCollected = postsCollected
    const collected = postsCollected[this._pid] || false
    this.setData({
      postData,
      collected
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  // 收藏事件
  onCollect() {
    // 未收藏
    const postsCollected = this._postsCollected
    postsCollected[this._pid] = !this.data.collected

    wx.setStorageSync('posts_collected', postsCollected)
    this.setData({
      collected: !this.data.collected
    })
  }
})
