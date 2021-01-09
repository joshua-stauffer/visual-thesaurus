import { ResourceItem } from './resourceItem';
import { ResourceControls } from './resourceControls';
import { compareObjOrder } from './utils/compareObjOrder';

export function ResourceList({dataObject, dataFuncs, view, name}){
  const { data, isEditedList } = dataObject;
  data.sort(compareObjOrder)

  return (
    <ul>
      
    {data.map(d => (
      <li>
        <p>
          {d.order &&  d.order }
          {d.isEdited && ' - Order of this item has been edited'}
        </p>
        <ResourceItem
          key={'item' + d.id}
          primary={d.primary}
          secondary={d.secondary}
          editWarning={isEditedList.includes(d.id) ? true : false}/>
        <ResourceControls 
          id={d.id}
          key={'control' + d.id}
          order={d.order}
          funcs={dataFuncs}
          isFirst={d.order === 0 ? true : false}
          isLast={d.order === data.length - 1 ? true : false}
          view={view}
        />
      </li>
    ))}
      <li><button onClick={()=> dataFuncs.add(-1)}>Add New { name }</button></li>
    </ul>
  )
}