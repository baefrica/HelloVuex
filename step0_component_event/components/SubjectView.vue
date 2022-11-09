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
            this.$emit('add-cnt');
        }
    }
}
</script>

<style>

</style>