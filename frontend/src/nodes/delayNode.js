import { BaseNode } from '../components/BaseNode';

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Delay"
      inputs={[
        { id: 'input' }
      ]}
      outputs={[
        { id: 'output' }
      ]}
    >
      <span>Wait X Seconds</span>
    </BaseNode>
  );
};