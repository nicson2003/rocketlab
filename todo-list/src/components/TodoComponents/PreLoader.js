import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import _ from 'lodash';

export default function Animations(props) {
  const count = props?.count || 3;
  return (
    <Box>
      {_.times(count, (i) => (
        <Skeleton
          key={i}
          className={'todo-row'}
          animation="wave"
          variant="rectangular"
          height={50}
        />
      ))}
    </Box>
  );
}
