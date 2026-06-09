// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback } from 'react';

import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  BackgroundVariant,
} from 'reactflow';

import { useStore } from './store';
import { shallow } from 'zustand/shallow';

import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';

import { MathNode } from './nodes/mathNode';
import { EmailNode } from './nodes/emailNode';
import { APINode } from './nodes/apiNode';
import { FilterNode } from './nodes/filterNode';
import { DelayNode } from './nodes/delayNode';

import 'reactflow/dist/style.css';

const gridSize = 20;

const proOptions = {
  hideAttribution: true,
};

const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,

  math: MathNode,
  email: EmailNode,
  api: APINode,
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

  const [reactFlowInstance, setReactFlowInstance] =
    useState(null);

  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (
    nodeID,
    type
  ) => {
    return {
      id: nodeID,
      nodeType: type,
    };
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds =
        reactFlowWrapper.current.getBoundingClientRect();

      if (
        event?.dataTransfer?.getData(
          'application/reactflow'
        )
      ) {
        const appData = JSON.parse(
          event.dataTransfer.getData(
            'application/reactflow'
          )
        );

        const type = appData?.nodeType;

        if (!type) {
          return;
        }

        const position =
          reactFlowInstance.project({
            x:
              event.clientX -
              reactFlowBounds.left,

            y:
              event.clientY -
              reactFlowBounds.top,
          });

        const nodeID =
          getNodeID(type);

        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(
            nodeID,
            type
          ),
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback(
    (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect =
        'move';
    },
    []
  );

  return (
    <div
      ref={reactFlowWrapper}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <ReactFlow
        defaultViewport={{
          x: 0,
          y: 0,
          zoom: 0.8,
        }}
        fitView
        fitViewOptions={{
          padding: 0.4,
          maxZoom: 0.85,
        }}
        defaultEdgeOptions={{
          animated: true,
          style: {
            strokeWidth: 2,
            stroke: '#64748B',
          },
        }}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        snapGrid={[gridSize, gridSize]}
        connectionLineType='smoothstep'
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={18}
          size={2.8}
          color="#CBD5E1"
        />

        <Controls />

        <MiniMap
          pannable
          zoomable
        />
      </ReactFlow>
    </div>
  );
};