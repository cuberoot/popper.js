// @flow
export default function contains(parent: Element, child: Element) {
  let next = child;
  do {
    if (next && next.isSameNode(parent)) return true;
    // $FlowFixMe: need a better way to handle this...
    next = next.parentNode || next.host;
  } while (next);
  return false;
}
