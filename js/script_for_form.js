function verify() {
    console.log("a")
    let a = parseFloat(elementA.value) 
    console.log(a)

    let x = 0
    if (a > 100) {
        x = 0
    }
    else if (a < 61) {
        x = a
    }
    else {
        x = a ** 4
    }

    document.getElementById("x").value = x
}

const elementA = document.getElementById("a")
elementA.addEventListener('keyup', verify)

const button = document.getElementById("verify")
button.addEventListener('click', verify)