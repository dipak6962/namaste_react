


    // div parent
        //div child
            //h1 i am h1
            // react createelement create react object not html element and while rendering these object react convert html element     


    const heading1=React.createElement("div",{id:"parent"},
        [React.createElement("div",{id:"child"},
            React.createElement("h1",{id:"h11"},
                "I am H1"
            )
        ),React.createElement("div",{id:"child2"},
            React.createElement("h1",{id:"h12"},
                "I am H1 sibling"
            )
        )]
    )

    // const heading=React.createElement("h1",{
    //     id:"heading",xyc:'slfa'
    // },"hello world from react!!");


    const root=ReactDOM.createRoot(document.getElementById("root"));


    root.render(heading1);