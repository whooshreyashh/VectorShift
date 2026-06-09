export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };

    event.target.style.cursor = 'grabbing';

    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData)
    );

    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
      style={{
        cursor: 'grab',
        minWidth: '100px',
        height: '60px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: '12px',

        background:
          'linear-gradient(135deg,#1E293B,#0F172A)',

        color: 'white',

        fontWeight: '600',

        border: '1px solid #334155',

        boxShadow:
          '0 10px 20px rgba(15,23,42,0.25)',

        transition: 'all 0.2s ease',
      }}
    >
      {label}
    </div>
  );
};