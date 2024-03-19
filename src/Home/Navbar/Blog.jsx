import img1 from "/src/assets/blog-3.png"
import img2 from "/src/assets/profile.png"

const Blog = () => {
    return (
        <div className="my-20">
           <div>
            <h1 className="text-4xl font-bold my-8">Featured Destinations</h1>
            </div>


            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="card w-96 glass">
  <figure><img src={img1} alt="car!"/></figure>
  <div className="card-body">
    <div className="flex gap-8">
    <h2 className="text-[#FFB700]">Historical</h2>
    <p>14 septembar 23</p>
    </div>
    <p>Historical Journeys: Stepping Back in Time Through Travel</p>
    <div className="flex">
      <img src={img2} alt="" />
      <p>Aria Montague</p>
      <h4 className="text-[#FFB700]">Readmore</h4>
    </div>
  </div>
</div>
            <div className="card w-96 glass">
  <figure><img src={img1} alt="car!"/></figure>
  <div className="card-body">
    <div className="flex gap-8">
    <h2 className="text-[#FFB700]">Historical</h2>
    <p>14 septembar 23</p>
    </div>
    <p>Historical Journeys: Stepping Back in Time Through Travel</p>
    <div className="flex">
      <img src={img2} alt="" />
      <p>Aria Montague</p>
      <h4 className="text-[#FFB700]">Readmore</h4>
    </div>
  </div>
</div>
            <div className="card w-96 glass">
  <figure><img src={img1} alt="car!"/></figure>
  <div className="card-body">
    <div className="flex gap-8">
    <h2 className="text-[#FFB700]">Historical</h2>
    <p>14 septembar 23</p>
    </div>
    <p>Historical Journeys: Stepping Back in Time Through Travel</p>
    <div className="flex">
      <img src={img2} alt="" />
      <p>Aria Montague</p>
      <h4 className="text-[#FFB700]">Readmore</h4>
    </div>
  </div>
</div>
                </div>  
        </div>
    );
};

export default Blog;