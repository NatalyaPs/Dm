<template>
    <div class="content center">
        <div class="main">
            <div class="main_photo"><img src="./../../public/mainDog.png" alt="photo dog"></div>
            <div class="main_info">
                <div class="main_info__subtitle">
                    <h2  class="main_info__subtitle-text"> Ризеншнауцеры Цвергшнауцеры</h2>
                </div>
                <div class="main_info__title">
                    <h1  class="main_info__title-text">Питомник of eco-style</h1>
                </div>
                <!-- <h2 class="main_info__subtitle"> Ризеншнауцеры Цвергшнауцеры</h2> -->
                <!-- <h1 class="main_info__title">Питомник of eco-style</h1> -->
            </div>
        </div>
        <div >
            <div>
                <p>Шнауцеры - собаки с благородным характером. Они являются отличными компаньонами и любящими членами семьи, энергичные, умные и ориентированные на человека, идеальные партнеры для активных владельцев и для семей с детьми. 
                </p>
            </div>
            <div>
                <div>
                    <p>
                        Вы можете прочитать статьи о породе,  увидеть наших щенков, узнать расписание выставок и многое другое в нашем блоге 
                    </p>
                    <MyButton>Блог</MyButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';

export default {
    name: 'MainPage',
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { MyButton }
};
</script>

<style lang="scss" scoped>
.content {
    // width: 1400px;
    width: 100%;
    height: 900px;
    margin-top: 32px;
}
.main {
    // width: 1400px;
    width: 100%;
    height: 524px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &_photo {
        width: 565px;
        // width: 670px;
        // height: 490px;
        padding-top: 64px;
        padding-bottom: 52px;
        display: flex;
        justify-content: center;
    }
    &_info {
        // width: 670px;
        width: 586px;
        height: 523px;
        padding: 36px 84px 0;
        display: flex;
        flex-direction: column;
        // justify-content: center;
        gap: 117px;
        height: 136px;
        color: #2F4209;
        text-align: center;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        &__subtitle {
            width: 502px;
            height: 136px;

        }
        &__subtitle-text {
            font-size: 55px;
        }
        &__title {
            width: 448px;
            height: 234px;
        }
        &__title-text {
            font-size: 70px;
            text-shadow: 0px 20px 20px rgba(144, 191, 49, 0.59);
        }
    }
}
</style>