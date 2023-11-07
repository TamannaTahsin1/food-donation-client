// eslint-disable-next-line react/prop-types
const TableRow = ({ myFood }) => {
  const {_id, food_name, food_image, date, donate, location} = myFood || {};
  const handleDelete = id =>{
    const proceed = confirm('Are you sure you want to delete?')
    if(proceed){
      fetch(``)
      .then(res => res.json())
      .then(data =>{
        console.log(data)
      })
    }
  }
  return (
    <>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={food_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{food_name}</h2>
    <p>Expire Date: {date}</p>
    <p>Amount: {donate}</p>
    <p>Pickup Location: {location}</p>
    <div className="card-actions justify-end">
      <button onClick={() => handleDelete(_id)} className="btn btn-primary">Cancel</button>
    </div>
  </div>
</div>
    </>
  );
};

export default TableRow;
