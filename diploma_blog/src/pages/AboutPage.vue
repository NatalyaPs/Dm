<template>
    <div class="about center">
        <div class="about_photo"><img src="./../../public/shef.jpg" alt="заводчик"></div>
        <div class="about_freepik">Изображение от <a href="https://ru.freepik.com/free-photo/medium-shot-woman-and-dog-in-bed_18407871.htm#page=2&query=%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0%20%D1%81%20%D1%86%D0%B2%D0%B5%D1%80%D0%B3%D1%88%D0%BD%D0%B0%D1%83%D1%86%D0%B5%D1%80%D0%BE%D0%BC&position=24&from_view=search&track=ais&uuid=947e3849-1c9c-4749-95f7-93d24e2bec61">Freepik</a>
        </div>
        <div class="about_text">
            <p>Я - заводчик собак породы цвергшнауцер и ризеншнауцер.</p>
            <p>Это призвание, любовь и большая отвественность.</p>
            <p>Мои питомцы имеют хорошие породные качества, красивый внешний вид и чудесный характер.</p>
            <p>Если вы хотите узнать больше об этой прекрасной породе, увидеть щенков или узнать новости о мероприятиях, в которых мы учавствуем, вы можете прочитать наш блог.</p>
            <p>Если есть вопросы, напишите: </p>
            <p>schnauzer-eco@po4ta.ru</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutPage',
};
</script>

<style lang="scss" scoped>
.about {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px auto;
    gap: 60px;
    color: #2F4209;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &_photo {
        max-width: 600px;
        max-height:900px;
        & img {
            width: 100%;
            border-radius: 12px;
        }
    }
    &_freepik {
        font-size: 12px;
    }
    &_text {
        border: 2px solid rgba(93, 137, 3, 0.30);
        border-radius: 12px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
        font-size: 24px;
    }
}
</style>