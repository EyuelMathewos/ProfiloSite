import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 112px;
  background: transparent;
  color: white;
  border: 1px solid white;
  
  &: focus{
    outline:none;
  }
  &: hover{
    background:#181818;
    border: 1px solid #181818;
  }
  ${props => props.primary && css`
    padding: 8px 12px;
    background: #333333;
    color: white;
    border: 1px solid #333333;
    font-family: Roboto ,Dancing Script,cursive, sans-serif;
    font-size: 1em;
    font-weight: bold;
    width: 150px;
  `}
  ${props => props.secondary && css`
  background: #ddd5d5d6;
  color: black;
  border: none;
  font-weight: bold;
  width: 140px;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`}
  ${props => props.header && css`
    color: #FF2401;
    border: 1px solid #FF2401;
    font-family: Roboto ,Dancing Script,cursive, sans-serif;
    font-weight: bold;
    font-size: 18px;
    width: 95px;
    padding: 8px 12px;
  `}
`;