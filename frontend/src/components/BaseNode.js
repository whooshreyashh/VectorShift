import { Handle, Position } from 'reactflow';

const nodeColors = {
  Input: '#2563EB',
  Output: '#10B981',
  LLM: '#7C3AED',
  Text: '#F59E0B',
  Math: '#4F46E5',
  Email: '#EC4899',
  API: '#06B6D4',
  Filter: '#F97316',
  Delay: '#64748B',
};

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
  width = 260,
  minHeight = 120,
}) => {
  const accent = nodeColors[title] || '#2563EB';

  return (
    <div
      style={{
        width,
        minHeight,
        background: '#FFFFFF',
        borderRadius: '18px',
        overflow: 'hidden',
        border: `1px solid ${accent}20`,
        boxShadow:
          '0 10px 30px rgba(15,23,42,0.08)',
      }}
    >
      <div
        style={{
          height: '6px',
          background: accent,
        }}
      />

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
            background: accent,
            border: '2px solid white',
            boxShadow: `0 0 10px ${accent}`,
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
            background: accent,
            border: '2px solid white',
            boxShadow: `0 0 10px ${accent}`,
          }}
        />
      ))}

      <div
        style={{
          padding: '14px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px',
          }}
        >
          <span
            style={{
              fontWeight: 700,
              color: '#0F172A',
            }}
          >
            {title}
          </span>

          <span
            style={{
              fontSize: '11px',
              fontWeight: 600,
              padding: '4px 8px',
              borderRadius: '999px',
              background: `${accent}15`,
              color: accent,
            }}
          >
            NODE
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
    </div>
  );
};