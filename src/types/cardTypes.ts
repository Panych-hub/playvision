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
        logo: '<img src="/src/assets/flag.png" style="width: 60px" alt="flag"/>',
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
        logo: '<img src="/src/assets/buy-48.png" style="width: 60px" alt="flag"/>',
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
        logo: '<img src="/src/assets/error.png" style="width: 60px" alt="flag"/>',
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
export const newStage: CardType = {
    id: 'newStage',
    header: {
        info: 'Новый этап',
        exitButton: true
    },
    body: {

        description: [['Сыграйте 1 игру, чтобы получить очки рейтинга и занять место в новом этапе лиг.']]
    },
    footer: {
    }
}
export const rewardForViewing: CardType = {
    id: 'rewardForViewing',
    header: {
        info: 'Награда за просмотр',
    },
    body: {
        logo: '',
        logoColor: '#003370',
        title: 'Вы получили фишки!',
        titleColor: 'white',
        description: [['ADD 9.000M']]
    },
    footer: {
    }
}
export const attention: CardType = {
    id: 'attention',
    header: {
        info: 'Внимание',
        exitButton: true
    },
    body: {

        description: [['Недостаточно фишек для ставка']]
    },
    footer: {
    }
}
export const warning: CardType = {
    id: 'warning',
    header: {
        info: 'Вы получили предупреждение',
    },
    body: {
        logo: '<img src="/src/assets/error.png" style="width: 60px" alt="flag"/>',
        logoColor: redLogo,
        title: 'Вы получили предупреждение',
        titleColor: redTitle,
        description: [['Вы видите это сообщение по следующим причинам:'],
        ['1.Использование неподобающего автара.',
        '2.Оскорбление участников игрового сообщества.',
        '3.покупка фишек в обход игрового магазина.'],
        ['Пожалуйста, следуйте правилам приложения и способствуйте созданию дружественной атмосферы, ' +
        'чтобы избежать возможных последствий, включая бессрочную блокировку аккаунта в случае повторных ' +
        'нарушений.']],
        textConfig: true
    },
    footer: {
        buttons: [{
            color: 'green',
            text: 'Ознакомлен'
        }]
    }
}
export const temporaryBlocking: CardType = {
    id: 'temporaryBlocking',
    header: {
        info: 'Временная блокировка',
    },
    body: {
        logo: '<img src="/src/assets/error.png" style="width: 60px" alt="flag"/>',
        logoColor: redLogo,
        title: 'Ваш аккаунт заблокирован!',
        titleColor: redTitle,
        description: [['Доступ к приложению временно ограничен по следующим причинам:'],
            ['1.Использование неподобающего автара.',
                '2.Оскорбление участников игрового сообщества.',
                '3.покупка фишек в обход игрового магазина.'],
            ['Пожалуйста, следуйте правилам приложения и способствуйте созданию дружественной атмосферы, ' +
            'чтобы избежать возможных последствий, включая бессрочную блокировку аккаунта в случае повторных ' +
            'нарушений.'],
            ['Дата разблокировки: 31.12.2023, 23:59']],
        textConfig: true
    },
    footer: {
        buttons: [{
            color: 'green',
            text: 'Ознакомлен'
        }]
    }
}
export const permanentBlocking: CardType = {
    id: 'permanentBlocking',
    header: {
        info: 'Временная блокировка',
    },
    body: {
        logo: '<img src="/src/assets/error.png" style="width: 60px" alt="flag"/>',
        logoColor: redLogo,
        title: 'Ваш аккаунт заблокирован!',
        titleColor: redTitle,
        description: [['Доступ к приложению временно ограничен по следующим причинам:'],
            ['1.Использование неподобающего автара.',
                '2.Оскорбление участников игрового сообщества.',
                '3.покупка фишек в обход игрового магазина.'],
            ['Если вы считаете, что блокировка была наложена по ошибке, свяжитесь с нашей службой поддержки']],
        textConfig: true
    },
    footer: {
        buttons: [{
            color: 'blue',
            text: 'В поддержку'
        }]
    }
}
export const mailForCheck: CardType = {
    id: 'mailForCheck',
    header: {
        info: 'Почта для чека',
        exitButton: true
    },
    body: {
        description: [['Введите email, на который мы пришлем вам электронный чек']],
        inputField: true
    },
    footer: {
        buttons: [{
            color: 'green',
            text: 'Далее'
        }]
    }
}