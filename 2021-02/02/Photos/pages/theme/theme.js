import {
    Theme
} from './theme-model'
const theme = new Theme()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: null,
        name: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const id = options.id
        const name = options.name
        this.data.id = id
        this.data.name = name

        this._loadDate()
    },
    onReady: function () {
        wx.setNavigationBarTitle({
            title: this.data.name
        })
    },
    _loadDate: function () {
        theme.getProductsData(this.data.id, (data) => {
            this.setData({
                themeInfo: data
            })
        })
    }
})