import img1 from "/src/assets/BBA.png"
import img2 from "/src/assets/Singapore Airlines.png"
import img3 from "/src/assets/Emirates (1).png"
import img4 from "/src/assets/Malaysia.png"
import img5 from "/src/assets/Turkish Airlines.png"
import img6 from "/src/assets/american.png"

const Popular = () => {
    return (
        <div  className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <div>
                <div className="flex gap-2 my-4 bg-white shadow-sm">
                    <img src={img1} alt="" />
                    <div>
                        <h3>Biman Bangladesh Airlines
                        </h3>
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<p>4</p>
<p>( 753 review )</p>
</div>
                    </div>
                </div>
                <div className="flex gap-2 my-4 bg-white shadow-sm">
                    <img src={img2} alt="" />
                    <div>
                        <h3>Singapore Airlines
                        </h3>
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<p>4</p>
<p>( 753 review )</p>
</div>
                    </div>
                </div>
                <div className="flex gap-2 my-4 bg-white shadow-sm">
                    <img src={img3} alt="" />
                    <div>
                        <h3>Emirates
                        </h3>
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<p>4</p>
<p>( 753 review )</p>
</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex gap-2 my-4 bg-white shadow-sm">
                    <img src={img3} alt="" />
                    <div>
                        <h3>Emirates
                        </h3>
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<p>4</p>
<p>( 753 review )</p>
</div>
                    </div>
                </div>
                <div className="flex gap-2 my-4 bg-white shadow-sm">
                    <img src={img4} alt="" />
                    <div>
                        <h3>malaysia Airlines
                        </h3>
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<p>4</p>
<p>( 753 review )</p>
</div>
                    </div>
                </div>
                <div className="flex gap-2 my-4 bg-white shadow-sm">
                    <img src={img1} alt="" />
                    <div>
                        <h3>Biman Bangladesh Airlines
                        </h3>
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<p>4</p>
<p>( 753 review )</p>
</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex gap-2 my-4 bg-white shadow-sm">
                    <img src={img5} alt="" />
                    <div>
                        <h3>Turkish Airlines
                        </h3>
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<p>4</p>
<p>( 753 review )</p>
</div>
                    </div>
                </div>
                <div className="flex gap-2 my-4 bg-white shadow-sm">
                    <img src={img1} alt="" />
                    <div>
                        <h3>Biman Bangladesh Airlines
                        </h3>
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<p>4</p>
<p>( 753 review )</p>
</div>
                    </div>
                </div>
                <div className="flex gap-2 my-4 bg-white shadow-sm">
                    <img src={img4} alt="" />
                    <div>
                        <h3>malaysia Airlines
                        </h3>
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<p>4</p>
<p>( 753 review )</p>
</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex gap-2 my-4 bg-white shadow-sm">
                    <img src={img4} alt="" />
                    <div>
                        <h3>malaysia Airlines
                        </h3>
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<p>4</p>
<p>( 753 review )</p>
</div>
                    </div>
                </div>
                <div className="flex gap-2 my-4 bg-white shadow-sm">
                    <img src={img6} alt="" />
                    <div>
                        <h3>american airlines
                        </h3>
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<p>4</p>
<p>( 753 review )</p>
</div>
                    </div>
                </div>
                <div className="flex gap-2 my-4 bg-white shadow-sm">
                    <img src={img5} alt="" />
                    <div>
                        <h3>Turkish Airlines
                        </h3>
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<p className="gap-4">4</p>
<p>( 753 review )</p>
</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;