import { ImWarning } from 'react-icons/im';

export function ResourceItem({ primary, secondary, editWarning }) {
  return (

      <p>{ editWarning && <ImWarning color={'orange'} size={'30px'}/> }{ primary } - { secondary }</p>

  )
}