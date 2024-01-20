<template>
    <div class="not-found center">
        <h2 class="not-found_num">404</h2>
        <h2>страница не найдена</h2>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
};
</script>

<style lang="scss" scoped>
.not-found {
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    padding-top: 10%;
    color: #2F4209;
    text-align: center;
    font-family: Merriweather Sans;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    &_num {
        text-shadow: 0px 20px 20px rgba(144, 191, 49, 0.59);
        font-size: 70px;
    }
}
</style>