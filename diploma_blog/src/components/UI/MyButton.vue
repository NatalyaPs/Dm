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
    width: 120px;
    height: 40px;
    border-radius: 10px;
    background: #517113;
    color: white;
    border: 1px solid #517113;
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>