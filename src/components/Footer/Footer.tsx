import { FC, PropsWithChildren } from "react";
import "./Footer.scss";

export type FooterProps = PropsWithChildren<{

}>;

const Footer: FC<FooterProps> = () => {
    return (
        <footer className="main-footer">
            <div className="main-footer__main-info">
                <div className="main-info__site-info">
                    <img src={require("./FooterLogo.png")} alt="footer logo" className="footer__logo" />
                    <h3 className="site-info__telephone">
                        8-961-525-91-91
                    </h3>
                    <div className="site-info__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Время работы:
                                <span className="info__item_bold">
                                    с 10:00 до 19:00
                                </span>
                            </li>
                            <li className="info__item">
                                Адрес:
                                <span className="info__item_bold">
                                    Краснодар,
                                    ул. Московская 144 корп. - 1
                                </span>
                            </li>
                            <li className="info__item">
                                Почта:
                                <span className="info__item_bold">
                                    mebelarko@mail.ru
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-info__link-info">
                    <h3 className="link-info__title">Мы в Инстаграме</h3>
                    <img src={require("./insta.webp")} alt="instagram" className="instagram" />
                    {/* <i className="fa fa-instagram fa-3" aria-hidden="true"></i> */}
                </div>
                <span className="main-info__security">
                    © Все права защищены
                </span>
            </div>
            <div className="main-footer__table-info">
                <ul className="table-info__column">
                    <li className="column__item"><h4>Кухни</h4></li>
                    <li className="column__item">Модульные кухни</li>
                    <li className="column__item">Готовые комплекты</li>
                    <li className="column__item">Маленькие кухни</li>
                    <li className="column__item">Угловые кухни</li>
                    <li className="column__item">Кухонные уголки</li>
                    <li className="column__item">Столы кухонные</li>
                    <li className="column__item">Стулья для кухни</li>
                    <li className="column__item">Комплектующие</li>
                </ul>
                <ul className="table-info__column">
                    <li className="column__item"><h4>Гостинные</h4></li>
                    <li className="column__item">Модульные</li>
                    <li className="column__item">Журнальные столы</li>
                    <li className="column__item">Полки</li>
                    <li className="column__item">Тумбы под ТВ</li>
                    <li className="column__item">Шкафы</li>
                    <li className="column__item">Стеллажи</li>
                </ul>
                <ul className="table-info__column">
                    <li className="column__item"><h4>Спальни</h4></li>
                    <li className="column__item">Кровати</li>
                    <li className="column__item">Матрацы</li>
                    <li className="column__item">Шкафы</li>
                    <li className="column__item">Комоды</li>
                    <li className="column__item">Столы туалетные</li>
                    <li className="column__item">Тумбы прикроватные</li>
                    <li className="column__item">Зеркала</li>
                </ul>
                <ul className="table-info__column">
                    <li className="column__item"><h4>Диваны</h4></li>
                    <li className="column__item">Прямые</li>
                    <li className="column__item">Угловые</li>
                    <li className="column__item">На металлокаркасе</li>
                    <li className="column__item">Кресла</li>
                </ul>
                <ul className="table-info__column">
                    <li className="column__item"><h4>Детские</h4></li>
                    <li className="column__item">Кровати</li>
                    <li className="column__item">Полки</li>
                    <li className="column__item">Столы</li>
                    <li className="column__item">Тумбы</li>
                    <li className="column__item">Шкафы</li>
                    <li className="column__item">Комоды</li>
                </ul>
                <ul className="table-info__column">
                    <li className="column__item"><h4>Прихожие</h4></li>
                    <li className="column__item">Модульные</li>
                    <li className="column__item">Обувницы</li>
                </ul>
                <ul className="table-info__column">
                    <li className="column__item"><h4>Шкафы-купе</h4></li>
                </ul>
            </div>
        </footer>
    );
};
export default Footer;