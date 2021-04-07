import React from 'react'

import Step from './Step'
import steps from './steps'

const ServiceBreakdown = () => {
  return steps.map((s) => <Step key={steps.title} {...s} />)
}

export default ServiceBreakdown
