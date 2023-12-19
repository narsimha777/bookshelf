const ROUTES = {
    Admin: ()=>"/Admin",
    showAdmin: ()=> "/showAdmin",
    showBook:()=>"/showBook",
    QRscanner:()=>"/QRscanner",
    Books:(id)=>`/books/${id}`
}

export default ROUTES;