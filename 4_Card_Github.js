const Card = (props) => {
    const innerDivStyle = { display: 'inline-block', marginLeft: 15, color: 'red' }
    return (
        <div style={{ margin: '1em' }}>
			<img width="75" src = {props.avatar_url}  />
            <div style={innerDivStyle}>
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

const CardList = (props) => {
    return(
        <div>
           {props.cards.map(card=><Card {...card}/>)}
        </div>
    );
}

class Form extends React.Component {
    render(){
        return(
            <form>
                <input type = "text" placeholder="Github username"/>
                <button type="submit"> Add card </button>
            </form>
        );
    }
}

class App extends React.Component {
    state ={
        cards: [{
                name: "Name 1",
                avatar_url: "https://avatars3.githubusercontent.com/u/7351847?v=4",
                company: "Company 1"
            },
            {
                name: "Name 2",
                avatar_url: "https://avatars3.githubusercontent.com/u/7351847?v=4",
                company: "Company 2"
            }
        ]
    }; 

    render(){
        return(
            <div>
                <Form/>
                <CardList cards={this.state.cards}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, mountNode);