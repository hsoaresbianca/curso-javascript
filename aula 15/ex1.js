let valores = [9, 2, 3, 6, 1]

// usando o for "tradicional"
for (let index = 0; index < valores.length; index++) {
    console.log(`O número ${valores[index]} está na posição ${index}`)
}

// OU, usando o "for in", exclusivo para array

for (let key in valores) {
    console.log(valores[key])
}