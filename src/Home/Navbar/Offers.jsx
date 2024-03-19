

const Offers = () => {
    return (
        <div className="my-20">
            <div>
            <h1 className="text-4xl font-bold my-8">Deals and Offers</h1>
            </div> 
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="card card-side w-96 bg-base-100 shadow-xl">
  <figure><img className="h-full w-60" src="./src/assets/offer1.png" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">With bkash payment only</h2>
    <p className="text-blue-600 font-semibold">up to 14% discount on the base fare of domestic flights</p>
    
  </div>
</div>  
            <div className="card card-side w-96 bg-base-100 shadow-xl">
  <figure><img className="h-full w-60" src="./src/assets/offer3.png" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">With bkash payment only</h2>
    <p className="text-blue-600 font-semibold">up to 14% discount on the base fare of domestic flights</p>
    
  </div>
</div>  
            <div className="card card-side w-96 bg-base-100 shadow-xl">
  <figure><img className="h-full w-60" src="./src/assets/offer2.png" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">With bkash payment only</h2>
    <p className="text-blue-600 font-semibold">up to 14% discount on the base fare of domestic flights</p>
    
  </div>
</div>  
                
                </div> 
        </div>
    );
};

export default Offers;