class myDate extends Date {
  constructor() {
    super();
  }
  getFormattedDate() {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

let date = new myDate();

console.log(date.getFormattedDate()); // 27-Oct-2020
