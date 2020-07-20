export * from './teachme';
export * from './resource';

export interface TypeContainer<T, D> extends Iterable<T> {
  getItem(index: number): T;
  changeIndex(item: T, index: number): void;
  addNewItem(index?: number, data?: D): T;
  removeItem(item: T): void;
}
