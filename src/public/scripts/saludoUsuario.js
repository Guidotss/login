export const getData = async () =>{
    const url = 'http://localhost:8080/login/user';
    const data = await fetch(url); 
    const dataJSON = await data.json();
    return dataJSON;     
}

export const saludarUsuario = async (divUsuario) =>{
    const usuario = await getData();
    if( usuario.email != undefined){
        divUsuario.innerHTML =  `<h2>Bienvenido ${usuario.email}</h2>`;
    }else{
        divUsuario.innerHTML =  `<h2>Bienvenido ${usuario.nombre}</h2>`;
    }
}
saludarUsuario(); 
