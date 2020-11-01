let app = new Vue({
  el: ".main",
  data: {
    todoItem: [],
    todoContent: "",
    // 0为全部 1为未完成 2为已完成
    state: "0",
  },
  computed: {
    showTodos: {
      get() {
        let lists = [];
        this.todoItem.forEach((e) => {
          if (this.state == "0") {
            if (e.show) {
              lists.push(e);
            }
          } else if (this.state == "1") {
            if (e.show && !e.state) {
              lists.push(e);
            }
          } else {
            if (e.show && e.state === true) {
              lists.push(e);
            }
          }
        });
        return lists;
      },
    },
  },
  methods: {
    // 添加待办
    add() {
      let item = {
        //  待办事件的ID 唯一
        id: this.todoItem.length,
        // 待办事件内容
        content: this.todoContent,
        // 待办时间的状态
        state: false,
        // 是否删除
        show: true,
        // 编辑
        edit: false,
      };
      this.todoItem.push(item);
      this.todoContent = "";
    },
    // 删除
    destroy(id) {
      this.todoItem.forEach((element, index) => {
        if (element.id == id) {
          this.todoItem[id].show = false;
        }
      });
    },
    //TODO 改变内容
    chamgeContent(id, content) {
      this.todoItem.forEach((element, index) => {
        if (element.id == id) {
          this.todoItem[id].content = false;
        }
      });
    },
    // 已完成的事件
    screen(flag) {
      this.state = flag;
    },
    // 编辑
    edit(id) {
      this.todoItem.forEach((element, index) => {
        if (element.id == id) {
          this.todoItem[id].edit = !this.todoItem[id].edit;
        }
      });
    },
  },
});
