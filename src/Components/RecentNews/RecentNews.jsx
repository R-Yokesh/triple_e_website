import React from 'react';
import '../../Assets/Css/RecentNews.css'
import RNewsCard1 from '../../Assets/Images/NewsCard/NC 5.jpg';
import RNewsCard2 from '../../Assets/Images/NewsCard/NC 2.png';




const RecentNews = () => {
  return (
    <div>
    <div className="recent-news-container">
      {/* Left Column - 30% */}
      <div className="recent-news-left">
        <h2>Recent<br/> 
        News</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
      </div>

      {/* Right Column - 70% */}
      <div className="recent-news-right">
        <div className="news-card">
          <img src="https://placehold.co/242x240" alt="News 1" />
          <div className="news-details">
            <p>29th July, 2017</p>
            <h3>Lorem ipsum dolor sit amet,</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.</p>
          </div>
        </div>

        <div className="news-card">
          <img src={RNewsCard2} alt="News 2" />
          <div className="news-details">
            <p>29th July, 2017</p>
            <h3>Lorem ipsum dolor sit amet,</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.</p>
          </div>
        </div>

        <div className="news-card">
          <img src="https://placehold.co/242x240" alt="News 3" />
          <div className="news-details">
            <p>29th July, 2017</p>
            <h3>Lorem ipsum dolor sit amet,</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="all-news-container">
      {/* Left Column - 30% */}
      <div className="all-news-left">
        <h2>All News</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <hr/>
        <div className='text-below'>
          <h5>Who we are</h5><br/>
          <h5>Features</h5><br/>
          <h5>Press Coverage</h5>
        </div>
      </div>

      {/* Right Column - 70% */}
      <div className="all-news-right">
        <div className="news-card">
          <img src="https://placehold.co/242x240" alt="News 1" />
          <div className="news-details">
            <p>29th July, 2017</p>
            <h3>Lorem ipsum dolor sit amet,</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.</p>
          </div>
        </div>

        <div className="news-card">
          <img src="https://placehold.co/242x240" alt="News 2" />
          <div className="news-details">
            <p>29th July, 2017</p>
            <h3>Lorem ipsum dolor sit amet,</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.</p>
          </div>
        </div>

        <div className="news-card">
          <img src="https://placehold.co/242x240" alt="News 3" />
          <div className="news-details">
            <p>29th July, 2017</p>
            <h3>Lorem ipsum dolor sit amet,</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.</p>
          </div>
        </div>

        <div className="news-card">
          <img src="https://placehold.co/242x240" alt="News 1" />
          <div className="news-details">
            <p>29th July, 2017</p>
            <h3>Lorem ipsum dolor sit amet,</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.</p>
          </div>
        </div>

        <div className="news-card">
          <img src="https://placehold.co/242x240" alt="News 1" />
          <div className="news-details">
            <p>29th July, 2017</p>
            <h3>Lorem ipsum dolor sit amet,</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.</p>
          </div>
        </div>

        <div className="news-card">
          <img src="https://placehold.co/242x240" alt="News 1" />
          <div className="news-details">
            <p>29th July, 2017</p>
            <h3>Lorem ipsum dolor sit amet,</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.</p>
          </div>
        </div>

        <div className="news-card">
          <img src="https://placehold.co/242x240" alt="News 1" />
          <div className="news-details">
            <p>29th July, 2017</p>
            <h3>Lorem ipsum dolor sit amet,</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.</p>
          </div>
        </div>

        <div className="news-card">
          <img src="https://placehold.co/242x240" alt="News 1" />
          <div className="news-details">
            <p>29th July, 2017</p>
            <h3>Lorem ipsum dolor sit amet,</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.</p>
          </div>
        </div>

        <div className="news-card">
          <img src="https://placehold.co/242x240" alt="News 1" />
          <div className="news-details">
            <p>29th July, 2017</p>
            <h3>Lorem ipsum dolor sit amet,</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.</p>
          </div>
        </div>

      </div>
    </div>
    
    </div>
    
  );
};

export default RecentNews;
