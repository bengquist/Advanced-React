import Link from "next/link";
import React from "react";
import { ItemType } from "./types";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";

type Props = {
  item: ItemType;
};

function Item({ item }: Props) {
  return (
    <ItemStyles>
      {item.image && <img src={item.image} alt={item.title} />}

      <Title>
        <Link href={{ pathname: "/item", query: { id: item.id } }}>
          <a>{item.title}</a>
        </Link>
      </Title>
      <PriceTag>{formatMoney(item.price)}</PriceTag>
      <p>{item.description}</p>
      <div className="button-list">
        <Link href={{ pathname: "update", query: { id: item.id } }}>
          <a>Edit</a>
        </Link>
        <button>Add to cart</button>
        <button>Delete</button>
      </div>
    </ItemStyles>
  );
}

export default Item;
