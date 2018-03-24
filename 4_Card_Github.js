const Card = (props) => {
    const innerDivStyle = { display: 'inline-block', marginLeft: 15, color: 'red' }
    return (
        <div style={{ margin: '1em' }}>
            < img width="75" src = "https://avatars3.githubusercontent.com/u/7351847?v=4" / >
            <div style={innerDivStyle}>
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>Name here...</div>
                <div>Manan</div>
            </div>
        </div>
    );
};

const CardList = (props) => {
    return(
        <div>
            <Card/>
        </div>
    );
}

ReactDOM.render(<CardList />, mountNode);