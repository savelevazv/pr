import { FC, ReactNode } from "react";
import { CenteredLayout } from "../components/Layouts/CenteredLayout";
import { CenteredLayoutBody } from "../components/Layouts/CenteredLayoutBody";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Flex } from "../styles/Flex.styled";
import { StyledH1, StyledH2, StyledH3, StyledP } from "../styles/Fonts.styled";

export interface PrivacyPointProps {
    title: string
    info: ReactNode
}

const dataPrivacyArr = [
    {
        title: '1. ОПРЕДЕЛЕНИЕ ТЕРМИНОВ',
        info: <>
            1.1 В настоящей Политике конфиденциальности используются следующие термины:<br />
            1.1.1. «Администрация сайта Сервиса (далее – Администрация сайта) » – уполномоченные сотрудники на управления сайтом, которые организуют и (или) осуществляет обработку персональных данных, а также определяет цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.<br />
            1.1.2. «Персональные данные» - любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).<br />
            1.1.3. «Обработка персональных данных» - любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.<br />
            1.1.4. «Конфиденциальность персональных данных» - обязательное для соблюдения Оператором или иным получившим доступ к персональным данным лицом требование не допускать их распространения без согласия субъекта персональных данных или наличия иного законного основания.<br />
            1.1.5. «Пользователь сайта Сервиса (далее Пользователь)» – лицо, имеющее доступ к Сайту, посредством сети Интернет и использующее сайт Сервиса.<br />
            1.1.6. «Cookies» — небольшой фрагмент данных, отправленный веб-сервером и хранимый на компьютере пользователя, который веб-клиент или веб-браузер каждый раз пересылает веб-серверу в HTTP-запросе при попытке открыть страницу соответствующего сайта.<br />
            1.1.7. «IP-адрес» — уникальный сетевой адрес узла в компьютерной сети, построенной по протоколу IP.
        </>
    },
    {
        title: '2. ОБЩИЕ ПОЛОЖЕНИЯ',
        info: <>
            2.1. Использование Пользователем сайта Сервиса означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя.<br />
            2.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование сайта Сервиса.<br />
            2.3. Настоящая Политика конфиденциальности применяется только к сайту Сервиса «Promocodeshub». Сервис не контролирует и не несет ответственность за сайты третьих лиц, на которые Пользователь может перейти по ссылкам, доступным на сайте Сервиса.<br />
            2.4. Администрация сайта не проверяет достоверность персональных данных, предоставляемых Пользователем сайта Сервиса.
        </>
    },
    {
        title: '3. ПРЕДМЕТ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ',
        info: <>
            3.1. Настоящая Политика конфиденциальности устанавливает обязательства Администрации сайта Сервиса по неразглашению и обеспечению режима защиты конфиденциальности персональных данных, которые Пользователь предоставляет по запросу Администрации сайта при регистрации на сайте Сервиса или при подписке на рассылку.<br />
            3.2. Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности, предоставляются Пользователем самостоятельно в процессе использования сайта Сервиса, а именно: имя, фамилия, телефон, адрес электронной почты, адрес проживания, адреса аккаунтов в социальных сетях.<br />
            3.3. Сервис защищает Данные, которые автоматически передаются в процессе просмотра рекламных блоков и при посещении страниц, на которых установлен статистический скрипт системы ("пиксель"):<br />
            - IP адрес;<br />
            - информация из cookies;<br />
            - информация о браузере (или иной программе, которая осуществляет доступ к показу рекламы);<br />
            - время доступа;<br />
            - адрес страницы, на которой расположен рекламный блок;<br />
            - реферер (адрес предыдущей страницы).<br />
            3.3.1. Для предоставления своих услуг Сервис (а также расширение браузера Сервиса) использует файлы cookies. Пользуясь сайтом «Promocodeshub», Пользователь подтверждает свое согласие на использование файлов cookies. Данное согласие в любой момент может быть ограничено или отозвано по инициативе Пользователя путем изменения настроек безопасности и приватности в используемом им браузере. В случае ограничения Пользователем использования файлов cookies (блокировки, удаления, изменения) Сервис не гарантирует корректную работу функций сайта.<br />
            3.3.2. Сервис осуществляет сбор статистики об IP-адресах своих посетителей. Данная информация используется с целью выявления и решения технических проблем, для контроля законности проводимых финансовых платежей.<br />
            3.4. Любая иная персональная информация не оговоренная выше подлежит надежному хранению и нераспространению, за исключением случаев, предусмотренных в п.п. 5.2. и 5.3. настоящей Политики конфиденциальности.<br />
            3.5. Сервис использует системы веб-аналитики Google Analytics от компании Google и Яндекс.Метрика от компании Яндекс. Данные системы аналитики ведут запись файлов cookies в целях проведения аналитики взаимодействия Пользователей с сайтом «Promocodeshub». Полученная информация используется исключительно сотрудниками Сервиса и не передается третьим лицам.<br />
        </>
    },
    {
        title: '4. ЦЕЛИ СБОРА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ ПОЛЬЗОВАТЕЛЯ',
        info: <>
            4.1. Персональные данные Пользователя Администрация сайта Сервиса может использовать в целях:<br />
            4.1.1. Предоставления Пользователю доступа к персонализированным ресурсам Сайта Сервиса.<br />
            4.1.2. Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования Сайта Сервиса, оказания услуг, обработка запросов и заявок от Пользователя.<br />
            4.1.3. Определения места нахождения Пользователя для обеспечения безопасности, предотвращения мошенничества.<br />
            4.1.4. Подтверждения достоверности и полноты персональных данных, предоставленных Пользователем.<br />
            4.1.5. Обработки и получения платежей, подтверждения налога или налоговых льгот, оспаривания платежа, определения права на получение кредитной линии Пользователем.<br />
            4.1.6. Предоставления Пользователю эффективной клиентской и технической поддержки при возникновении проблем связанных с использованием Сайта Сервиса.<br />
            4.1.7. Предоставления Пользователю с его согласия, обновлений продукции, специальных предложений, информации о ценах, новостной рассылки и иных сведений от имени Сервиса или от имени партнеров Сервиса.<br />
            4.1.8. Осуществления рекламной деятельности с согласия Пользователя.<br />
            4.1.9. Предоставления доступа Пользователю на сайты или сервисы партнеров Сервиса с целью получения продуктов, обновлений и услуг.<br />
        </>
    },
    {
        title: '5. СПОСОБЫ И СРОКИ ОБРАБОТКИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ',
        info: <>
            5.1. Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств.<br />
            5.2. Пользователь соглашается с тем, что Администрация сайта вправе передавать персональные данные третьим лицам, исключительно в целях предоставления услуг Сервиса.<br />
            5.3. Персональные данные Пользователя могут быть переданы уполномоченным органам государственной власти Российской Федерации только по основаниям и в порядке, установленным законодательством Российской Федерации.<br />
            5.4. При утрате или разглашении персональных данных Администрация сайта информирует Пользователя об утрате или разглашении персональных данных.<br />
            5.5. Администрация сайта принимает необходимые организационные и технические меры для защиты персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.<br />
            5.6. Администрация сайта совместно с Пользователем принимает все необходимые меры по предотвращению убытков или иных отрицательных последствий, вызванных утратой или разглашением персональных данных Пользователя.<br />
            5.7. Пользователь может удалить все свои персональные данные. Для этого следует обратиться к администрации сервиса.
        </>
    },
    {
        title: '6. ОБЯЗАТЕЛЬСТВА СТОРОН',
        info: <>
            6.1. Пользователь обязан:<br />
            6.1.1. Предоставить достоверную информацию о персональных данных, необходимую для пользования Сайтом Сервиса.<br />
            6.1.2. Обновить, дополнить предоставленную информацию о персональных данных в случае изменения ранее указанных данных.<br />
            6.2. Администрация сайта обязана:<br />
            6.2.1. Использовать полученную информацию исключительно для целей, указанных в п. 4 настоящей Политики конфиденциальности.<br />
            6.2.2. Обеспечить хранение конфиденциальной информации в тайне, не разглашать без предварительного письменного разрешения Пользователя, а также не осуществлять продажу, обмен, опубликование, либо разглашение иными возможными способами переданных персональных данных Пользователя, за исключением п.п. 5.2. и 5.3. настоящей Политики Конфиденциальности.<br />
            6.2.3. Принимать меры предосторожности для защиты конфиденциальности персональных данных Пользователя согласно порядку, обычно используемого для защиты такого рода информации в существующем деловом обороте.<br />
            6.2.4. Осуществить блокирование персональных данных, относящихся к соответствующему Пользователю, с момента обращения или запроса Пользователя или его законного представителя либо уполномоченного органа по защите прав субъектов персональных данных на период проверки, в случае выявления недостоверных персональных данных или неправомерных действий.<br />
        </>
    },
    {
        title: '7. ОТВЕТСТВЕННОСТЬ СТОРОН',
        info: <>
            7.1. Администрация сайта, не исполнившая свои обязательства, несёт ответственность за убытки, понесённые Пользователем в связи с неправомерным использованием персональных данных, в соответствии с законодательством Российской Федерации, за исключением случаев, предусмотренных п.п. 5.2., 5.3. и 7.2. настоящей Политики Конфиденциальности.<br />
            7.2. В случае утраты или разглашения Конфиденциальной информации Администрация сайта не несёт ответственность, если данная конфиденциальная информация<br />
            7.2.1. Стала публичным достоянием до её утраты или разглашения.<br />
            7.2.2. Была получена от третьей стороны до момента её получения Администрацией сайта.<br />
            7.2.3. Была разглашена с согласия Пользователя.<br />
        </>
    },
    {
        title: '8. РАЗРЕШЕНИЕ СПОРОВ',
        info: <>
            8.1. До обращения в суд с иском по спорам, возникающим из отношений между Пользователем сайта Сервиса и Администрацией сайта, обязательным является предъявление претензии (письменного предложения о добровольном урегулировании спора).<br />
            8.2 Получатель претензии в течение 30 календарных дней со дня получения претензии, письменно уведомляет заявителя претензии о результатах рассмотрения претензии.<br />
            8.3. При не достижении соглашения спор будет передан на рассмотрение в судебный орган в соответствии с действующим законодательством Российской Федерации.<br />
            8.4. К настоящей Политике конфиденциальности и отношениям между Пользователем и Администрацией сайта применяется действующее законодательство Российской Федерации.<br />
        </>
    },
    {
        title: '9. ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ',
        info: <>
            9.1. Администрация сайта вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя.<br />
            9.2. Новая Политика конфиденциальности вступает в силу с момента ее размещения на Сайте Сервиса, если иное не предусмотрено новой редакцией Политики конфиденциальности.<br />
            9.3. Все предложения или вопросы по настоящей Политике конфиденциальности следует сообщать на e-mail адрес: support@promocodeshub.ru<br />
            9.4. Действующая Политика конфиденциальности размещена на странице по адресу
        </> // добавить ссылку и создать почту
    },
]

