<template>
    <div>
        <h1>{{ count }}</h1>
        <el-row>
            <el-time-select
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="Select time">
</el-time-select>

</el-row>

        <vac :end-time="new Date().getTime() + count * 1000">
            <span slot="process" slot-scope="{ timeObj }">
                {{ timeObj.ceil.s }}
            </span>
            <span slot="finish">Done!</span>
        </vac>
    </div>
</template>
<script>
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
    setup() {
        let count = ref(0);
        return {
            count
        };
    },
    components: {},
    mounted() {
        this.count = 9;
    }
});
</script>
