import React from 'react';
import {
  AiOutlineSortAscending,
  AiFillHourglass,
  AiOutlineFileDone,
} from 'react-icons/ai';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import constantJson from '../../redux/constant.json';

const TodoHeader = (props) => {
  const sortValue = constantJson.sortedBy;

  const sort = (value) => {
    props?.sortedBy(value);
  };

  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined success button group"
      >
        <Button
          color="success"
          startIcon={<AiOutlineSortAscending />}
          onClick={() => {
            sort(sortValue.name);
          }}
        >
          title
        </Button>
        <Button
          color="success"
          startIcon={<AiFillHourglass />}
          onClick={() => {
            sort(sortValue.priority);
          }}
        >
          priority
        </Button>
        <Button
          color="success"
          startIcon={<AiOutlineFileDone />}
          onClick={() => {
            sort(sortValue.completed);
          }}
        >
          completed
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default TodoHeader;
