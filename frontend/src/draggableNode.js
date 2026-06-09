export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };

    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData)
    );

    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      draggable
      onDragStart={(event) =>
        onDragStart(event, type)
      }
      style={{
        cursor: 'grab',

        height: '48px',

        display: 'flex',
        alignItems: 'center',

        padding: '0 14px',

        borderRadius: '12px',

        background: '#FFFFFF',

        border: '1px solid #E2E8F0',

        boxShadow:
          '0 4px 10px rgba(15,23,42,0.04)',

        transition: 'all .2s ease',

        fontWeight: 600,

        color: '#334155',
      }}
    >
      <span
        style={{
          fontSize: '18px',
          marginRight: '10px',
          color: '#2563EB',
        }}
      >
        +
      </span>

      {label}
    </div>
  );
};