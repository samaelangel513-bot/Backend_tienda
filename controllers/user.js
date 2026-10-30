const usuarios = {};

usuarios.get =  (req, res) => {
 res.json({
    msg: "Get - Usuarios - controllers"
 })
}

usuarios.post = (req, res) => {
 res.json({
    msg: "Post - Usuarios - controllers"
})
}

usuarios.delete = ('/', (req, res) => {
 res.json({
    msg: "Delete - Usuarios - controllers"
 })
});

usuarios.path = ('/', (req, res) => {
 res.json({
    msg: "Patch - Usuarios - controllers"
 })
});

export default usuarios 