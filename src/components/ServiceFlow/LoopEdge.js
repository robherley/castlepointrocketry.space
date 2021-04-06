import React from 'react'
import { getSmoothStepPath, getMarkerEnd } from 'react-flow-renderer'

const LoopEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  arrowHeadType,
  markerEndId,
}) => {
  const maxX = sourceX > targetX ? sourceX : targetX
  const edgePath = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    centerX: maxX + 20,
  })
  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId)

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <text>
        <textPath
          href={`#${id}`}
          style={{ fontSize: '12px' }}
          startOffset="50%"
          textAnchor="middle"
        >
          {data?.text}
        </textPath>
      </text>
    </>
  )
}

export default LoopEdge
