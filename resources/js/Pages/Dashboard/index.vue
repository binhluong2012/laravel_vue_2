<template>
<v-app>
      <v-main>
        <v-container>Hello world</v-container>
        <h1>{{ count }}</h1>
        <vac :end-time="new Date().getTime() + count * 1000">
            <span slot="process" slot-scope="{ timeObj }">
                {{ timeObj.ceil.s }}
            </span>
            <span slot="finish">Done!</span>
        </vac>
      </v-main>
    </v-app>
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
