import { VscLoading } from 'react-icons/vsc';

export function Loading() {
  return (
    <main className='main-dashboard'>
      <div className='gen-body'>

        <div className='spinner-box'>
          <VscLoading className='spinner' size={'35px'}/>
        </div>
      </div>
    </main>
  )
}