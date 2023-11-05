import img from '../../assets/img/error.jpg'

const ErrorPage = () => {
    return (
        <div className="container mx-auto flex items-center justify-center">
            <img src={img} alt="" className='w-full h-[920px]'/>
        </div>
    );
};

export default ErrorPage;