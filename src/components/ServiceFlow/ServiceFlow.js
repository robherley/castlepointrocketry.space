import React, { useState, useEffect, useCallback } from 'react'
import ReactFlow from 'react-flow-renderer'
import styled from 'styled-components'

import theme from '../../components/Layout/theme'
import useWindowWidth from '../../hooks/useWindowWidth'
import LoopEdge from './LoopEdge'
import ServiceNode from './ServiceNode'
import steps from './steps'

const edgeTypes = {
  loop: LoopEdge,
}

const nodes = steps.map((_, i) => {
  const isFirst = i === 0
  const isLast = i === steps.length - 1

  return {
    id: `n${i}`,
    data: { label: <ServiceNode index={i} /> },
    position: { x: 0, y: i * 100 },
    targetPosition: isFirst ? 'right' : 'top',
    sourcePosition: isLast ? 'right' : 'bottom',
    style: {
      border: `1px solid ${theme.color.yellow}`,
      backgroundColor: theme.color.bg,
      color: theme.color.light,
      width: '220px',
      borderRadius: '1rem',
    },
  }
})

const edges = steps.map((_, i) => {
  const next = (i + 1) % steps.length
  const isLast = i === steps.length - 1

  return {
    id: `e${i}-${next}`,
    source: `n${i}`,
    target: `n${next}`,
    animated: true,
    type: 'smoothstep',
    style: { stroke: theme.color.yellow },
    arrowHeadType: 'arrow',
    ...(isLast && { type: 'loop' }),
  }
})

const elements = [...nodes, ...edges]

const FlowContainer = styled.div`
  max-width: ${({ theme }) => theme.size.maxWidth};
  height: 60rem;
`

const ServiceFlow = () => {
  const [reactflowInstance, setReactflowInstance] = useState(null)
  const width = useWindowWidth()

  useEffect(() => {
    const isTiny = width < 600
    const padding = isTiny ? 0.3 : 0.1

    if (reactflowInstance) {
      reactflowInstance.fitView({ padding })
    }
  }, [reactflowInstance, width])

  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi)
      }
    },
    [reactflowInstance]
  )

  return (
    <FlowContainer>
      <ReactFlow
        elements={elements}
        edgeTypes={edgeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnDoubleClick={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnScroll={false}
        paneMoveable={false}
        onLoad={onLoad}
      />
    </FlowContainer>
  )
}

export default ServiceFlow
