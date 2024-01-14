<!-- <select v-model="modelValue" @change="changeOption"></select> -->
<template>
    <select :value="modelValue" @change="changeOption">
        <option disabled value="">Выберите из списка</option>
        <option 
            v-for="option in options"
            :key="option.value" 
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
    <!-- дефолтная опция по умолчанию отключена - option disabled -->
</template>

<script>
export default {
    name: 'MySelect',
    props: {
        modelValue: {
            type: String
        },
        options: {
            // массив объектов выпадающего списка
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    },
};
</script>

<style lang="scss" scoped>

</style>