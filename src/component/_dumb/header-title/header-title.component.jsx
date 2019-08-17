import React from 'react';
import { DynamicStyledTitle } from './header-title.style';

const HeaderTitle = ({ text = 'Change Me', tag = 'h1', title = '', fontSize = '16px', link }) => {
  return (
    <DynamicStyledTitle tag={tag} title={title} fontSize={fontSize} href={link}>
      {text}
    </DynamicStyledTitle>
  );
};

export default HeaderTitle;
