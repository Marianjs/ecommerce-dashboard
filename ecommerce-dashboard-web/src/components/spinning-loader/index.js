import * as Components from './styles';

/**
 * Spinning loader component
 * @param {string} width - sets the width 
 * @param {string} height - sets the height 
 * @param {string} backgroundColor - sets the background color
 * @param {string} color - sets the color
 */

const SpinningLoader = ({
    width = '25px',
    height = '25px',
    backgroundColor = 'black',
    color = 'fuchsia'
}) => {

    return (
        <Components.SpinningLoader 
            width={width} 
            height={height} 
            backgroundColor={backgroundColor}
            color={color}
        >
            <div className='loader'></div>
        </Components.SpinningLoader>
    )
}

export default SpinningLoader;