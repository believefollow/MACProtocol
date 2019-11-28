

import { randomMac } from '@/unit/tools';

const frameTime = 10;
let curGlobalSendTime = 0;
class Send {
    private curSendTime: number = new Date().getTime();

    private sendTime: number[] = [];

    private result: boolean | string = 'pending';

    constructor() {
      setTimeout(() => this.TryToSend(), Math.random() * 100);
    }

    public TryToSend() {
      // const { curGlobalSendTime } = signleChannel;
      this.curSendTime = new Date().getTime();
      this.sendTime.push(this.curSendTime);
      curGlobalSendTime = this.curSendTime;

      while (!this.CatchCollosion(curGlobalSendTime) && !this.IsSuccess()) {
        console.log('检测正常');
      }
      this.result = this.IsSuccess();
      // return true;
    }

    private IsSuccess() {
      return new Date().getTime() > this.curSendTime + frameTime;
    }

    private CatchCollosion(curGlobalSendTimeTemp: number) {
      return curGlobalSendTimeTemp > this.curSendTime
      && curGlobalSendTimeTemp <= this.curSendTime + frameTime;
    }

    public getSendTime() {
      return this.sendTime;
    }
}
class User {
    private mac: string;

    private send: Send = new Send();

    constructor(type?: string, ran1?:string) {
      // this.mac = type && ran1 ? randomMac(type, ran1)
      //   : !ran1 ? randomMac(type) : randomMac();
      const temp = ran1 ? randomMac(type, ran1) : randomMac(type);
      this.mac = type ? temp : randomMac();
    }

    public getMac(): string {
      return this.mac;
    }

    public getSendHistory(): Array<number> {
      return this.send.getSendTime();
    }
}

const randomInitUser: () => User[] = () => {
  const num = Math.random() * 5;
  const res = [];
  for (let i = 0; i < num; i += 1) {
    res.push(new User());
  }
  return res;
};
export {
  User,
  Send,
  randomInitUser,
};
