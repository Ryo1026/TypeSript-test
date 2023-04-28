"use strict";
/* TypeScript */
// 若在宣告時，未提供型別註記，則 TS 會進行推論。
let fakeString = "fuck you";
let age = 28;
let isMale = true;
let nothing = undefined;
let nothingLiterally = null;
// 給未定義的變數提供註記
let canBeNullString = null;
// 可在被限制的範圍內重新賦值
canBeNullString = "shit man";
canBeNullString = null;
// 以物件型別宣告時，key只能為當初宣告時的那幾個
let info = {
  name: "Vincent",
  age: 30,
  isMale: true,
  knows: undefined,
  identity: null,
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
let arraysArray = [
  [3, 2, 1],
  ["Hello", "World", "C8"],
  [true, false, false],
];
let trapArray = [
  [1, 2],
  ["Hello", "World"],
  [true, false, 123, null],
  ["Srting", undefined],
];
let dog = ["Lulu", new Date(2019, 2, 12), true];
let pig = ["PuPu", new Date(2020, 10, 26), true];
let fish = ["KoreaFish", new Date(1989, 5, 5), false];
let powerOpWithNoParamsAnnotation = function (na, nb) {
  return na ** nb;
};
// Tuple ex:經緯度 [180, 23.5]
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
