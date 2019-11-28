<template>
    <div></div>
</template>
<script lang="ts">
import G2 from '@antv/g2';
import {
  Provide, Component, Prop, Vue, Inject,
} from 'vue-property-decorator';
import { User } from '../store/class';
@Component
export default class PackGraph extends Vue {
  @Inject() readonly users: User[] = this.$store.getters.getUsers;

  mount() {
    const res = this.users.map(user => user.getSendHistory().map((time) => {
      const tempObj = { mac: user.getMac(), time };
      return tempObj;
    }));
    console.log(res);
  }
}
</script>
