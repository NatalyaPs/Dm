<template>
    <input 
        :value="modelValue"
        @input="updateInput"
        class="input"
        type="text"
    >
</template>

<script>
export default {
    name: 'MyInput',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);  // во Vue3 особенность v-model - 'update:modelVale' - с любым атрибутом
        }
    },
};
</script>

<style lang="scss" scoped>
.input {
    width: 100%;
    padding: 12px;
    margin-top: 24px;
    border: 1px solid rgba(93, 137, 3, 0.30);;
    border-radius: 8px;
    margin-top: 12px;
}
</style>