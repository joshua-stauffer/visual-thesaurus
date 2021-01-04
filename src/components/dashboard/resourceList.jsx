import { ResourceItem } from './resourceItem';
import { ResourceControls } from './resourceControls';

export function ResourceList({data, dataFuncs}){
  return (
    <ul>
      <li><button onClick={()=> dataFuncs.add(-1)}>Add New Starting Item</button></li>
    {data.map(d => (
      <li>
        <ResourceItem title={d.title} />
        <ResourceControls 
          id={d.id}
          index={d.index}
          funcs={dataFuncs}
          isFirst={d.index === 0 ? true : false}
          isLast= {d.index === data.length - 1 ? true : false}
        />
      </li>
    ))}
    </ul>
  )
}