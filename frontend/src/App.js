import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { useStore } from './store';

function App() {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#F8FAFC',
      }}
    >
      {/* Header */}

      <div
        style={{
          height: '80px',
          padding: '0 32px',
          borderBottom: '1px solid #E2E8F0',
          background: '#FFFFFF',

          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',

          flexShrink: 0,
        }}
      >
        <h2
          style={{
            margin: 0,
            color: '#0F172A',
            fontSize: '32px',
            fontWeight: 700,
          }}
        >
          VectorShift Pipeline Builder
        </h2>

        <SubmitButton />
      </div>

      {/* Main Layout */}

      <div
        style={{
          flex: 1,
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        {/* Sidebar */}

        <div
          style={{
            width: '260px',
            background: '#FFFFFF',
            borderRight: '1px solid #E2E8F0',
            padding: '20px',
            overflowY: 'auto',
          }}
        >
          <PipelineToolbar />
        </div>

        {/* Canvas */}

        <div
          style={{
            flex: 1,
          }}
        >
          <PipelineUI />
        </div>
      </div>

      {/* Status Bar */}

      <div
        style={{
          height: '40px',
          background: '#FFFFFF',
          borderTop: '1px solid #E2E8F0',

          display: 'flex',
          alignItems: 'center',

          padding: '0 20px',

          fontSize: '13px',
          color: '#64748B',

          flexShrink: 0,
        }}
      >
        Nodes: {nodes.length}
        {' | '}
        Edges: {edges.length}
        {' | '}
        Ready
      </div>
    </div>
  );
}

export default App;