type dataPrivacyArr = Array<PrivacyPointProps>

export const PrivacyPoint: FC<PrivacyPointProps> = ({ title, info }) => {
    return (
        <>
            <StyledH3
                margin={'20px 0'}
                fontWeight={'600'}
            >
                {title}
            </StyledH3>
            <StyledP
                fontSize={'14px'}
            >
                {info}
            </StyledP>
        </>
    )
}

export const Privacy: FC = () => {
    return (
        <Flex
            backgroundColor={'#FBFBFB'}
        >
            <CenteredLayout>
                <CenteredLayoutBody>
                    <Breadcrumbs
                        titleLastPage={'Политика конфиденциальности персональных данных'}
                    />
                    <StyledH1
                        pb={'44px'}
                    >
                        Политика конфиденциальности персональных данных
                    </StyledH1>
                    <StyledH2
                        fontSize={'27px'}
                    >
                        Политика обработки персональных данных интернет-сайта promocodeshub.ru
                    </StyledH2>
                    <StyledP
                        fontSize={'14px'}
                        margin={'20px 0'}
                    >
                        Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) действует в отношении всей информации,
                        которую Сервис «Promocodeshub» на доменном имени promocodeshub.ru может получить о Пользователе во время использования сайта Сервиса,
                        программ и продуктов Сервиса.
                    </StyledP>
                    {dataPrivacyArr.map((el) => {
                        return (
                            <PrivacyPoint
                                key={el.title}
                                title={el.title}
                                info={el.info}
                            />
                        )
                    })}
                </CenteredLayoutBody>
            </CenteredLayout>
        </Flex>

    )
}