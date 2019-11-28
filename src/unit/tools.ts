const doubleRandom:() => string = () => {
  const temp = Math.floor(Math.random() * 256).toString(16).toUpperCase();
  return temp.length === 1 ? `0${temp}` : temp;
};

function ishex(num:string) {
  const validChar = '0123456789ABCDEF';
  const x = num.toUpperCase();
  for (let idx = 0; idx < x.length; idx += 1) {
    if (validChar.indexOf(x.charAt(idx)) < 0) {
      return false;
    }
  }
  return true;
}
function randomMac(type?:string, head?:string) {
  const length = 6;
  const res = [];
  if (!(head && head !== '' && head.length === 2 && ishex(head))) {
    res.push(doubleRandom());
  }
  for (let i = 1; i < length; i += 1) {
    res.push(doubleRandom());
  }
  return type ? res.join(type) : res.join('-');
}
function repeatMockSendData(length: number) {
  let res = '';
  for (let i = 0; i < length; i += 1) {
    res += 'A';
  }
  return res;
}
function randomSendData() {
  return Math.random() * 255;
  // const length = Math.random() * 255;
  // return repeatMockSendData(length);
}
export {
  randomMac,
  randomSendData,
  repeatMockSendData,
};
