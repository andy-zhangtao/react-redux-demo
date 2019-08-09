// 定义 State 结构类型
// export type StoreState = number;
export type StoreState = {
    value: number,
    idx: number,
};

let defaultStore: StoreState;
defaultStore = {
    value:0,
    idx:0,
};
export default defaultStore;