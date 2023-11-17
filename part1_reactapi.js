const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

function app() {
    return React.createElement('div', {}, [
        'Welsome To React With API',
        'My name is App!',
        buttonElement()
    ])
}

function buttonElement() {
    const btnProps = {
        onClick: () => {
            console.log('Click me already!')
        }
    }

    return React.createElement('button', btnProps, [
        'Click me!'
    ])
}

root.render(app())