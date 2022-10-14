function getDetails(){
    document.getElementById('output').style.display="block";
    const name=document.getElementById('username').value;
    fetch(`https://api.github.com/users/${name}`)
    .then(response=>response.json().then(data=>{
        console.log(data)
        if(data.name == null)
        {
            data.name = "No name specified";
        }
        if(data.bio == null || data.bio=="")
        {
            data.bio = "No bio specified";
        }
        if(data.blog == null || data.blog =="")
        {
            data.blog = "No blog URL specified";
        }
        if(data.location == null)
        {
            data.location = "No city specified";
        }
        if(data.email == null)
        {
            data.email = "No E-mail specified";
        }
        
        document.getElementById('name').innerHTML=data.name;
        document.getElementById('login').innerHTML=data.login;              
        document.getElementById('bio').innerHTML=data.bio;
        document.getElementById('github_url').innerHTML=data.url;
        document.getElementById('blog_url').innerHTML=data.blog;
        document.getElementById('city').innerHTML=data.location;
        document.getElementById('email').innerHTML=data.email;
        document.getElementById('followers').innerHTML=data.followers +" Followers";
        document.getElementById('following').innerHTML=data.following + " Following";
        // document.getElementById('profile').innerHTML=`<img src="${data.avatar_url}" />`
    }))
}