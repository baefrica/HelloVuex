<template>
    <div>
        <button @click="addOneCnt">{{ title }} 1 - {{ cnt }}</button>
        <button @click="addTenCnt">{{ title }} 10 - {{ cnt }}</button>
        <button @click="addRandomCnt">{{ title }} ? - {{ cnt }}</button>
        <button @click="asyncCnt">{{ title }} 비동기 - {{ cnt }}</button>
    </div>
</template>

<script>
export default {
    name: "SubjectView",
    
    props: {
        title: String,
    },

    data() {
        return {
            cnt: 0
        }
    },

    methods: {
        addOneCnt() {
            this.cnt++;
            // 얘만 Action 을 이용해 고침
            this.$store.dispatch('addOne');
        },

        addTenCnt() {
            this.cnt += 10;
            // 값을 넘김
            this.$store.commit('ADD_TEN', 10)
        },

        addRandomCnt() {
            let num = Math.round(Math.random() * 100);
            this.cnt += num;
            // 객체를 넘김
            this.$store.commit('ADD_RANDOM', { num })
        },

        asyncCnt() {
            this.cnt++;
            this.$store.dispatch('asyncAddOne');
        }
    }
}
</script>

<style>

</style>