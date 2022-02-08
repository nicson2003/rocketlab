import React from 'react';
import {
  AiOutlineSortAscending,
  AiFillHourglass,
  AiOutlineFileDone,
} from 'react-icons/ai';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import constantJson from '../../redux/constant.json';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';

const TodoHeader = (props) => {
  const todoState = useSelector((state) => state.todo);
  const { todos } = todoState;
  const completedTodos = todos.filter((item) => item.completed === true);
  const sortValue = constantJson.sortedBy;

  const sort = (value) => {
    props?.sortedBy(value);
  };

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent="center"
      alignItems="center"
      sx={{ color: 'action.active' }}
    >
      <Button
        variant="contained"
        color="success"
        startIcon={<AiOutlineSortAscending />}
        onClick={() => {
          sort(sortValue.name);
        }}
      >
        title
      </Button>

      <Button
        variant="contained"
        color="success"
        startIcon={<AiFillHourglass />}
        onClick={() => {
          sort(sortValue.priority);
        }}
      >
        priority
      </Button>
      {completedTodos.length > 0 ? (
        <Badge badgeContent={completedTodos.length} color="success">
          <Button
            variant="contained"
            color="success"
            startIcon={<AiOutlineFileDone />}
            onClick={() => {
              sort(sortValue.completed);
            }}
          >
            completed
          </Button>
        </Badge>
      ) : (
        <Button
          variant="contained"
          color="success"
          startIcon={<AiOutlineFileDone />}
          onClick={() => {
            sort(sortValue.completed);
          }}
        >
          completed
        </Button>
      )}
    </Stack>
  );
};

export default TodoHeader;
