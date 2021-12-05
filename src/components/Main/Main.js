import React, {
  useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';

import { Main as StyledMain } from '@components/styled';

export const Main = ({
  children, refs, ...props
}) => {
  const [
    headerHeight,
    setHeaderHeight,
  ] = useState(95);

  useEffect(() => {
    const { height } = refs?.header?.current?.getBoundingClientRect();

    setHeaderHeight(height);
  }, []);

  return (
    <StyledMain
      headerHeight={headerHeight}
      {...props}
    >
      {children}
    </StyledMain>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  hasNoMargin: PropTypes.bool,
  refs: PropTypes.shape({
    header: PropTypes.shape({
      current: PropTypes.node,
    }),
  }),
};

Main.defaultProps = {
  hasNoMargin: false,
  refs: { header: { current: null } },
};

