import { ResourceItem } from './resourceItem';
import { ResourceControls } from './resourceControls';

export function ResourceList({data, dataFuncs, view, name}){
  return (
    <ul>
      <li><button onClick={()=> dataFuncs.add(-1)}>Add New { name }</button></li>
    {data.map(d => (
      <li>
        <ResourceItem key={'item' + d.id} primary={d.primary} secondary={d.secondary} editWarning={d.isEdited}/>
        <ResourceControls 
          id={d.id}
          key={'control' + d.id}
          index={d.index}
          funcs={dataFuncs}
          isFirst={d.index === 0 ? true : false}
          isLast={d.index === data.length - 1 ? true : false}
          view={view}
        />
      </li>
    ))}
    </ul>
  )
}