import React from 'react';
import './Event.css';

const Event = () => {

    return (
        <div>
            <h3>Platter Lists</h3>
            <p><small>Please note that : platters are designed to cater for 10 guests</small></p>
            <div className='platters-list'>
                <h4>1.Cheese platter</h4>
                <p>Australian farm house cheeses and seasonal tropical fruits served with crisp crackers, nuts & fruit chutney</p>
                <h4>2.Antipasto platter</h4>
                <p> Chefs selections of gourmet cheeses, vegetables & meats</p>
                <h4>3.Trio Dips and Turkish toasts</h4>
                <p> Basil & cashew pesto; spiced sweet potato hummus; beetroot & fetta hummus</p>
                <h4>4.Asian platter</h4>
                <p> Vegetarian spring rolls, Thai fish cakes, chicken satay sticks, wontons</p>
                <h4>5.Australian Platter</h4>
                <p> Mini beef & chicken pies, sausage rolls, quiches served with tomato chutney</p>
                <h4>6.Vegetarian Platter</h4>
                <p> Mini vegetarian quiches, mini spinach and ricotta triangles, falafel & mini pizzas</p>
                <h4>7.Japanese Platter</h4>
                <p> Chef selection of mini rice paper rolls with brown & wild rice sushi served with pickled ginger, wasabi & soy</p>
            </div>
        </div>
    );
};

export default Event;