import team1 from '../../assets/img/1.jpg'
import team2 from '../../assets/img/2.jpg'
import team3 from '../../assets/img/3.jpg'
import team4 from '../../assets/img/6.jpg'

const Teams = () => {
  return (
    <div className='container mx-auto'>
      <h1>Our Volunteers</h1>
      <p>
        Your Attention Is Changed The Part Of World.Give a helping hand to those
        who need it!
      </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className='card w-96 bg-base-100 shadow-xl image-full'>
        <figure>
          <img
            src={team1}
            alt='man'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>John Smith</h2>
          <p>Serving meals at the homeless shelter warms my heart.</p>
        </div>
      </div>
        <div className='card w-96 bg-base-100 shadow-xl image-full'>
        <figure>
          <img
            src={team2}
            alt='man'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>John Smith</h2>
          <p>Serving meals at the homeless shelter warms my heart.</p>
        </div>
      </div>
        <div className='card w-96 bg-base-100 shadow-xl image-full'>
        <figure>
          <img
            src={team2}
            alt='man'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>John Smith</h2>
          <p>Serving meals at the homeless shelter warms my heart.</p>
        </div>
      </div>
        <div className='card w-96 bg-base-100 shadow-xl image-full'>
        <figure>
          <img
            src={team2}
            alt='man'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>John Smith</h2>
          <p>Serving meals at the homeless shelter warms my heart.</p>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Teams;
