// .setItem : Tạo key và value 
localStorage.setItem("name","cường bé bỏng");

//.getItem : lấy value của key
let nameByLocal =  localStorage.getItem("name");
console.log(nameByLocal);

// .removeItem : xóa theo key
// localStorage.removeItem("name");

// .clear : xóa hết
// localStorage.clear();

// cách lưu giá chị là mảng hoặc obj lên localstorage
let todos = [
    {id: 0, name: "chơi game", status: true},
    {id: 1, name: "xem phim", status: false},
];

// kiểu dữ liệu JSon 

// JSON.stringify : chuyển mảng hoặc obj về dạng JSON
localStorage.setItem("listTodo",JSON.stringify(todos));

// JSON.parse : chuyển JSON về kiểu dữ liệu mảng or obj
let data = JSON.parse( localStorage.getItem("listTodo"));
console.log(data);

