<template>
    <button @click="addCnt">{{ title }} - {{ cnt }}</button>
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
        addCnt() {
            this.cnt++;
            // 이것은 단순히 보여주기를 위함이지 요런식으로 접근을 하지 마세요
            this.$store.state.total++;
        }
    }
}
</script>

<style>

</style>