<template>
    <select 
        :value="modelValue" 
        @change="changeOption"
        class="select"
    >
        <option disabled value="">Сортировка</option>
        <option 
            v-for="option in options"
            :key="option.value" 
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
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
.select {
    border: 1px solid rgba(93, 137, 3, 0.30);;
    border-radius: 8px;
    color: #2F4209;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-size: 16px;
    padding-left: 12px;
    padding-right: 12px;
}
</style>