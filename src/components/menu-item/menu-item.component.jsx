import React from "react";

import { withRouter } from "react-router";

import {
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
  BackgroundImageContainer,
  MenuItemContainer,
} from "./menu-item.styles";
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer imageUrl={imageUrl} />
    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
