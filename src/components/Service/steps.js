import date from '../../images/drawings/date.png'
import droptower from '../../images/drawings/droptower.png'
import rocket from '../../images/drawings/rocket_blast.png'
import microscope from '../../images/drawings/microscope.png'
import repeat2 from '../../images/drawings/repeat2.png'

const steps = [
  {
    title: 'Schedule',
    description:
      'No wait list. Period. You want to do cutting edge science, we want to make that happen ASAP. Our fleet is ready when you are.',
    image: date,
  },
  {
    title: 'Payload Integration',
    description:
      'Fly our ready-to-go cubesat-style capsules, available with data/power, pressurized environments, and live telemetry. We’ll help you customize your capsule to your exact requirements.',
    image: droptower,
  },
  {
    title: 'Launch',
    description:
      'Our returnable orbiter brings your payload to VLEO for as long as you need. Stay for a day, month, or a year, and have your results returned to you with no delay.',
    image: rocket,
  },
  {
    title: 'Learn',
    description:
      'We’ll work with you to return your experiment as soon as possible, however you need it. Cryo, vacuum, freeze-dried, same-day shipped, high-speed download, you name it.',
    image: microscope,
  },
  {
    title: 'Iterate',
    description:
      'One-offs are great for a proof of concept, but good science needs a robust data set. Our reusable vehicle and customer-focused integration services make iterative launches fast, simple, and affordable.',
    image: repeat2,
  },
]

export default steps
