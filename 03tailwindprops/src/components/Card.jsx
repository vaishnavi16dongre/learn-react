
export default function Card(props) {
  return (
    <div className="w-80 flex flex-col rounded-xl bg-black min-h-[19rem] ">
      <div>
        <img
          src="https://i.pinimg.com/736x/08/2d/cc/082dcc58b75d24b10e40ec8137b5b86b.jpg"
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="">
          <h2 className="font-bold ">Name: {props.username}</h2> <br/>

           <p className="font-bold ">Age: {props.age}</p>
           <br/>
            <h2 className="font-bold ">Address: {props.Location}</h2>
         
        </div>
        <div className="flex  justify-between">
          <p></p>
       
        </div>
      </div>
    </div>
  )
}
