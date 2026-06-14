import React, { useEffect, useMemo } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Position,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { graphlib, layout } from '@dagrejs/dagre';
import { useApp } from '../context/AppContext';
import { RoadmapDefinition, RoadmapNodeData } from '../data/types';
import TopicNode from './TopicNode';

// Map custom node types
const nodeTypes = {
  topic: TopicNode,
};

interface RoadmapCanvasProps {
  roadmap: RoadmapDefinition;
  onNodeSelect: (node: RoadmapNodeData) => void;
  selectedNodeId?: string;
}

// Dagre automatic system layout configurer
const getLayoutedElements = (nodes: any[], edges: any[]) => {
  const dagreGraph = new graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  
  // Set TB layout (Top-to-Bottom) and node spacing parameters to look gorgeous
  dagreGraph.setGraph({
    rankdir: 'TB',
    nodesep: 50,
    edgesep: 35,
    ranksep: 90,
  });

  nodes.forEach((node) => {
    // Mirroring dimensions of TopicNode: Width: 220px, Height: 75px
    dagreGraph.setNode(node.id, { width: 220, height: 75 });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  layout(dagreGraph);

  const newNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      // Center coordinates offset correcting
      position: {
        x: nodeWithPosition ? nodeWithPosition.x - 110 : 0,
        y: nodeWithPosition ? nodeWithPosition.y - 37.5 : 0,
      },
    };
  });

  return { nodes: newNodes, edges };
};

export default function RoadmapCanvas({ roadmap, onNodeSelect, selectedNodeId }: RoadmapCanvasProps) {
  const { theme } = useApp();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Format and execute layout when roadmap or theme styles mutate
  useEffect(() => {
    // Form React Flow compliant nodes
    const rawNodes = roadmap.nodes.map((node) => ({
      id: node.id,
      type: 'topic',
      data: {
        id: node.id,
        title: node.title,
        status: node.status,
      },
      position: { x: 0, y: 0 },
    }));

    // Form React Flow compliant edges: styled, animated with directions
    const rawEdges = roadmap.edges.map((edge) => {
      const isCoreSource = roadmap.nodes.find(n => n.id === edge.source)?.status === 'core';
      const isCoreTarget = roadmap.nodes.find(n => n.id === edge.target)?.status === 'core';
      const isEdgeCore = isCoreSource && isCoreTarget;

      return {
        id: `${edge.source}-${edge.target}`,
        source: edge.source,
        target: edge.target,
        type: 'smoothstep',
        animated: isEdgeCore, // Spark animated dash effect along active core lines
        style: {
          stroke: isEdgeCore 
            ? (theme === 'dark' ? '#10b981' : '#10b981') // emerald accent lines for core connections
            : (theme === 'dark' ? '#3f3f46' : '#d4d4d8'), 
          strokeWidth: isEdgeCore ? 2.5 : 1.75,
          opacity: isEdgeCore ? 0.8 : 0.5,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: isEdgeCore ? '#10b981' : (theme === 'dark' ? '#52525b' : '#a1a1aa'),
        },
      };
    });

    const layouted = getLayoutedElements(rawNodes, rawEdges);
    setNodes(layouted.nodes);
    setEdges(layouted.edges);
  }, [roadmap, theme]);

  // Handle Selection Highlights without triggering heavy visual recalculations
  const processedNodes = useMemo(() => {
    return nodes.map((node) => ({
      ...node,
      selected: node.id === selectedNodeId,
    }));
  }, [nodes, selectedNodeId]);

  // Intercept React Flow clicks and surface target Node details
  const handleReactFlowNodeClick = (event: React.MouseEvent, node: any) => {
    const rawNode = roadmap.nodes.find((n) => n.id === node.id);
    if (rawNode) {
      onNodeSelect(rawNode);
    }
  };

  return (
    <div className="w-full h-full relative" id="reactflow-wrapper">
      <ReactFlow
        nodes={processedNodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onNodeClick={handleReactFlowNodeClick}
        fitView
        fitViewOptions={{ padding: 0.25, maxZoom: 1.1 }}
        minZoom={0.2}
        maxZoom={1.5}
        proOptions={{ hideAttribution: true }}
        id="react-flow-instance"
      >
        <Background
          color={theme === 'dark' ? '#27272a' : '#f4f4f5'}
          gap={18}
          size={1.5}
        />
        <Controls
          showInteractive={false}
          className="!bg-white dark:!bg-zinc-900 !border !border-zinc-200 dark:!border-zinc-800 !shadow-lg !rounded-xl overflow-hidden text-zinc-800 dark:text-zinc-200"
        />
      </ReactFlow>
    </div>
  );
}
