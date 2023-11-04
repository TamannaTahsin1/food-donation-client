import team1 from '../../assets/img/1.jpg'
import team2 from '../../assets/img/2.jpg'
import team3 from '../../assets/img/3.jpg'
import team4 from '../../assets/img/6.jpg'

const Teams = () => {
  return (
    <div className='container mx-auto my-10'>
      <h1 className='text-center text-4xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-500 to-gray-500 text-transparent bg-clip-text'>Our Volunteers</h1>
      <p className='text-center mb-5 text-sm text-gray-400'>
        Your Attention Is Changed The Part Of World.Give a helping hand to those
        who need it!
      </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className='card w-72 bg-base-100 shadow-xl image-full'>
        <figure>
          <img
            src={team1}
            alt='man'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-yellow-100'>John Smith</h2>
          <p>Distributing food to families in need is a privilege.</p>
        </div>
      </div>
        <div className='card w-72 bg-base-100 shadow-xl image-full'>
        <figure>
          <img
            src={team2}
            alt='man'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-yellow-100'>Ana Smith</h2>
          <p>Serving meals at the homeless shelter warms my heart.</p>
        </div>
      </div>
        <div className='card w-72 bg-base-100 shadow-xl image-full'>
        <figure>
          <img
            src={team3}
            alt='man'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-yellow-100'>John James</h2>
          <p>Packing food boxes for seniors is my way of giving back.</p>
        </div>
      </div>
        <div className='card w-72 bg-base-100 shadow-xl image-full'>
        <figure>
          <img
            src={team4}
            alt='man'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-yellow-100'>Benjamin Emily</h2>
          <p>Cooking for community events brings us all together.</p>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Teams;
