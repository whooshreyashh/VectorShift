import { BaseNode } from '../components/BaseNode';

export const APINode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="API"
      inputs={[
        { id: 'request' }
      ]}
      outputs={[
        { id: 'response' }
      ]}
    >
      <span>External API Call</span>
    </BaseNode>
  );
};