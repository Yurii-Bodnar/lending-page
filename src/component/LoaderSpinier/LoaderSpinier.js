import { ThreeDots } from 'react-loader-spinner';
const LoaderSpinier = () => {
  return (
    <ThreeDots
      height="100"
      width="100"
      radius="9"
      color="#2DA6B1"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50vh',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default LoaderSpinier;
