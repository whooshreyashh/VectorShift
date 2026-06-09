import { BaseNode } from '../components/BaseNode';

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Filter"
      inputs={[
        { id: 'input' }
      ]}
      outputs={[
        { id: 'passed' },
        { id: 'failed' }
      ]}
    >
      <span>Conditional Filter</span>
    </BaseNode>
  );
};