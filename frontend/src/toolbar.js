import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div>
      <div
        style={{
          marginBottom: '24px',
        }}
      >
        <h3
          style={{
            margin: 0,
            color: '#0F172A',
          }}
        >
          Layers
        </h3>

        <p
          style={{
            marginTop: '6px',
            marginBottom: 0,
            color: '#64748B',
            fontSize: '13px',
          }}
        >
          Drag nodes into the canvas
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <div
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '1px',
            color: '#94A3B8',
            marginBottom: '4px',
          }}
        >
          CORE NODES
        </div>

        <DraggableNode type='customInput' label='Input' />
        <DraggableNode type='llm' label='LLM' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text' label='Text' />

        <div
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '1px',
            color: '#94A3B8',
            marginTop: '18px',
            marginBottom: '4px',
          }}
        >
          PROCESSING
        </div>

        <DraggableNode type='math' label='Math' />
        <DraggableNode type='filter' label='Filter' />
        <DraggableNode type='delay' label='Delay' />

        <div
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '1px',
            color: '#94A3B8',
            marginTop: '18px',
            marginBottom: '4px',
          }}
        >
          INTEGRATIONS
        </div>

        <DraggableNode type='api' label='API' />
        <DraggableNode type='email' label='Email' />
      </div>
    </div>
  );
};