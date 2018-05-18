// From the snippet below extract the following components:
//     - UserInfo
//     - Avatar
//     - Comment Body
// - Badges
//
// You may organize each however you want.
//     I have not provided any data. Try and break it down without, and add in some dummy datat when ready to test.

import * as reactDOM from "express";

const data = [
    {
        author: {
            avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
            name: "neo"
        },
        commentHeading: "I am the One.",
        text: "Humanity, relax. I will save you.",
        date: "Today",
        userBadge: [
            'Superman',
            'Herald',
            'Engineer'
        ]
    },
    {
        author: {
            avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
            name: "Morpheus"
        },
        commentHeading: "There is no spoon.",
        text: "Don't htink you are. KNow you are.",
        date: "Two days ago",
        userBadge: [
            'The man',
            'Bard',
            'Samurai swordsman'
        ]
    }
]

fucntion Badge(props){
    return(
        <div className="badge">{props.badgeTitle}</div>

    )
}


function Comment(props) {
    console.log(props);

    const badges = props.data.userBadge.map((badgeTitle)=>{
      return (
          <Badge badgeTitle = {badgeTitle}/>

      )
    })

    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.data.author.avatarUrl}
                    alt={props.data.author.name}
                />
                <div className="UserInfo-name">
                    {props.data.author.name}
                </div>
            </div>

            <div className="Comment-body">
                <h1>{props.data.commentHeading}</h1>
                <div className="Comment-text">{props.data.text}</div>
                <div className="Comment-date">
                    {(props.data.date)}
                </div>
            </div>

            <div className="UserBadges">
                <Badge badgeTitle = {props.data.userBadge[0]}/>
                <Badge badgeTitle = {props.data.userBadge[0]}/>
                <Badge badgeTitle = {props.data.userBadge[0]}/>
            </div>
        </div>
    );
}

reactDOM.render(
    <div>
        <comment data={data[0]}/>
        <comment data={data[1]}/>
    </div>,
    document.getElementById('root')
)