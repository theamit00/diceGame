import styled from "styled-components"

const NumberSelectorContainer = styled.div`
  width: 552px;

  p {
    font-size: 24px;
    font-weight: 700;
    text-align: right;
    margin-top: 30px;
  }

  .error {
    font-weight: 400;
    color: red;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }
`;

const Box = styled.div`

    width: 72px;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    background: ${(props)=> props.$isSelected ? 'black' : 'white'};
    color: ${(props)=> props.$isSelected ? 'white' : 'black'};
    border: ${(props) => props.$isSelected ? '0px solid transparent' : '1px solid black'};
`;

const NumberSelector = ({ selectedNumber, setSelectedNumber, isError, setIsError }) => {
  const numberArray = [1, 2, 3, 4, 5, 6];

  const handleSelectedNumber = (value) => {
    return () => {
      setSelectedNumber(value);
      setIsError(false);
    };
  };

  return (
    <NumberSelectorContainer>
      {isError && <p className="error">You have not selected any number</p>}
      <div className="flex">
        {numberArray.map((value, i) => {
          return (
            <Box
              $isSelected={value === selectedNumber}
              key={i}
              onClick={handleSelectedNumber(value)}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <p className="selector">Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector