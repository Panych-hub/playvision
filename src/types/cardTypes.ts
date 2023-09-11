import type {CardType} from "./cardType";
const redLogo: string = '#400f2c'
const redTitle: string = '#e44457'
const greenLogo: string = '#0b5129'
const greenTitle: string = '#38e969'
export const basicMessage: CardType = {
    id: 'basicMessage',
    header: {
        info: 'Название окна',
        exitButton: false
    },
    body: {
        logo: '',
        logoColor: '',
        title: '',
        titleColor: '',
        description: [['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.']],
    },
    footer: {
        buttons: null
    }
}
export const basicCard: CardType = {
    id: 'basicCard',
    header: {
        info: 'Название окна',
    },
    body: {
        logo: '<img src="/src/assets/flag-solid.svg" style="width: 40px" alt="flag"/>',
        logoColor: redLogo,
        title: 'Заголовок',
        titleColor: 'white',
        description: [['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s']],
    },
    footer: {
        buttons: [
            {
                color: 'red',
                text: 'No'
            },
            {
                color: 'green',
                text: 'Yes'
            }]
    }
}

export const thankForPurchase: CardType = {
    id: 'thankForPurchase',
    header: {
        info: 'Благодарим за покупку!',
        exitButton: true
    },
    body: {
        logo: '',
        logoColor: greenLogo,
        title: 'Покупка обрабатывается',
        titleColor: greenTitle,
        description: [['Оплата прошла успешно. Фишки будут начислены на Ваш счет в ближайшее время. Желаем удачной игры!']],
    },
    footer: {
        buttons: [{
            color: 'green',
            text: 'Хорошо!'
        }]
    }
}
export const loginFailed: CardType = {
    id: 'loginFailed',
    header: {
        info: 'Ошибка входа',
        exitButton: true
    },
    body: {
        logo: '',
        logoColor: '#400f2c',
        title: 'Повторный вход',
        titleColor: redTitle,
        description: [['Вы вошли в игру на другом устройстве или в другом окне']],
    },
    footer: {
        buttons: [{
            color: 'green',
            text: 'Перезагрузить'
        }]
    }
}

export const compensation: CardType = {
    id: 'compensation',
    header: {
        info: 'Компенсация'
    },
    body: {
        logo: '',
        logoColor: greenLogo,
        title: 'Доброго времени суток!',
        titleColor: greenTitle,
        description: [['22.05.2023 в игре наблюдались сбои, которые могли повлиять на игровой процесс.',
            'В качестве извинения за причиненные неудобства мы начисляем на Ваш счет фишки!\ ',
            'Удачи в игре!']]
    },
    footer: {
        buttons: [{
            color: 'green',
            text: 'Перезагрузить'
        }]
    }
}