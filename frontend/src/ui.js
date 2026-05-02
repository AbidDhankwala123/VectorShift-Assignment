import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap, } from 'reactflow';

import { useStore } from './store';
import { shallow } from 'zustand/shallow';

import { InputNode } from './nodes/inputNode';
import { OutputNode } from './nodes/outputNode';
import { LLMNode } from './nodes/llmNode';
import { TextNode } from './nodes/textNode';
import { MathNode } from './nodes/mathNode';
import { APINode } from './nodes/apiNode';
import { EmailNode } from './nodes/emailNode';
import { FilterNode } from './nodes/filterNode';
import { DelayNode } from './nodes/delayNode';

import 'reactflow/dist/style.css';

const gridSize = 20;

const nodeTypes = {
  customInput: InputNode,
  customOutput: OutputNode,
  llm: LLMNode,
  text: TextNode,
  math: MathNode,
  api: APINode,
  email: EmailNode,
  filter: FilterNode,
  delay: DelayNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {

  const reactFlowWrapper = useRef(null);

  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds =
        reactFlowWrapper.current.getBoundingClientRect();

      const appData = JSON.parse(
        event.dataTransfer.getData('application/reactflow')
      );

      const type = appData.nodeType;

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const nodeID = getNodeID(type);

      const newNode = {
        id: nodeID,
        type,
        position,
        data: {
          id: nodeID,
          nodeType: type,
        },
      };

      addNode(newNode);
    },
    [reactFlowInstance]
  );

  return (
    <div
      ref={reactFlowWrapper}
      style={{ width: '100vw', height: '75vh' }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={(e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
        }}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        fitView
        snapGrid={[gridSize, gridSize]}
      >
        <Background color="#334155" gap={20} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};