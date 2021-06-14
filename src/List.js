import React from 'react';

function List({data}) {
    // console.log(data);
    const res = data.map((item)=>{
        return <h4 key={item.id}>{item.title}</h4>
      })
    return (
        <div>
           {res}
        </div>
    )
}

export default List;