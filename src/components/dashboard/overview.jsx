
export function Overview({ dispatch }) {
  return (
    <main>
      <div>
        <button onClick={() => dispatch({type: 'quotes'})}>Quotes</button>
        <button onClick={() => dispatch({type: 'resources'})}>Resources</button>
        <button onClick={() => dispatch({type: 'videos'})}>Videos</button>
        <button onClick={() => dispatch({type: 'blog'})}>Blog</button>
        <button onClick={() => dispatch({type: 'thesaurus'})}>Thesaurus</button>
      </div>
    </main>
    
  )
}