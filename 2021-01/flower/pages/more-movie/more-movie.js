// pages/more-movie/more-movie.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    _type: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data._type = options.type
    wx.request({
      url: app.gBaseUrl + type,
      data: {
        start: 0,
        count: 12
      },
      success: (res) => {
        this.setData({
          movies: res.data.subjects
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let title = ''
    console.log(this.data._type)
    switch (this.data._type) {
      case 'in_theaters':
        title = '正在热映'
        break
      case 'coming_soon':
        title = '未来上映'
        break
      case 'top250':
        title = 'Top250'
        break
    }
    wx.setNavigationBarTitle({
      title
    })
  },

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
  onPullDownRefresh: function () {
    wx.request({
      url: app.gBaseUrl + this.data._type,
      data: {
        start: 0,
        count: 12
      },
      success: (res) => {
        this.setData({
          movies: res.data.subjects
        })
        wx.stopPullDownRefresh()
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showNavigationBarLoading()
    wx.request({
      url: app.gBaseUrl + this.data._type,
      data: {
        start: this.data.movies.length,
        count: 12
      },
      success: (res) => {
        this.setData({
          movies: this.data.movies.concat(res.data.subjects)
        })
        wx.hideNavigationBarLoading()
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})
