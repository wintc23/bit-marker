## 功能
使用二进制位来标记 bool 状态，位数可无限扩展，因为标记位的可扩展性，你需要通过一个数组而不是整数来初始化 BitMarker。
数组中的每个元素可以表示 32 个 bool 状态，当标记数超过 32 时，会自动扩展。

## 用法
### 安装
```
npm install bit-marker
```

### 示例
```ts
import BitMarker from 'bit-marker';

// 有新功能上线时，出现功能引导，每个功能仅出现一次，使用 BitMarker 对出现过的引导状态进行标记

enum FunctionGuide {
    A = 0, // 功能 A
    B = 1, // 功能 B
    C = 2,
    D = 3,
}

// 1. 初始化
const initStatus = []; // 初始标记，从数据库读出或者初始化
const bitMarker = new BitMarker(initStatus);

// 2. 设置标记
// 功能 A 已引导
bitMarker.set(FunctionGuide.A, true);

// 3. 获取标记
const isGuideA = bitMarker.get(FunctionGuide.A);
console.log(isGuideA); // true
const isGuideB = bitMarker.get(FunctionGuide.B);
console.log(isGuideB); // false
```

### API

#### constructor(initStatus: number[])
初始化，initStatus 为初始标记，从数据库读出或者初始化

#### set(bit: number, value: boolean)
设置标记，bit 为标记位，value 为标记值，true 为已标记，false 为未标记。

#### get(bit: number)
获取标记，bit 为标记位

#### setValues(values: number[])
接收一个整数数组，每个元素有效值为 [0, 2 ^ 32 - 1]，每个数字表示 32 个标记位，当标记数超过 32 时，会自动扩展。

#### getValues()
获取所有标记组成的数组。

#### clear()
清空所有标记

## 欢迎反馈
1. 提交 issue
2. 提 PR

## 作者
**[牛书书](https://wintc.top/about?from=bit-marker)**
[Github](https://github.com/wintc23)
