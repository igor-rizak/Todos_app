// MainDashboard.styled.js
import styled from 'styled-components';

export const BoardContainer = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
}
`;
export const BtnAddColumn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 58px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  min-width: 334px;
  color: #ffffff;
  background-color: #121212;
  border: none;
  cursor: pointer;
  height: 58px;
`;
export const StyledIconAdd = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const SvagAddColumn = styled.svg`
  stroke: #121212;
`;
export const MainWrapper = styled.ul`
  display: flex;
  gap: 18px;
`;
