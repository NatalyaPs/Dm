<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MyButton',
};
</script>

<style lang="scss" scoped>
.btn {
    width: 100px;
    height: 35px;
    padding: 8px, 12px;
    background: none;
    color: darkgreen;
    border: 2px solid grey;
    border-radius: 8px;
}
</style>