<template>
    <footer class="footer">
        <p class="footer_text center">напишите нам: schnauzer-eco@po4ta.ru</p>
    </footer>
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
    background-color: rgba(93, 137, 3, 0.30);;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &_text {
        color: #2F4209;
        text-align: center;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}
@media (max-width: 1024px) {
    .footer {
        justify-content: center;
        &_text {
            font-size: 14px;
        }
    }
}
</style>