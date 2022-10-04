import { FC } from "react";
import "./Product.scss";

export interface IProduct {
    id: number,
    name: string,
    count: number,
    price: number
};

export type ProductProps = {
    onPlus: (id: number) => void;
    onMinus: (id: number) => void;
    onDelete: (id: number) => void;
};

const Product: FC<IProduct & ProductProps> = ({ id, name, count, price, onPlus, onMinus, onDelete }) => {
    return (
        <div className="product">
            <img src={require("./product.png")} alt={name} className="product__img" />
            <p className="product__name">{name}</p>
            <div className="product__count">
                <button className="count__btn minus" onClick={() => onMinus(id)}>-</button>
                <p className="count__number">{count}</p>
                <button className="count__btn plus" onClick={() => onPlus(id)}>+</button>
            </div>
            <p className="product__price">{price} руб.</p>
            <button className="product__delete" onClick={() => onDelete(id)}>✕</button>
        </div>
    );
};
export default Product;