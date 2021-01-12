import { ImWarning } from 'react-icons/im';

export function ResourceItem({ primary, secondary, editWarning }) {
  return (
    <div className={'gen-item-text'}>
      <p>{ primary } - { secondary }  { editWarning ?
          <ImWarning color={'orange'} size={'20px'} title={'Warning: Unsaved Changes!'} className='warning-icon'/>

         : null}
        </p>
    </div>
  )
}