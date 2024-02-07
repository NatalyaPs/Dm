<template>
    <header class="header">
        <NavbarComp></NavbarComp>
    </header>
</template>

<script>
import NavbarComp from './NavbarComp.vue';

export default {
    name: 'HeaderComp',
    components: { NavbarComp }
};
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    min-height: 70px;
    background-color: rgba(93, 137, 3, 0.30);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>