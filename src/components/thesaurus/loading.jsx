import { VscLoading } from 'react-icons/vsc';

export function Loading() {
  return (
    <main className="App" >
      <div className='container'>

        <div className='spinner-box'>
          <VscLoading className='spinner' size={'35px'}/>
          <p>Loading slow? Prefer text to images? <a href="/alt-thesaurus">A text-based thesaurus is available here.</a></p>
        </div>

      
      </div>
    </main>
  )
}