/* eslint-disable camelcase */
/* eslint-disable react/function-component-definition */
import PropTypes from 'prop-types';

import '../../styles/index.scss';

import { Image, Card } from 'semantic-ui-react';

function OneResult({
  name, description, owner, full_name,
}) {
  return (
    <Card
      as="section"
    >
      <Image
        wrapped
        ui={false}
        src={owner.avatar_url}
      />
      <Card.Content>
        <Card.Header
          href={owner.html_url}
          as="a"
        >
          {name}
        </Card.Header>
        <Card.Meta>
          {full_name}
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

OneResult.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  owner: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
  }).isRequired,
  full_name: PropTypes.string.isRequired,
};

OneResult.defaultProps = {
  description: '',
};

export default OneResult;
