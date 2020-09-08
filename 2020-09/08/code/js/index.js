// 创建单例模式
let matchRender = (function ($) {
  // 获取显示用户的容器
  let $userList = $(".userList"),
    // 找到无序列表容器
    $wrapper = $userList.find("ul"),
    // 如果没有用户时提示的文字容器
    $tip = $userList.find(".tip");
  // 搜索按钮
  $searchBtn = $(".searchBtn");
  // 每页显示条数
  let limit = 10,
    // 总页数
    pageNum = 1,
    // 总数
    total = 0,
    // 页数
    page = 1,
    // 搜索内容
    search = "",
    // 是否执行的标志
    isRun = false;
  // 获取数据
  let queryDate = function queryDate() {
    axios
      .get("/getMatchList", {
        params: {
          limit,
          page,
          search,
        },
      })
      .then((result) => {
        // 处理总页数条数等
        pageNum = parseFloat(result.pageNum);
        total = parseFloat(result.total);
        return result;
      })
      .then(bindHTML);
  };
  // 数据绑定
  let bindHTML = function bindHTML(result) {
    let { code, list = [] } = result;
    if (parseFloat(code) !== 0) {
      // 获取的数据并不是想要的
      $wrapper.css("display", "none");
      $tip.css("display", "block");
      return;
    }
    // 获取的数据是想要的
    $wrapper.css("display", "block");
    $tip.css("display", "none");
    let $frg = $(document.createDocumentFragment());
    list.forEach((item, index) => {
      let { id, name, picture, sex, matchId, slogan, voteNum, isVote } = item;
      $frg.append(`<li>
                <a href="detail.html?userId=${id}">
                    <img src="${picture}" alt="${name}" class="picture">
                    <p class="title">
                        <span>${name}</span>
                        |
                        <span>编号 #${matchId}</span>
                    </p>
                    <p class="slogan">${slogan}</p>
                </a>
                <div class="vote">
                    <span class="voteNum">${voteNum}</span>
                    ${
                      // 根据是否投过票,判断是否显示 "投他一票" 按钮
                      parseFloat(isVote) === 0
                        ? `<a href="javascript:;" class="voteBtn">投他一票</a>`
                        : ""
                    }
                
                </div>
            </li>`);
    });
    $wrapper.append($frg);
    $frg = null;
    // 最新数据加载完成
    isRun = false;
  };
  return {
    init: function init() {
      // 展示第一页内容
      queryDate();
      // 加载更多数据
      $(window).on("scroll", () => {
        let {
          clientHeight,
          scrollTop,
          scrollHeight,
        } = document.documentElement;
        if (clientHeight + scrollTop + 100 >= scrollHeight) {
          // 即将到达页面底部
          // 如果正在加载中，那么不加载数据
          if (isRun) return;
          // 如果所有数据都加载完成了，那么不在加载
          if (page >= pageNum) {
            $(".none").css("display", "block");
            return;
          }
          isRun = true;
          page++;
          queryDate();
        }
      });
      // 点击事件
      $searchBtn.tap(() => {
        if (isRun) return;
        isRun = true;
        // 获取按钮上方的input框的值
        search = $searchBtn.prev("input").val().trim();
        page = 1;
        // 清空之前的内容
        $wrapper.html("");
        queryDate();
      });
    },
  };
})(Zepto);

matchRender.init();
