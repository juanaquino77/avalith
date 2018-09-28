import React from 'react';
import { ItemSection, Image, ItemParagraph } from './styled';

const Item = (props) => {
    return (
        <ItemSection className="card" id={props.cards.cardId} onClick={props.postHandler}>
            <Image className="img-thumbnail" id={props.cards.cardId} src={props.cards.cardImageUrl} alt="imagen" />
            <h5 className="card-title">{props.cards.cardTitle}</h5>
            <ItemParagraph className="card-text" id={props.cards.cardId}>{props.cards.cardDescription}</ItemParagraph>
        </ItemSection>
    );
}

export default Item;