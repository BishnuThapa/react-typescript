

function ListGroup() {
    const items=["Kathmandu","Pokhara","Chitwan","Butwal","Nepalgunj"]
    return (
      <>
            <h2>List</h2>
            { items.length==0 && <p>No Items Found</p>}
            <ul className="list-group">
                {items.map(item => <li key={item} className="list-group-item">{item}</li>)}
          
        </ul>
      </>
    );
}

export default ListGroup 