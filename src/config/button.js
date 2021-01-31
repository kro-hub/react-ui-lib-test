import { css } from "@emotion/core";

export const font = css`
  text-transform: uppercase;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 3px;
`;

export const shape = css`
  border-radius: 5px;
  padding: 10px 20px;
`;

const base = css`
  border: none;
  border-bottom: solid 1px rgba(0,0,0, 0.45);
  color: #fff;
`
const primary = css`
  ${base}
  background: #2196f3;
`;

const secondary = css`
  ${base}
  background: red;
`;

export const types = {
  primary,
  secondary,
}