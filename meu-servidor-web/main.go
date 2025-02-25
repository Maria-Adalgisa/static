package main

import (
	"fmt"
	"net/http"
	"path/filepath"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
    filepath := filepath.Join(".", "index.html")
    http.ServeFile(w, r, filepath)
}

func reloadHandler(w http.ResponseWriter, r *http.Request) {
    http.Redirect(w, r, "/", http.StatusFound)
}

func main() {
    fs := http.FileServer(http.Dir("static"))
    http.Handle("/static/", http.StripPrefix("/static/", fs))

    http.HandleFunc("/", helloHandler)
    http.HandleFunc("/reload", reloadHandler)

    fmt.Println("Servidor rodando na porta 8080...")
    http.ListenAndServe(":8080", nil)
}



/*package main

import (
	"fmt"
	"net/http"
	"path/filepath"
)
func helloHandler(w http.ResponseWriter, r *http.Request) {
    //fmt.Fprintln(w, "Olá, mundo! Thanks my God! Obrigada meu Deus! Filipe")
    filepath := filepath.Join(".", "index.html")
    //filepath := filepath.Join(".", "/index.html")
    http.ServeFile(w, r, filepath)
}
func reloadHandler(w http.ResponseWriter, r *http.Request) {
    http.Redirect(w, r, "/", http.StatusFound)
}
func main() {
        http.HandleFunc("/", helloHandler)
        http.HandleFunc("/reload", reloadHandler)
        fmt.Println("Servidor rodando na porta 8080...")      
        http.ListenAndServe(":8080", nil)
        }
        -----------------------------------------------------*/
       


