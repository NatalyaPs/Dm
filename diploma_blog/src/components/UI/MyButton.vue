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
    border: 1px solid #517113;
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition: 0.2s;
    &:hover {
        background-color: #688e1a;
    }
}
@media (max-width: 1024px) {
    .btn {
        width: 90px;
        font-size: 14px;
    }
}
</style>