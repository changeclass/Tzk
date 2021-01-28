import { postList } from '../../data/data.js'
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    postData: {},
    collected: false,
    isPlaying: false,
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
    const _mgr = wx.getBackgroundAudioManager()

    this.setData({
      postData,
      collected,
      _mgr,
      isPlaying: app.gIsPlayingMusic
    })
    _mgr.onPlay(this.onMusicStart)
    _mgr.onPause(this.onMusicStop)
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
  // 分享事件
  onShare() {
    wx.showActionSheet({
      itemList: ['分享到qq']
    })
  },
  // 收藏事件
  async onCollect() {
    // 未收藏
    const postsCollected = this._postsCollected
    const flag = !this.data.collected
    postsCollected[this._pid] = flag

    wx.setStorageSync('posts_collected', postsCollected)
    this.setData({
      collected: flag
    })
    wx.showToast({
      title: flag ? '收藏成功' : '取消收藏',
      duration: 2000
    })
  },
  // 开始音乐事件
  onMusicStart() {
    const mgr = this.data._mgr
    const musicData = this.data.postData.music
    mgr.src = musicData.url
    mgr.title = musicData.title
    app.gIsPlayingMusic = true
    this.setData({
      isPlaying: true
    })
  },
  // 停止音乐事件
  onMusicStop() {
    const mgr = this.data._mgr
    mgr.pause()
    app.gIsPlayingMusic = false

    this.setData({
      isPlaying: false
    })
  }
})
