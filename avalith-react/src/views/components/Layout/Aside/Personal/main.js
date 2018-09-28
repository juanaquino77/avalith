//Dependencies
import React from 'react';
import { PersonalSection } from './styled';

const Personal = (props) => {
    return (
        <PersonalSection>
            <div className="name"> dev name</div>
            <div className="dni"> dni xx.xxx.xxx</div>
            <div className="años"> xx years old</div>
        </PersonalSection>
        
    );
}
            
export default Personal;
