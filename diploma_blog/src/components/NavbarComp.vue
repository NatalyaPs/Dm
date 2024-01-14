<template>
    <div class="navbar center">
        <div @click="$router.push('/')" class="navbar_logo">
            <h3>of eco-style</h3>
        </div>
        <div class="navbar_btns">
            <MyButton @click="$router.push('/posts')">Блог</MyButton>
            <MyButton @click="$router.push('/about')">О нас</MyButton>
            <MyButton @click="$router.push('/store')">Store</MyButton>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavbarComp',
};
</script>

<style lang="scss" scoped>
.navbar {
    width: 100%;
    height: 100%;
    background-color: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_logo {
        width: 200px;
        color: #2F4209;
        text-align: center;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    &_btns {
        // width: 400px;
        display: flex;
        gap: 12px;
    }
}
</style>