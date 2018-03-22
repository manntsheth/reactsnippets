const Card = (props) => {
    return(
        <div>
            <img src="http://placehold.it/75"/>
            <div className="info">
                <div>Name here...</div>
                <div>Company Name here...</div>
            </div>
        </div>
    );
};



ReactDOM.render(<Card/>, mountNode);