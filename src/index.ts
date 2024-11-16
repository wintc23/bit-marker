const INT_MAX_BIT = 32;

/**
 * 位标记类，用于管理和操作位集合。
 */
export class BitMarker {
  private nums: number[] = []; // 存储位集合的整数数组
  private bitCount: number = 0; // 当前位集合的总位数

  /**
   * 构造函数，初始化位标记对象。
   * @param nums 初始的整数数组，可以包含 0 到多个正整数，用于设置位集合的初始值
   */
  constructor(nums: number[] = []) {
    this.setValues(nums);
  }

  /**
   * 设置指定位的标记。
   * @param bitIndex 指定位 0 ~ n
   * @param value 要设置的标记
   */
  public set(bitIndex: number, value: boolean) {
    if (bitIndex < 0) {
      return; // 忽略负索引
    }

    if (bitIndex >= this.bitCount) {
      this.resize(bitIndex + 1); // 如果索引超出当前容量，调整内部数组大小
    }

    const numIndex = Math.floor(bitIndex / INT_MAX_BIT); // 计算整数数组的索引
    const bitOffset = bitIndex % INT_MAX_BIT; // 计算位偏移量
    const mask = 1 << bitOffset; // 创建掩码

    if (value) {
      this.nums[numIndex] |= mask; // 设置位为 1
    } else {
      this.nums[numIndex] &= ~mask; // 清除位为 0
    }
  }

  /**
   * 根据指定位的标记
   * @param bitIndex 指定位 0 ~ n
   * @returns 返回该位的标记
   */
  public get(bitIndex: number): boolean {
    const numIndex = Math.floor(bitIndex / INT_MAX_BIT); // 计算整数数组的索引
    const bitOffset = bitIndex % INT_MAX_BIT; // 计算位偏移量
    const mask = 1 << bitOffset; // 创建掩码

    return (this.nums[numIndex] & mask) !== 0; // 检查位是否为 1
  }

  /**
   * 清空所有标记
   */
  public clear() {
    this.nums = []; // 清空整数数组
    this.bitCount = 0; // 重置位计数
  }

  /**
   * 设置位标记的值
   * @param values 初始的整数数组，用于设置位集合的初始值
   */
  public setValues(values: number[]) {
    this.nums = values; // 设置新的整数数组
    this.bitCount = values.length * 32; // 更新位计数
  }

  /**
   * 获取当前位标记的值
   * @returns 返回当前位集合的整数数组
   */
  public getValues(): number[] {
    return this.nums; // 返回整数数组
  }

  /**
   * 调整位标记数组的大小。
   * @param newSize 新数组需要支持的位数
   */
  private resize(newSize: number) {
    const numsCount = Math.ceil(newSize / INT_MAX_BIT); // 计算需要的整数数组长度
    while (this.nums.length < numsCount) {
      this.nums.push(0); // 填充新的整数
    }
    this.bitCount = newSize; // 更新位计数
  }
}