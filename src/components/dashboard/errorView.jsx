

export function ErrorView({ state, dispatch  }) {

  
  return (
    <main className='main-dashboard'>
      <div className='gen-body'>
        <div className='error-box'>
          <h2 className='gen-sub-header'>Uh oh, it appears there was an error: </h2>
          <p>Code { state.errorCode }</p>
          <p>You can get more information on the error here: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" target="_blank">developer.mozilla.org/web/http/status</a></p>
          <p>
            Your work is still saved locally, here in the browser, <strong>but has not been saved to the server</strong>.
            If you close this window or refresh the page, your work will be lost.
            Use the button below to return home, and you are welcome to try again your action again.
          </p>
          <p>
            If you continue to see this page, please backup any unsaved work manually on your computer and contact Josh! 
            You may need to refresh the page in your browser and/or reset your cache, just be aware that if you reload or refresh you will lose any unsaved work.
          </p>
          <div className='blog-end'>
            <button 
              onClick={() => dispatch({ type: 'home' }) }
              className='error-button'
            >Home</button>
          </div>
        </div>
      </div>
    </main>
  )
}