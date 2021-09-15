import { createGenerateClassName } from '@material-ui/styles';
import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import './tinderCards.css'

function TinderCards() {
    const [people, setPeople]= useState([
        {
            name: 'Elon Musk',
            url: 'https://images.indianexpress.com/2020/11/elon-musk-bloomberg-1200.jpg'
        },
        {
            name: 'Jeff Bezos',
            url:'https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg'
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('You swiped: ' + nameToDelete)
      }
      
      const outofFrame = (name) => {
        console.log(name + ' left the screen')
      }

    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
                {people.map((person) => (
                    <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outofFrame(person.name)}
                    >
                        <div 
                        style={{backgroundImage: `url(${person.url})`}}
                        className='card'
                        >
                            <h3>
                                {person.name}
                            </h3>
                            
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
