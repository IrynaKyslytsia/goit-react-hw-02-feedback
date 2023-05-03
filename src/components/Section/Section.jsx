import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { SectionWrap } from './Section.styled';

const Section = ({ title, children }) => {
    return (
        <SectionWrap>
            <SectionTitle 
            title={title} />
            {children}
       </SectionWrap>
    )
};

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array,
};