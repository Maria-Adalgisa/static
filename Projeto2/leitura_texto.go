package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func leitura_texto() {
    counts := make(map[string]int)

    // Abrir o arquivo
    file, err := os.Open("texto.txt")
    if err != nil {
        fmt.Fprintf(os.Stderr, "Erro ao abrir o arquivo: %v\n", err)
        os.Exit(1)
    }
    defer file.Close()

    input := bufio.NewScanner(file)
    for input.Scan() {
        // Ler linha por linha e dividir em palavras
        line := input.Text()
        words := strings.Fields(line)
        for _, word := range words {
            word = strings.Trim(strings.ToLower(word), ".,;:!?'\"")
            counts[word]++
        }
    }

    if err := input.Err(); err != nil {
        fmt.Fprintf(os.Stderr, "Erro ao ler o arquivo: %v\n", err)
    }

    fmt.Println("Palavras duplicadas e suas contagens:")
    for word, n := range counts {
        if n > 1 {
            fmt.Printf("%d\t%s\n", n, word)

        }
    }
}


/*package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
    counts := make(map[string]int)

    // Abrir o arquivo
    file, err := os.Open("texto.txt")
    if err != nil {
        fmt.Fprintf(os.Stderr, "Erro ao abrir o arquivo: %v\n", err)
        os.Exit(1)
    }
    defer file.Close()

    input := bufio.NewScanner(file)
    for input.Scan() {
        // Ler linha por linha e dividir em palavras
        line := input.Text()
        words := strings.Fields(line)
        for _, word := range words {
            word = strings.Trim(strings.ToLower(word), ".,;:!?'\"")
            counts[word]++
        }
    }

    if err := input.Err(); err != nil {
        fmt.Fprintf(os.Stderr, "Erro ao ler o arquivo: %v\n", err)
    }

    fmt.Println("Palavras duplicadas e suas contagens:")
    for word, n := range counts {
        if n > 1 {
            fmt.Printf("%d\t%s\n", n, word)

        }
    }
}*/

