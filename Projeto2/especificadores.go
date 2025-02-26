package main

import (
	"fmt"
)

func especificadores() {
    var i int = 42
    var f float64 = 3.14159
    var s string = "Olá, Mundo!"
    var b bool = true

    fmt.Printf("Inteiro: %d\n", i)
    fmt.Printf("Ponto flutuante: %f\n", f)
    fmt.Printf("String: %s\n", s)
    fmt.Printf("Booleano: %t\n", b)
    fmt.Printf("Tipo de i: %T\n", i)
    fmt.Printf("Valor padrão de i: %v\n", i)
}