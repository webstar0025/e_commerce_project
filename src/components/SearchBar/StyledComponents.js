import styled, { css } from 'styled-components';

export const SearchContainer = styled.div`
  text-align: left;
  position: relative;
  width: 846px;
  height: 60px;
  left: calc(50% - 846px / 2);
  background: #fbfbfb;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
  border-radius: 10.0801px;
`;

export const SearchInput = styled.input`
  border: 4px solid transparent;
  border-radius: 2px;
  font-size: 2rem;
  width: 100%;
  padding: 1rem;
  transition: width 0.3s;

  &:focus {
    width: 100%;
    outline: none;
    border: 4px solid #08a1b6;
  }
`;

export const SubmitButton = styled.input`
  height: 100%;
  width: 4em;
  margin-top: -1em;
  position: absolute;
  top: 50%;
  right: 0.5rem;

  opacity: 0.2;
  background-color: transparent;
  border: 0;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAACnElEQVR4AcXZsUsbYRjH8e+dh2s1SyAGJwMJuDj1BIcEhJQIOnTq5F+QOf0jIq79A7oFh7aYyVBEkaZDC3awECc1AUXRIqUQotfFocnjJe/dk+b9PKP65Md7z13ee3Uwk2SNHKmngs5TnbDLJQqjA+RYZ4OXuDzvkSYf+cAJ44fPAYFhHeAzVhlqBBGrRoax8KjSJYhRXap4KCVoECiqQQKFLC0CZbXIElOBOwJ9cUchzm2Y5QsveN4tdfY4o00HSDHHPKuUmOV5v/D5SSSJ0MXfIY+HBB55dkIvRIIIvJDR28dnFJ/9kHH0MFaVDehRxlSZnuxAFUMZunKQKBJFUQ4wXTIYqcmPZ5GoFmUEahjw5eJTJI6ivBD4jCS/csrEVZZfU4yQk5OPhrwjcoRygQ0GVdCQf73OUEfisaMkHk1HDJHkYeDX82jlBzo+kCSEyxruwDP/EK1DbsWnhHDFgNTpodWjLgY9NECKfnvoyS4p8wBngN5Z/ABtQK8dP0AH0OuYB5iMqfAAMque7HJtHmAOPdnlxjzAPHqyy5V5gFX0ZJfj8AAn9CvhoeVRol8zPMAuj/xrlhW0Vpg1D3ApflhGR3b4wTlDvI24i4u+w9y0uyVrM213U1qxuy2/Z8bui8m23VezgGW7L6cBLdIWXs9FBAsHFCLCJI9opFMKXEzkkEp/IbK0bEdI0LARQRzVWoigPKy+Z5tlWooIiuP6NhVmAEiPNwLkqHDEw5CGx2wyDQDRI8T7l80U19xwxTFNmpwzKM1nFsyeCw7jFymCAxYjrHDp8r9cUOCUYRZ4Bw6AxVV47QJYXIVXLliNsOSC1Qh/XLAa4ZuDmmIcH1l2AaytwhZfmaAkn/qOb7eYBofJekOJJX7znfccAvwFyB3OeNys7d4AAAAASUVORK5CYII=');

  &:hover {
    outline: none;
    opacity: 0.4;
    cursor: pointer;
  }

  &:focus {
    outline: none;
    opacity: 0.6;
  }
`;

const dropdownPosition = css`
  position: absolute;
  left: 2px;
  top: 61px;
  padding-left: 0;
  z-index: 1;
`;

export const AutocompleteList = styled.ul`
  display: block;
  list-style: none;
  width: 30rem;
  transition: width 0.3s;
  margin: auto;
  ${dropdownPosition}
`;

export const AutoCompletItem = styled.li`
  display: block;
  background: white;
  margin: 10px auto;
  padding: 10px;
  font-size: 1.2rem;
  width: 100%;
  border-radius: 2px;

  &:hover {
    font-weight: bold;
    color: #00b4cc;
    cursor: pointer;
    transition: 0.3s all;
  }

  &.active {
    background: whitesmoke;
    font-size: 1.5rem;
    color: #00b4cc;
  }
`;

export const EmptyListContainer = styled.div`
  color: white;
  ${dropdownPosition}
`;
