import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #2168fb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return <Container>Announcements will be here soon!</Container>;
};

export default Announcement;
