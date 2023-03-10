import * as Components from './styles';

const SpinningLoader = ({
    width = '25px',
    height = '25px',
    backgroundColor = 'black'
}) => {

    return (
        <Components.SpinningLoader width={width} height={height} backgroundColor={backgroundColor}>
            <div className='loader'></div>
        </Components.SpinningLoader>
    )
}

export default SpinningLoader;