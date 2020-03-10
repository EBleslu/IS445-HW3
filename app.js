const error = document.querySelector('#error')
const error2 = document.querySelector('#error2')
const result = document.querySelector('#result')
const textarray = document.querySelector('#array')
const textsum = document.querySelector('#sum')
const textbinary = document.querySelector('#binary')


function makeArray(vstart, vend, vstep) {
    var narray = []
    narray.push(vstart)
    var val = vstart + vstep
    while ((vstep > 0 && val < vend) || (vstep < 0 && val > vend)) {
        narray.push(val)
        val = val + vstep
    }
    narray .push(vend)
    return narray
}

function makeSum(varray) {
    var nsum = 0
    for (var i = 0; i < varray.length; i++) {
        nsum = nsum + varray[i]
    }
    return nsum
}

function makeBinary(varray) {
    var vbinary = []
    for (var i = 0; i < varray.length; i++) {
        if (varray[i] >= 0)
            vbinary.push((varray[i]).toString(2))
    }
    return vbinary
}

function displayResult(varray, vsum, vbinary) {
    var ntextarray = "The generated array is "
    var ntextsum = "The sum is "
    var ntextbinary = "The binary of absolut element values are: "
    for (var i = 0; i < (varray.length - 1); i++) {
        ntextarray = ntextarray.concat(varray[i].toString(), ",")
    }
    ntextarray = ntextarray.concat(varray[varray.length - 1].toString())
    ntextsum = ntextsum.concat(vsum.toString())
    if (vbinary.length > 0) {
        for (var j = 0; j < (vbinary.length - 1); j++) {
            ntextbinary = ntextbinary.concat(vbinary[j], ",")
        }
        ntextbinary = ntextbinary.concat(vbinary[vbinary.length - 1])
    } else {
        ntextbinary = ntextbinary.concat("none")
    }
    textarray.innerHTML = ntextarray
    textsum.innerHTML = ntextsum
    textbinary.innerHTML = ntextbinary
    error.style.display = 'none'
    error2.style.display = 'none'
    result.style.display = 'block'
}

function main() {
    var start = prompt("Enter the start:")
    if (start === '' || isNaN(start)) {
        error.style.display = 'block'
        return
    }
    var end = prompt("Enter the end:")
    if (end === '' || isNaN(start)) {
        error.style.display = 'block'
        return
    }
    var step = prompt("Enter the step:")
    if (step === '' || step === '0' || isNaN(step)) {
        error.style.display = 'block'
        return
    }
    var valstart = parseInt(start, 10)
    var valend = parseInt(end, 10)
    var valstep = parseInt(step, 10)
    if ((valend > valstart && valstep < 0) || (valend < valstart && valstep > 0)) {
        error2.style.display = 'block'
        return
    }
    var valarray = makeArray(valstart, valend, valstep)
    var valsum = makeSum(valarray)
    var valbinary = makeBinary(valarray)
    displayResult(valarray, valsum, valbinary)
}

main()