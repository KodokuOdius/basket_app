// import { FC, PropsWithChildren } from "react";
import Link from "@components/Link";
import "./Header.scss";

// export type HeaderProps = PropsWithChildren<{

// }>;

const Header = () => {
    return (
        <header className="main-header">
            <div className="main-header__site-nav">
                <div className="site-nav__services">
                    <Link className="services__coord">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        Ростов
                    </Link>
                    <Link className="services__item">Акции</Link>
                    <Link className="services__item">Сборка</Link>
                    <Link className="services__item">Оплата</Link>
                    <Link className="services__item">Доставка</Link>
                </div>
                <div className="site-nav__us">
                    <Link className="us__item">Наши работы</Link>
                    <Link className="us__item">Контакты</Link>
                </div>
            </div>
            <div className="main-header__panel-nav">
                <img src={require("./Logo.png")} alt="logo" className="panel-nav__logo" />
                <div className="panel-nav__addres">
                    <p className="addres__text">ул. Московская, 144 корп.-1</p>
                    <Link className="addres__schema">Схема проезда</Link>
                </div>
                <input type="text" className="panel-nav__search" placeholder="Поиск" />
                <div className="panel-nav__telephone-info">
                    <p className="telephone-info__telephone">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        8 (961) 525 91 91
                    </p>
                    <Link className="telephone-info__order">Заказать звонок</Link>
                </div>
                <div className="panel-nav__personal-panel">
                    <Link className="personal-panel__account">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        Аккаунт
                    </Link>
                    <Link className="personal-panel__favourites">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        Избранное
                    </Link>
                    <Link className="personal-panel__basket">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        Корзина
                    </Link>
                </div>
            </div>
            <div className="main-header__shop-nav">
                <Link className="shop-nav__item">Кухни</Link>
                <Link className="shop-nav__item">Гостинные</Link>
                <Link className="shop-nav__item">Спальни</Link>
                <Link className="shop-nav__item">Прихожие</Link>
                <Link className="shop-nav__item">Шкаф-купе</Link>
                <Link className="shop-nav__item">Детские</Link>
                <Link className="shop-nav__item">Диваны</Link>
                <Link className="shop-nav__item">Где посмотреть</Link>
            </div>
        </header>
    );
};
export default Header;