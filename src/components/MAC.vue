<template><div id="mac">
  <div>{{ users | string }}</div>
  <div>
    <label>初始化数量</label>
    <ul>
      <li>站点</li>
      <li>信道</li>
      <li>时间-传输数据表</li>
    </ul>
  </div>
  <div>
    <label>效率分析</label>
    <ol>
      <li>日志</li>
      <li>
        <p>性能结果</p>
        <ul>
          <li>负载</li>
          <li>发送成功率</li>
          <li>吞吐量</li>
        </ul>
      </li>
    </ol>
  </div>

  <div>
    <button @click="increment">下一步</button>
    <button @click="decrement">下次传输</button>
  </div>
  <div>
    <label>协议选择</label>
    <select>
      <option value ="0">Pure ALOHA</option>
      <option value ="1">Slotted ALOHA</option>
      <option value ="2">1-persistent CSMA</option>
      <option value ="3">Nonpersistent CSMA</option>
    </select>
  </div>
</div>
</template>
<script lang="ts">
import {
  Provide, Component, Prop, Vue, Inject,
} from 'vue-property-decorator';
import { randomMac } from '@/unit/tools';

class User {
  private mac: string = '';

  constructor(type?: string, ran1?:string) {
    const temp = ran1 ? randomMac(type, ran1) : randomMac(type);
    this.mac = type ? temp : randomMac();
  }
}
@Component
export default class MAC extends Vue {
  @Inject() readonly users: User[] = this.$store.getters.getUsers;

  increment() {
    this.$store.commit('increment');
  }

  minusPriceAsync() {
    this.$store.dispatch('minusPriceAsync', 5); // 分发actions中的minusPriceAsync这个异步函数
  }
}


</script>
<style scoped>
  #app {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-items: center;
  }

</style>
