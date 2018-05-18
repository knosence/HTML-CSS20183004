// function Coin(){
//     return(
//         <h1>Sanity Check</h1>
//     )
// }

const Coin = React.createClass({
        sides: [
            'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
            'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'
        ],

        getInitialState: function () {
            return {
                image: this.sides[0]
            }
        },
        flipCoin: function () {
            let newSide = 0;
            let randomSide = Math.round(Math.random());
            newSide = this.sides[randomSide];
            this.setState({
                image: newSide
            });
        },
        render: function () {
            return (
                <div>
                    <button onClick={this.flipCoin}>Click To Flip</button>
                    <img src={this.state.image}/>
                </div>
            )
        }

    }
);


ReactDOM.render(
    <Coin />,
    document.getElementById('root')
)