import Card from 'react-bootstrap/Card';
import { useState } from 'react';

const HomePage = () => {
    [games, setGames] = useState([
        { gameName: '1', amount: '$50' },
        { gameName: '2', amount: '$25' },
        { gameName: '3', amount: '-$10' }
    ]);

    const Game = (props) => {
        return (
            <Card>
                <h1>Game Name {props.gameName}</h1>
                <h1>Amount Won {props.amount}</h1>
            </Card>
        );
    }

    return (<div className = "HomePage">
                <div className = "NavBar">
                    <NavBar>
                    </NavBar>
                </div>
                <div className = "Sessions">
                    return (
                        <div> {Sessions.map((gamesession) => {
                        return (
                            <Game>
                                key={}
                                gameName = {gamesession.gameName}
                                amount = {gamesession.amount}
                            </Game>
                        );
                    })} </div> )
                </div>
            </div>);
}


export default HomePage