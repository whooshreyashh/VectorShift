import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
  width = 260,
  minHeight = 120,
}) => {
  return (
    <div
      style={{
        width,
        minHeight,
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '16px',
        padding: '14px',
        boxShadow: '0 10px 30px rgba(15,23,42,0.08)',
      }}
    >
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
            width: 12,
            height: 12,
            background: '#3B82F6',
            border: '2px solid white',
          }}
        />
      ))}

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
            width: 12,
            height: 12,
            background: '#10B981',
            border: '2px solid white',
          }}
        />
      ))}

      <div
        style={{
          borderBottom: '1px solid #E2E8F0',
          paddingBottom: '10px',
          marginBottom: '12px',
        }}
      >
        <span
          style={{
            fontSize: '16px',
            fontWeight: '700',
            color: '#0F172A',
          }}
        >
          {title}
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          fontSize: '14px',
          color: '#334155',
        }}
      >
        {children}
      </div>
    </div>
  );
};