
export function Overview({ dispatch }) {
  return (
    <main>
      <div>
        <button onClick={() => dispatch({type: 'quotes-gen'})}>Quotes</button>
        <button onClick={() => dispatch({type: 'resources-gen'})}>Resources</button>
        <button onClick={() => dispatch({type: 'videos-gen'})}>Videos</button>
        <button onClick={() => dispatch({type: 'blog-gen'})}>Blog</button>
        <button onClick={() => dispatch({type: 'thesaurus-gen'})}>Thesaurus</button>
      </div>
    </main>
    
  )
}