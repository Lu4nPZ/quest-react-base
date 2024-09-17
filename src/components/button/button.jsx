import PropTypes from 'prop-types'

function Button({label}){
    return <button onClick={() => alert(`A label desse botão é ${label}`)}>{label}</button>
}

Button.propTypes = {
    label: PropTypes.string,
}

export default Button;