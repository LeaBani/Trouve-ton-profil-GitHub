/* eslint-disable react/function-component-definition */
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import '../../styles/index.scss';
import OneResult from './OneResult';

function ReposResults({ data }) {
  return (
    <Card.Group
      as="section"
      itemsPerRow={3}
      stackable
    >
      {data.map((item) => (
        <OneResult
          key={item.id}
          {...item}
        />
      ))}
    </Card.Group>
  );
}

ReposResults.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReposResults;
