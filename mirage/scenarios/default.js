export default function(server) {
    let authors = server.createList('author',5);
    authors.forEach(a => {
        let comments = server.createList('blog',Math.floor(Math.random() * 5) + 1,{author:a});
        comments.forEach(c =>{
            server.createList('comment',Math.floor(Math.random()*5)+1,{blog:c});
        });
    });
    
}