import PropTypes from 'prop-types'

function Uppercase({text, color}){
    return <p style={{color: color, textTransform: 'uppercase'}}>{text}</p>
}

Uppercase.propTypes ={
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Uppercase;