<template>
    <div class="footer">
        <p class="footer_text center">напишите нам: schnauzer-eco@po4ta.ru</p>
    </div>
</template>

<script>
export default {
    name: 'FooterComp',
};
</script>

<style lang="scss" scoped>
.footer {
    min-width: 100%;
    min-height: 70px;
    background-color: rgba(93, 137, 3, 0.30);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    // position: absolute;
    // bottom: 0;
    // left: 0;
    &_text {
        color: #2F4209;
        text-align: center;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}
</style>