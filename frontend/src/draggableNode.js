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
      onDragStart={(event) => onDragStart(event, type)}
      draggable
      style={{
        background: '#1e293b',
        color: 'white',
        padding: '14px',
        borderRadius: '10px',
        cursor: 'grab',
        minWidth: '90px',
        textAlign: 'center',
        border: '1px solid #334155'
      }}
    >
      {label}
    </div>
  );
};