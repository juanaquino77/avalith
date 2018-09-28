import React from 'react';
import { AsideSection } from './styled';
import  Personal from './Personal';
import  Search  from './Search';
import  Filter  from './Filter';

const Aside = (props) => {
    return (
        <AsideSection >
            <Personal />
            <Search cards={props.cards} updateSearch={props.updateSearch} />
            <Filter filterHandler={props.filterHandler} check={props.check} />
        </AsideSection>
    );
}
export default Aside;