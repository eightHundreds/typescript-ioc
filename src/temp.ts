import 'reflect-metadata';
import { Inject, Provides } from './typescript-ioc';
// function myDecorator(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ): any {
//   const argTypes: Array<any> = Reflect.getMetadata(
//     'design:paramtypes',
//     target,
//     'sum'
//   );
//   console.log(argTypes);
//   return null;
// }
export abstract class MyBase {
  abstract func(): void;
}
@Provides(MyBase)
export default class MyTemp extends MyBase {
  func(): void {
    console.log('MyTemp called');
  }
  @Inject a: MyTemp2;
  sum(): number {
    console.log(this.a);
    return this.a.value;
  }
}

@Provides(MyBase)
export class MyTemp2 extends MyBase {
  func(): void {
    console.log('MyTemp2 called');
  }
  value: number;
  constructor() {
    super();
    this.value = 2;
    console.log(1234);
  }
}

class MyClient {
  @Inject
  instance: MyBase;
  func(): void {
    this.instance.func();
  }
}
const myclient=new MyClient();
myclient.func();
