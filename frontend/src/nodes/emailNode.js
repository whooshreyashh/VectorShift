import { BaseNode } from '../components/BaseNode';

export const EmailNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Email"
      inputs={[
        { id: 'message' }
      ]}
      outputs={[
        { id: 'status' }
      ]}
    >
      <span>Send Email</span>
    </BaseNode>
  );
};