let user=document.getElementById('userID');

async function fetchUser(username){
    let response=await fetch(`https://api.github.com/users/${username}`);
    let result=await response.json();
    if(!result.avatar_url){
        document.getElementById("userProfile").innerHTML=`<h1>User Not Found!</h1>`
        return
    }
    if(!result.bio){
        result.bio=' '
    }
    document.getElementById('userProfile').innerHTML=`
    <div class="userInfo">
            <img src=${result.avatar_url} class="userImg" alt="">
            <div class="userDetail">
                <p class="userName">${result.name}</p>
                <p class="userBio">${result.bio}</p>
            </div>
        </div>
        <div class="userFollow">
            <div class="Follower">
                <div class="repo">
                    <p>Follower</p>
                    <p>${result.followers}</p>
                </div>
                <div class="repo">
                    <p>Following</p>
                    <p>${result.following}</p>
                </div>
                <div>
                    <p>Repo</p>
                    <p>${result.public_repos}</p>
                </div>
            </div>
            <a href= ${result.html_url} target='_blank' class=VisitProfile>
            
            <div class="VisitProfile">
                Visit Profile
            </div>
            </a>
        </div>`;
 

}

document.getElementById("btn").addEventListener('click',()=>{
    document.getElementById("userProfile").innerHTML=`<span class="loader"></span>`
    let userId=user.value ;
    document.getElementById("userProfile").classList.add('secondDiv');
    document.getElementById("userProfile").classList.remove('secondDivHidden'); 
    fetchUser(userId);

});


