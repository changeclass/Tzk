// components/post/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: Object
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    // 用户点击进入详情页
    onTap(event) {
      // console.log(event)
      // const pid = event.currentTarget.dataset.id
      // wx.navigateTo({
      //   url: `/pages/post-detail/post-detail?pid=${pid}`
      // })
      this.triggerEvent('posttap', {
        pid: this.properties.item.postId
      })
    }
  }
})
