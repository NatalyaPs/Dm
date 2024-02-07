<template>
    <nav class="navbar center">
        <div @click="$router.push('/')" class="navbar_logo">
            <h3>of eco-style</h3>
        </div>
        <div class="navbar_btns">
            <MyButton @click="$router.push('/posts')">Блог</MyButton>
            <MyButton @click="$router.push('/about')">О нас</MyButton>
        </div>
    </nav>
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
        transition: 0.2s;
        &:hover {
            text-shadow: 0px 5px 5px rgba(63, 68, 51, 0.59);
    }
    }
    &_btns {
        display: flex;
        gap: 12px;
    }
}
@media (max-width: 1024px) {
    .navbar {
        &_logo {
            width: 100px;
            font-size: 14px;
        }
    }
}
</style>