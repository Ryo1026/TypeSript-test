/* TypeScript */

// 若在宣告時，未提供型別註記，則 TS 會進行推論。
let fakeString = "fuck you";
let age = 28;
let isMale = true;
let nothing = undefined;
let nothingLiterally = null;

// 給未定義的變數提供註記 Union
let canBeNullString: string | null;

// 可在被限制的範圍內重新賦值
canBeNullString = "shit man";
canBeNullString = null;

// 陣列
let normalArr: string[] = ["12", "345"];
let deepArr: string[][] = [["aa", "bb"], ["cc"]];

// 元組
// Tuple ex:經緯度 [180, 23.5]
let tuple0: [number, string, boolean];
tuple0 = [1993, "台北", true];

let tuple1: [string, number][] = [
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

// type 型別化名 (Type Alias)
type Animal = [string, Date, boolean];
let dog: Animal = ["Lulu", new Date(2019, 2, 12), true];
let pig: Animal = ["PuPu", new Date(2020, 10, 26), true];
let fish: Animal = ["KoreaFish", new Date(1989, 5, 5), false];

// 型別擴展：選填型別(?:)的使用
enum Gender {
  male,
  female,
  other,
}
type AccountInfo = {
  account: string;
  password: string;
  nickname?: string | undefined; // 直接定義為 undefined 沒有用
  birth?: Date; // 選填屬性用 ?: 的寫法
  gender?: Gender;
  subscribed: boolean;
};

/* 
若將 undefined 作為物件某些屬性的型別，儘管 undefined 在原生 JS 的意味就是可以放置該屬性為空值，
甚至是不去定義的狀態。
但在 TypeScript 的世界裡：undefined 這種原始型別代表必須存取名為 undefined 這種值，
並不是完全省略定義它！ 
*/

let accountMaxwell: AccountInfo = {
  account: "maxwell.com",
  password: "<hash-password>",
  subscribed: false,
};

// 介面 interface
// interface 可以擴充，可繼承，type則不行
interface User {
  name: String;
  age: number;
}
interface User {
  mail?: String;
}
const player1: User = {
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
let addition = function (para1: number, para2: number): number {
  return para1 + para2;
};
// return 類型不寫的話會自動推論
function stringAdd(a: string, b: string) {
  return a + b;
}
// 箭頭函式同理
const arrowFun1 = () => {};
const arrowFun2 = () => true;
type MathOperator = (n1: number, n2: number) => number;
let powerOpWithNoParamsAnnotation: MathOperator = function (na, nb) {
  return na ** nb;
};

// Enum 列舉
enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
let weekend = WeekDay.Friday;
let birthday: WeekDay = WeekDay.Monday;

// 直播API：獲取直播狀態
// 回傳 number 分別對應不同的狀態  0:成功  -1:失敗  1:直播中
enum LiveStatus {
  SUCCESS = 0,
  FAIL = -1,
  STREAMING = 1,
}
const nowStatus = LiveStatus.STREAMING;

//  斷言 unknown
//  以 as 關鍵字來重新定義資料型別 ex:API回傳的未知格式
type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = (await res.json()) as Data;
}

// 泛型
// 創造 因應不同傳入型別，自動衍生相對應的 function
function print<T>(prop: T) {
  console.log("泛用型別", prop);
}
// 根據情境自動生成
print<number>(9487);
print<boolean>(false);
print("泛型範例");
