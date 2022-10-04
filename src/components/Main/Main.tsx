import { useState } from "react";

import "./Main.scss";
import Link from "@components/Link";
import Product from "@components/Product";
import { IProduct } from "@components/Product/Product";

const Main = () => {
    const data: IProduct[] = [
        { id: 1, name: "Модульная кухня Лондон", count: 1, price: 11300 },
        { id: 2, name: "Модульная кухня Лондон", count: 1, price: 11300 },
        { id: 3, name: "Модульная кухня Лондон", count: 1, price: 11300 },
        { id: 4, name: "Модульная кухня Лондон", count: 1, price: 11300 },
        { id: 5, name: "Модульная кухня Лондон", count: 1, price: 11300 },
        { id: 6, name: "Модульная кухня Лондон", count: 1, price: 11300 },
        { id: 7, name: "Модульная кухня Лондон", count: 1, price: 11300 },
        { id: 8, name: "Модульная кухня Лондон", count: 1, price: 11300 }
    ];

    const [products, setProducts] = useState<IProduct[]>(data);


    const getProductById: (id: number) => IProduct = (id: number) => {
        let currentProduct = { id: 0, name: "0", count: 0, price: 0 };
        products.forEach(product => {
            if (product.id === id) {
                currentProduct = product;
            };
        });
        return currentProduct;
    };

    const onPlus = (id: number) => {
        const product = getProductById(id);
        if (product.price === 0) { return };

        product.count = product.count + 1;
        setProducts(products => {
            return products.map(p => {
                if (p.id === id) {
                    return product;
                };
                return p;
            });
        });
    };

    const onMinus = (id: number) => {
        const product = getProductById(id);
        if (product.price === 0 || product.count === 0) { return };

        product.count = product.count - 1;
        setProducts(products => {
            return products.map(p => {
                if (p.id === id) {
                    return product;
                };
                return p;
            });
        });
    };

    const onDelete = (id: number) => {
        setProducts(products => {
            return [...products.slice(0, id - 1), ...products.slice(id)];
        });
    };

    const sumAllProducts: () => number = () => {
        let sum = 0;
        products.forEach(product => {
            sum += product.price * product.count;
        });
        return sum;
    };

    const [isAccess, setIsAccess] = useState<boolean>(false);

    const toggleAccess = () => {
        setIsAccess(!isAccess);
    };

    return (
        <main className="main">
            <div className="main__previos">
                <Link>Главная</Link> &#10095; <Link className="previos__current">Корзина</Link>
            </div>
            <h2 className="main__title">
                Корзина
            </h2>
            <br className="main__line" />

            <div className="main__main">
                <div className="main__order">
                    <div className="main__basket">
                        {products.map(product =>
                            <Product key={product.id} {...product}
                                onPlus={onPlus}
                                onMinus={onMinus}
                                onDelete={onDelete}
                            />
                        )}
                    </div>
                    <div className="main__order-form">
                        <h2 className="order-form__title">Оформление заказа</h2>
                        <form action="." method="post" className="order-form__form">
                            <div className="form__cell">
                                <label htmlFor="fio" className="form__label">ФИО*</label>
                                <input type="text" id="fio" className="form__input" placeholder="Иванов Иван Иванович" />
                            </div>
                            <div className="form__cell">
                                <label htmlFor="town" className="form__label">Город*</label>
                                <input type="text" id="town" className="form__input" placeholder="Краснодар" />
                            </div>
                            <div className="form__cell">
                                <label htmlFor="phone" className="form__label">Телефон*</label>
                                <input type="text" id="phone" className="form__input" placeholder="+7 (000) 000 00 00" pattern="[+7,8]{1} ([0-9]{3}) [0-9]{3} [0-9]{2} [0-9]{2}" />
                            </div>
                            <div className="form__cell">
                                <label htmlFor="addres" className="form__label">ФИО*</label>
                                <input type="text" id="addres" className="form__input" placeholder="ул. Московская, 144" />
                            </div>
                        </form>
                        <p className="order-form__required">* - поля, обязательные для заполнения</p>
                    </div>
                </div>

                <div className="main__confirm">
                    <h3 className="confirm__title">Выберите способ доставки</h3>
                    <div className="confirm__add">
                        <div className="add__cell">
                            <input type="radio" name="Delivery" id="self-delivery" className="add__input" defaultChecked={true} />
                            <label htmlFor="self-delivery" className="add__info">Самовывоз</label>
                        </div>
                        <div className="add__cell">
                            <input type="radio" name="Delivery" id="delivery" className="add__input" />
                            <label htmlFor="delivery" className="add__info">Доставка</label>
                        </div>
                    </div>
                    <h3 className="confirm__title">Выберите способ оплаты</h3>
                    <div className="confirm__add">
                        <div className="add__cell">
                            <input type="radio" name="Payment" id="payment-cash" className="add__input" defaultChecked={true} />
                            <label htmlFor="payment-cash" className="add__info">Наличные</label>
                        </div>
                        <div className="add__cell">
                            <input type="radio" name="Payment" id="payment-card" className="add__input" />
                            <label htmlFor="payment-card" className="add__info">Оплата картой</label>
                        </div>
                    </div>
                    <br className="confirm__line" />
                    <div className="confirm__sum">
                        Итого:
                        <p className="sum__total">{sumAllProducts()} руб.</p>
                    </div>
                    <p className="confirm__sub-info">
                        Стоимость указана без учета доставки
                    </p>
                    <br className="confirm__line" />
                    <div className="approval__cell">
                        <input type="checkbox" name="Approval" id="approval" className="confirm__approval" onClick={toggleAccess} />
                        <label htmlFor="approval">
                            Я подтверждаю, что я ознакомлен и согласен с условиями политики обработки персональных данных.
                        </label>
                    </div>
                    <button className={"confirm__order " + (isAccess === true ? "" : "no-access")}>Подтвердить заказ</button>
                </div>
            </div>
        </main>
    );
};
export default Main;