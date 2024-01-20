<template>
    <div class="content center">
        <div class="main">
            <div class="main_photo"><img src="./../../public/mainDog.png" alt="photo of a dog"></div>
            <div class="main_info">
                <div class="main_info__subtitle">
                    <h2  class="main_info__subtitle-text"> Ризеншнауцеры Цвергшнауцеры</h2>
                </div>
                <div class="main_info__title">
                    <h1  class="main_info__title-text">Питомник of eco-style</h1>
                </div>
            </div>
        </div>
        <div class="description">
            <div>
                <p class="description_text">Шнауцеры - собаки с благородным характером. Они являются отличными компаньонами и любящими членами семьи, энергичные, умные и ориентированные на человека, идеальные партнеры для активных владельцев и для семей с детьми. 
                </p>
            </div>
            <div>
                <div class="description_txt-btn">
                    <p class="description_text description_txt-btn__txt">
                        Вы можете прочитать статьи о породе, увидеть наших щенков, узнать расписание выставок и многое другое в нашем блоге 
                    </p>
                    <div class="description_txt-btn__btn">
                        <MyButton @click="$router.push('/posts')">Блог</MyButton>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';

export default {
    name: 'MainPage',
    components: { MyButton }
};
</script>

<style lang="scss" scoped>
.content {
    max-width: auto;//100%;
    height: 900px;
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 64px;
}
.main {
    max-width: 100%;
    height: 524px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    &_photo {
        width: 50%;
        padding-top: 64px;
        padding-bottom: 52px;
        display: flex;
        justify-content: center;
    }
    &_info {
        width: 50%;
        height: 523px; 
        padding: 36px 84px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 117px; 
        height: 136px;
        color: #2F4209;
        text-align: center;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        &__subtitle {
            width: 500px;
            height: 136px;
            display: flex;
            justify-content: center;
        }
        &__subtitle-text {
            font-size: 55px;
        }
        &__title {
            width: 422px;
            height: 234px;
            display: flex;
            justify-content: center;
        }
        &__title-text {
            font-size: 70px;
            text-shadow: 0px 20px 20px rgba(144, 191, 49, 0.59);
        }
    }
}
.description {
    max-height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 66px;
    &_text {
        color: #2F4209;;
        text-align: center;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    &_txt-btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 66px;
        &__txt {
            width: calc(100% / 6 * 4);
        }
        &__btn {
            width: calc(100% / 6);
            display: flex;
            justify-content: flex-end;
        }
    }
}
@media (max-width: 1140px) {
    .content {
        gap: 0px;
        height: auto;
    }
}
@media (max-width: 1024px) {
    .content {
        height: auto;
        gap: 50px;
    }
    .main {
        min-height: 344px;
        flex-direction: column;
        &_photo {
            width: 100%;
            padding-top: 0;
            padding-bottom: 0;
        }
        &_photo img{
            max-width:100%;
            height: auto;
        }
        &_info {
            width: 100%;
            height: 100%;
            padding: 12px 12px 0;
            align-items: center;
            gap: 48px;
            &__subtitle {
                width: 100%;
                height: auto;
            }
            &__subtitle-text {
                font-size: 32px;
            }
            &__title {
                width: 306px;
                height: auto;;
            }
            &__title-text {
                font-size: 52px;
            }
        }
    }
    .description {
        margin-bottom: 36px;
        gap: 50px;
        justify-content: center;
        &_text {
            font-size: 18px;
            width: 100%;
        }
        &_txt-btn {
            flex-direction: column;
            width: 100%;
            &__btn {
                width: 100%;
                justify-content: center;
            }
        }
    }
}
@media (max-width: 360px) {
    .main {
        height: auto;
        flex-direction: column;
        justify-content: center;
    }
    .description {
        &_txt-btn {
            flex-direction: column;
            justify-content: center;
            &__txt {
                width: 100%;
            }
            &__btn {
                width: 100%;
                justify-content: center;
            }
        }
    }
}
</style>