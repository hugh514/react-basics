import React from 'react'

const PropsExample = ({ idade, nome }) => {
    return (
        <div>
            <h4>Olá {nome}</h4>
            <h4>Você tem {idade} anos.</h4>
        </div>
    )
}

export default PropsExample