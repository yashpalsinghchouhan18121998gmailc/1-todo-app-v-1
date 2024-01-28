function Items({ todoName, todoDate , onClickDltBtn}) {
    return (
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-4 ">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-4">
            <button type="button" className="btn btn-danger kg-button" onClick={() => onClickDltBtn(todoName)}>
              Delete
            </button>
          </div>
        </div>
       </div>
    );
  }
  
  export default Items;


