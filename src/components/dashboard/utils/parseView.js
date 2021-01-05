

export function parseView(rawView) {
  // get id info from view, if necessary
  const viewArgs = rawView.split('-');
  let view, id;
  if (viewArgs.length > 2) {
    view = viewArgs[0] + '-' + viewArgs[1];
    id = Number(viewArgs[2]);
  } else {
    view = rawView;
  }
  return [view, id]
}