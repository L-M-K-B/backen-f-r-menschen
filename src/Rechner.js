import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Anzeige = styled.input`
  border: 2px solid indigo;
  width: 25px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat (4, 1fr);
`;

export default function Rechner() {
  const [secondInputField, setSecondInputField] = useState(false);
  const [firstNumber, setFirstNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [secondNumber, setSecondNumber] = useState('');

  let firstValue = '';

  function handleChange(event) {
    if (secondInputField === false) {
      setFirstNumber(event.target.value);
    } else {
      setSecondNumber(event.target.value);
    }
  }

  function handleOperatorChange(event) {
    setOperator(event.target.value);
    setSecondInputField(true);
  }

  function handleClick(btnValue) {
    debugger;
    if (secondInputField === false) {
      firstValue = btnValue;
    }
  }

  return (
    <>
      <p>Rechner</p>
      <div>Hallo{firstValue}</div>
      <Anzeige onChange={handleChange} name="firstNumber" />
      <Anzeige onChange={handleOperatorChange} name="operator" />
      <Anzeige onChange={handleChange} name="secondNumber" />
      <button>=</button>
      <p />

      <Grid>
        <button
          onClick={() => {
            handleClick(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            handleClick(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            handleClick(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            handleClick(4);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            handleClick(5);
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            handleClick(6);
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            handleClick(7);
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            handleClick(8);
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            handleClick(9);
          }}
        >
          9
        </button>
        <button
          onClick={() => {
            handleClick(0);
          }}
        >
          0
        </button>
      </Grid>
      <div>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
      </div>
    </>
  );
}
//{result}
