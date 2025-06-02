import styled from "styled-components/native";
import { theme } from "../../../styles";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background};
`;

export const LoadingText = styled.Text`
  margin-top: ${theme.spacing.md}px;
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.body.fontSize}px;
`;