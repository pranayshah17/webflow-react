import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
  background-color: #f5f5f5; /* Light gray background */
  border-radius: 12px;
`;

const Title = styled(Typography)`
  margin-bottom: 12px;
  font-weight: bold;
`;

const Content = styled(Typography)`
  margin-bottom: 12px;
  color: #666;
`;

const StyledButton = styled(Button)`
  margin-top: auto;
  background-color: #f44336; /* You can change this color */
  color: #fff; /* Text color for the button */
  &:hover {
    background-color: #d32f2f; /* Change color on hover */
  }
`;

const CardComponent = ({ title, content, buttonText }) => {
  return (
    <StyledPaper elevation={3} sx={{ paddingTop: "20px" }}>
      <Title variant="h6">{title}</Title>
      <Content variant="body1">{content}</Content>
      <StyledButton variant="contained" color="primary">
        {buttonText}
      </StyledButton>
    </StyledPaper>
  );
};

const CardContainer = () => {
  const cardData = [
    {
      title: "Card 1",
      content: "Content for Card 1",
      buttonText: "Clone",
    },
    {
      title: "Card 2",
      content: "Content for Card 2",
      buttonText: "Clone",
    },
    {
      title: "Card 3",
      content: "Content for Card 3",
      buttonText: "Clone",
    },
    {
      title: "Card 4",
      content: "Content for Card 4",
      buttonText: "Clone",
    },
    {
      title: "Card 5",
      content: "Content for Card 5",
      buttonText: "Clone",
    },
    {
      title: "Card 6",
      content: "Content for Card 6",
      buttonText: "Clone",
    },
    // Add more card data as needed
  ];

  return (
    <Container maxWidth="xl" sx={{ paddingTop: "50px" }}>
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <CardComponent
              title={card.title}
              content={card.content}
              buttonText={card.buttonText}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardContainer;
