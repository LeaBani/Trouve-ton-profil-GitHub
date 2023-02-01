/* eslint-disable react/function-component-definition */
import PropTypes from 'prop-types';

import '../../styles/index.scss';

import { Segment } from 'semantic-ui-react';

function Message({ data }) {
  const text = data > 1
    ? `La recherche a donné ${data} résultats`
    : 'Recherchez un dépôt GitHub ci-dessus';
  return (
    <Segment>{text}</Segment>
  );
}

Message.propTypes = {
  data: PropTypes.number,
};

Message.defaultProps = {
  data: null,
};

export default Message;
