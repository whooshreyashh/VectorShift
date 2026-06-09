import { BaseNode } from '../components/BaseNode';

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Math"
      inputs={[
        { id: 'a' },
        { id: 'b' }
      ]}
      outputs={[
        { id: 'result' }
      ]}
    >
      <span>Add/Subtract Operations</span>
    </BaseNode>
  );
};