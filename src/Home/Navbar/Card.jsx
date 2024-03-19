import img1 from "/src/assets/card-1.png"
import img2 from "/src/assets/card-2.png"
import img3 from "/src/assets/card-3.png"


const Card = () => {
    return (
        <div className="my-20">
           <div>
            <h1 className="text-4xl font-bold my-8">Featured Destinations</h1>
            </div> 
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="card w-96 bg-base-100 shadow-lg">
  <figure className="px-10 pt-10">
    <img src={img1} alt="Shoes" className="rounded-xl w-96 h-60" />
  </figure>
  <div className="card-body items-center text-center">
  
  <p className="font-bold">Discover the timeless city with Touristanbul of Turkish Airlines</p>
  <div className="card-actions">
  <button className="btn w-48 font-bold btn-warning">View More</button>
  </div>
</div>
</div>
            <div className="card w-96 bg-base-100 shadow-lg">
  <figure className="px-10 pt-10">
    <img  src={img2} alt="Shoes" className="rounded-xl w-96 h-60" />
  </figure>
  <div className="card-body items-center text-center">
  
    <p className="font-bold">Discover the timeless city with Touristanbul of Turkish Airlines</p>
    <div className="card-actions">
    <button className="btn w-48 font-bold btn-warning">View More</button>
    </div>
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-lg">
  <figure className="px-10 pt-10">
    <img src={img3} alt="Shoes" className="rounded-xl w-96 h-60" />
  </figure>
  <div className="card-body items-center text-center">
  
  <p className="font-bold">Discover the timeless city with Touristanbul of Turkish Airlines</p>
  <div className="card-actions">
  <button className="btn w-48 font-bold btn-warning">View More</button>
  </div>
</div>
</div>
            </div>
        </div>
    );
};

export default Card;