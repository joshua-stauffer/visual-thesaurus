export function SearchText({ userSearch }) {
  return userSearch.length === 0 ?
    null
    :
    <p>Sorry, your search doesn't match any terms.</p>
}