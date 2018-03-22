const Card = (props) => {
    const innerDivStyle = { display: 'inline-block', marginLeft: 15, color: 'red' }
    return (
        <div style={{ margin: '1em' }}>
            <img src="http://placehold.it/75" />
            <div style={innerDivStyle}>
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>Name here...</div>
                <div>Company Name here...</div>
            </div>
        </div>
    );
};



ReactDOM.render(<Card />, mountNode);