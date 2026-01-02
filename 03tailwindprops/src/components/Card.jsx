
export default function Card({username, age , Location,image1 }) {
  return (
    <div className="w-80 flex flex-col rounded-xl bg-black min-h-[19rem] ">
      <div>
        <img  className="object-cover object-center rounded-t-xl" src={image1}
        />
      </div>
      <div className="flex flex-col py-2 px-2 pb-3">
        <div className="">
          <h2 className="font-bold ">Name: {username}</h2> <br/>

           <p className="font-bold ">Age: {age}</p>
           <br/>
            <h2 className="font-bold ">Address: {Location}</h2>
         
        </div>
   
      </div>
    </div>
  )
}
