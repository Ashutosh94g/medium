const list = [
    {
        id: 1, 
        _created_at: "2020-01-01T00:00:00.000Z",
        slug: "first",
        title: "First post",
        img: "/src/assets/1.jpg",
        discription: "This is the first post",
        author: {
            name: "Katharina Mazepa",
            img: "/src/assets/2.jpg"
        },
        body: `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
        Aldus PageMaker including versions of Lorem Ipsum.

        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page
         when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
         distribution of letters, as opposed to using 'Content here, content here', making it look like readable
          English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
          text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
          have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
         of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
          a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
           Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
            word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
             sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                 and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
                  ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                  "Lorem ipsum dolor sit amet..", comes from a line 
                  in section 1.10.32.
        `
    },
    {
        id: 2, 
        _created_at: "2021-01-01T00:00:00.000Z",
        slug: "second",
        title: "Can good look get you a better job?",
        img: "/src/assets/3.jpg",
        discription: "How to make yourself look good",
        author: {
            name: "Madame Alaska",
            img: "/src/assets/4.jpg"
        },
        body: `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
        Aldus PageMaker including versions of Lorem Ipsum.

        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page
         when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
         distribution of letters, as opposed to using 'Content here, content here', making it look like readable
          English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
          text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
          have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
         of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
          a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
           Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
            word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
             sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                 and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
                  ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                  "Lorem ipsum dolor sit amet..", comes from a line 
                  in section 1.10.32.
        `
    },
    {
        id: 2, 
        _created_at: "2021-01-01T00:00:00.000Z",
        slug: "third",
        title: "The Thory of Red Dress",
        img: "/src/assets/5.jpg",
        discription: "Influence of the color red on mind",
        author: {
            name: "Corinne Silver",
            img: "/src/assets/6.jpg"
        },
        body: `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
        Aldus PageMaker including versions of Lorem Ipsum.

        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page
         when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
         distribution of letters, as opposed to using 'Content here, content here', making it look like readable
          English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
          text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
          have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
         of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
          a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
           Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
            word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
             sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                 and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
                  ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                  "Lorem ipsum dolor sit amet..", comes from a line 
                  in section 1.10.32.
        `
    },
]

export const Posts = () => {
    return list;
}

export const PostBySlug = (slug) => {
    return list.find(post => post.slug == slug);
}