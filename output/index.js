"use strict";
/* TypeScript */
Object.defineProperty(exports, "__esModule", { value: true });
require("./unknown");
// 若在宣告時，未提供型別註記，則 TS 會進行推論。
let fakeString = "fuck you";
let age = 28;
let isMale = true;
let nothing = undefined;
let nothingLiterally = null;
// 給未定義的變數提供註記 Union
let canBeNullString;
// 可在被限制的範圍內重新賦值
canBeNullString = "shit man";
canBeNullString = null;
// 陣列
let normalArr = ["12", "345"];
let deepArr = [["aa", "bb"], ["cc"]];
// 元組
// Tuple ex:經緯度 [180, 23.5]
let tuple0;
tuple0 = [1993, "台北", true];
let tuple1 = [
  ["男", 23],
  ["女", 26],
];
// 以物件型別宣告時，key只能為當初宣告時的那幾個
let info = {
  name: "Vincent",
  age: 30,
  isMale: true,
  knows: undefined,
  identity: null,
};
// hover 可以看見 TS 對型別的推論
let arraysArray = [
  [3, 2, 1],
  ["Hello", "World", "C8"],
  [true, false, false],
];
let trapArray = [
  [1, 2],
  ["Hello", "World"],
  [true, false, 123, null],
  ["String", undefined],
];
let dog = ["Lulu", new Date(2019, 2, 12), true];
let pig = ["PuPu", new Date(2020, 10, 26), true];
let fish = ["KoreaFish", new Date(1989, 5, 5), false];
// 型別擴展：選填型別(?:)的使用
var Gender;
(function (Gender) {
  Gender[(Gender["male"] = 0)] = "male";
  Gender[(Gender["female"] = 1)] = "female";
  Gender[(Gender["other"] = 2)] = "other";
})(Gender || (Gender = {}));
/*
若將 undefined 作為物件某些屬性的型別，儘管 undefined 在原生 JS 的意味就是可以放置該屬性為空值，
甚至是不去定義的狀態。
但在 TypeScript 的世界裡：undefined 這種原始型別代表必須存取名為 undefined 這種值，
並不是完全省略定義它！
*/
let accountMaxwell = {
  account: "maxwell.com",
  password: "<hash-password>",
  subscribed: false,
};
const player1 = {
  name: "Zafer",
  age: 22,
};
/*
I.可以對物件做出的行為：
  1.對物件裡的屬性覆寫值，其值的型別與該屬性對應的型別相同
  2.對物件整體覆寫，其覆寫的物件格式必須完全相同
II.常見會被 TS 警告的情形有以下：
  1.對物件裡的屬性插入或覆寫錯誤的型別值
  2.覆寫整個物件時的格式錯誤（少一鍵 / 多一鍵 / 沒多沒少鍵，但至少其中一鍵對應值之型別錯誤）
  3.隨意新增原先不存在該物件的屬性
*/
// 函式的型別註記寫法
let addition = function (para1, para2) {
  return para1 + para2;
};
// return 類型不寫的話會自動推論
function stringAdd(a, b) {
  return a + b;
}
// 箭頭函式同理
const arrowFun1 = () => {};
const arrowFun2 = () => true;
let powerOpWithNoParamsAnnotation = function (na, nb) {
  return na ** nb;
};
// Enum 列舉
var WeekDay;
(function (WeekDay) {
  WeekDay[(WeekDay["Monday"] = 0)] = "Monday";
  WeekDay[(WeekDay["Tuesday"] = 1)] = "Tuesday";
  WeekDay[(WeekDay["Wednesday"] = 2)] = "Wednesday";
  WeekDay[(WeekDay["Thursday"] = 3)] = "Thursday";
  WeekDay[(WeekDay["Friday"] = 4)] = "Friday";
  WeekDay[(WeekDay["Saturday"] = 5)] = "Saturday";
  WeekDay[(WeekDay["Sunday"] = 6)] = "Sunday";
})(WeekDay || (WeekDay = {}));
let weekend = WeekDay.Friday;
let birthday = WeekDay.Monday;
// 直播API：獲取直播狀態
// 回傳 number 分別對應不同的狀態  0:成功  -1:失敗  1:直播中
var LiveStatus;
(function (LiveStatus) {
  LiveStatus[(LiveStatus["SUCCESS"] = 0)] = "SUCCESS";
  LiveStatus[(LiveStatus["FAIL"] = -1)] = "FAIL";
  LiveStatus[(LiveStatus["STREAMING"] = 1)] = "STREAMING";
})(LiveStatus || (LiveStatus = {}));
const nowStatus = LiveStatus.STREAMING;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdCQUFnQjs7QUFFaEIscUJBQW1CO0FBQ25CLDRCQUE0QjtBQUM1QixJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDNUIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQztBQUN4QixJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUU1QixvQkFBb0I7QUFDcEIsSUFBSSxlQUE4QixDQUFDO0FBRW5DLGdCQUFnQjtBQUNoQixlQUFlLEdBQUcsVUFBVSxDQUFDO0FBQzdCLGVBQWUsR0FBRyxJQUFJLENBQUM7QUFFdkIsS0FBSztBQUNMLElBQUksU0FBUyxHQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLElBQUksT0FBTyxHQUFlLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRWpELEtBQUs7QUFDTCwyQkFBMkI7QUFDM0IsSUFBSSxNQUFpQyxDQUFDO0FBQ3RDLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFNUIsSUFBSSxNQUFNLEdBQXVCO0lBQy9CLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNULENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztDQUNWLENBQUM7QUFFRiwyQkFBMkI7QUFDM0IsSUFBSSxJQUFJLEdBQUc7SUFDVCxJQUFJLEVBQUUsU0FBUztJQUNmLEdBQUcsRUFBRSxFQUFFO0lBQ1AsTUFBTSxFQUFFLElBQUk7SUFDWixLQUFLLEVBQUUsU0FBUztJQUNoQixRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFRix1QkFBdUI7QUFDdkIsSUFBSSxX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
