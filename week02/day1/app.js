
function createTag(arr) {
    let img = document.createElement(arr[0])
    img.src = arr[1]
    document.body.appendChild(img)
}

createTag(['img','https://images.unsplash.com/photo-1705130819768-354fcee50404?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] )

createTag('img','https://plus.unsplash.com/premium_photo-1699534956937-8be2c4c68e03?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' )